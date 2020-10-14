import React, { Component, State } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, KeyboardAvoidingView,
  TextInput, Keyboard, TouchableOpacity,
  Image, TouchableWithoutFeedback, Picker, ActivityIndicator, Modal, TouchableHighlight
} from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LeaveReq extends React.Component {
   constructor(props){
     super(props);
     this.state={
      date:'',
      dateTo:'',
      //emp_id: 25
      modalVisible: false,
      sick_leave: '',
      earned_leave: '',
      casual_leave: '',
      short_leave: ''
     }
   }

   toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }


     
  RemainLeave = () => {
    const { emp_id } = this.props.route.params;
    fetch('http://'+global.IP+'/BIIT_HR/api/EmployeeLeave/OneEmpLeave?emp_id='+emp_id+'', {
      })
  
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({sick_leave: data[0].sick_leave})
          this.setState({earned_leave: data[0].earned_leave})
          this.setState({casual_leave: data[0].casual_leave})
          this.setState({short_leave: data[0].short_leave})


            console.log(data[0].sick_leave)
          console.log(data[0].total_leave)
          
    
        })
        .catch(error => error)

  }



   PostData = async () => {
    const { emp_id } = this.props.route.params;
    // this.state.PostLeave.push({
      
    //   'leave_type': this.state.leaveType,
    //   'leave_from' : this.state.date,
    //   'leave_to' : this.state.dateTo,
    //   'leave_description' : this.state.DeText,
    //   'emp_id' : this.state.Eid,

    <ActivityIndicator size="large" />
    // });
    this.setState({ dialogVisible: false });
    fetch('http://'+global.IP+'/BIIT_HR/api/leaves/PostLeave', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      
        body: JSON.stringify({
          'leave_type': this.state.leaveType,
          'date_from' : this.state.date,
          'date_to' : this.state.dateTo,
          'leave_description' : this.state.DeText,
          'emp_id' : emp_id,
          'leave_status' : 'Pending',
        })
  
      
    })
      .then((Response) => Response.json())
      .then((responseData) => {
        alert("Request Sent Successfully!", responseData)
        console.log(responseData)
          this.props.navigation.navigate("Home")
//this.componentDidMount()
      })
      .catch(error => console.log(error))
     // console.log("haii")
    
  }

componentDidMount(){
  this.RemainLeave();
}

  render() {
  //  const{text}=this.props.route.params;
  const {date} = this.state
  const { emp_id } = this.props.route.params;
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View>
            {/* <View style={styles.buttonContainerRemain}>
                    <TouchableOpacity style={styles.UserSignIn} onPress={() => this.props.navigation.navigate("RemainingLeave",  {emp_id: emp_id})}  >
    <Text style={styles.buttonText2}>View Remaining Leaves {emp_id}</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={{ flexDirection: 'row', marginTop: 10, fontSize: 20 }}>

                   {/* <TouchableOpacity style={styles.UserSignIn} onPress={() => this.props.navigation.navigate("EmpRemainL",  {emp_id: emp_id})}  >
                          <Text>Remaining Leaves</Text>
                    </TouchableOpacity> */}

                    <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
              
               {/* <Icon style={{marginRight:10}} type="ionicon" name="clear" size={40} color='black' onPress={() => navigation.navigate("")} /> */}
              <View style={{marginLeft: ('85%')}}>
               <Icon name="close" size={30} color="#900"  onPress = {() => { this.toggleModal(!this.state.modalVisible)}}/>
               </View>
                  <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Sick Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >


                  <Text style={styles.textStyle}>{this.state.sick_leave}</Text>
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Earned Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                  <Text style={styles.textStyle}>{this.state.earned_leave}</Text>
                          
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Casual Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >
                  <Text style={styles.textStyle}> {this.state.casual_leave}</Text>

                          
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Short Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >
                  <Text style={styles.textStyle}>{this.state.short_leave}</Text>
                          
                        </View>
                    </View>
               </View>
            </Modal>
            
            <TouchableHighlight style={{borderWidth:2 , borderColor: 'green', borderRadius: 10, width: 150, height: 25, marginLeft: ('25%')}} onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.Remaintext}>Remaining Leaves</Text>
            </TouchableHighlight>
                  </View>
            <View style={{ flexDirection: 'row', marginTop: 30, fontSize: 20 }}>
            <Text style={styles.textstyle}>Position</Text>
            <Picker
              onValueChange={leaveType => {
                this.setState({ leaveType })
                console.log('changed to', leaveType)
              }}
              selectedValue={this.state.leaveType}
              style={{ height: 40, width: wp('70%'), color: 'black', marginLeft: ('20%'), fontSize: 20 }}
              mode='dialog'
            >
              <Picker.Item label="Select Type" value="short1" />
              <Picker.Item label="Short Leave" value="short" />
              <Picker.Item label="Casual Leave" value="casual" />
              <Picker.Item label="Sick Leave" value="sick" />
              <Picker.Item label="Earned Leave" value="earned" />
            
            </Picker>
          </View>
          
          <View style={{ marginTop: 30, flexDirection: 'row' }}>

<Text style={styles.textstyle}>Leave From</Text>
<DatePicker
                         style={{ width: wp('53%'), paddingLeft: 30, marginRight:30 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Leave From"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 2
                            },
                            dateInput: {
                                marginLeft: 36,
                                //borderWidth: 0,

                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}

                    />
</View>


                    
          <View style={{ marginTop: 30, flexDirection: 'row' }}>

<Text style={styles.textstyle}>Leave To</Text>
<DatePicker
                         style={{ width: wp('60%'), paddingLeft: 55 }}
                        date={this.state.dateTo}
                        mode="date"
                        placeholder="Leave To(op)"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 2
                            },
                            dateInput: {
                                marginLeft: 36,
                                //borderWidth: 0,

                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(dateTo) => { this.setState({  dateTo: dateTo}) }}

                    />
</View>


              <View>
                <Text style={styles.textstyle, { marginTop: 30, color: 'white', fontSize: 20, marginLeft: 20 }}>Details</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={8}
                  style={styles.txtInput}
                  onChangeText={DeText => this.setState({DeText})}
                />
              </View>
              {/* <View>
              <TextInput style={styles.textInputstyle}
            label='CNIC'
            mode='outlined'
            placeholder='82103-9659052-1'
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={Eid => this.setState({ Eid })}
          />
              </View> */}

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate("Home")}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress= {this.PostData} >
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
             

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    );

  }
}

export default LeaveReq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  textstyle: {
    color: '#054C99',
    marginLeft: 20,
    fontSize: 22

  },
  txtInput: {
    backgroundColor: '#BBBBBB',
    marginLeft: 30,
    marginRight: 30,
    textAlignVertical: "top",
    paddingLeft: 20,
    borderRadius: 20,
    paddingRight: 20,
    paddingTop: 10,
    borderColor: '#E66E2F',
    borderWidth: 2,

  },
  buttonContainer: {

    margin: 20,


    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    color: 'white',
    marginTop: 5

  },
  buttons: {
    backgroundColor: '#E66E2F',
    width: '40%',
    height: 45,
    borderRadius: 45,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  textInputstyle: {
    marginTop: hp('2%'),
    marginLeft: wp('4%'),

    marginRight: wp('4%'),
  },

  buttonContainerRemain: {
    marginTop: ('10%'),
    alignItems: 'center'
},
UserSignIn: {
    borderRadius: 30,
    backgroundColor: '#E66E2F',
    borderColor: '#E66E2F',
    borderWidth: 1,
    width: wp('80%'),
    alignItems: 'center',
    height: hp('6%'),
    justifyContent: 'center'
},
buttonText2: {
    fontSize: 22,
    justifyContent: 'center',
    color: '#fff'
},

modal: {
  flex: 1,
 // alignItems: 'center',
  backgroundColor: '#fff',
  borderColor: 'green',
  padding: 0,
  //margin: 70,
  marginTop: ('45%'),
  marginLeft:('10%'),
  marginRight:('10%'),
  marginBottom:('40%'),
  borderWidth: 2,
  borderRadius: 20
},
text: {
  color: '#3f2949',
  marginTop: 10
},

Row1Style: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: ('12%'),
},

marginR1: {
marginLeft: ('10%'),
marginRight: ('10%')
},

LabelText: {
fontSize: 22,
color: 'black',
//fontWeight: "bold" 
},
Remaintext:{
fontSize: 12,
color: 'black',
textAlign: 'center'
},



})