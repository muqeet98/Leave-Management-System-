import React, { Component, State } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, KeyboardAvoidingView,
  TextInput, Keyboard, TouchableOpacity,TouchableHighlight,
  Modal,
  Image, TouchableWithoutFeedback, Picker, Alert
} from 'react-native';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Badge, Icon } from 'react-native-elements';
class LeaveReqDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      dateTo: '',
      modalVisible: false,

      leave_type: '',
      date_from: '' ,
      date_to: '',
      leave_id: '',
      leave_description: '',
      leave_status: '',
      emp_id: '',

      sick_leave: '',
      earned_leave: '',
      casual_leave: '',
      short_leave: '',

     

      
    }
  }



  // showData = async () => {
  //   let myArray = await AsyncStorage.getItem('myArray')
  //   dat = JSON.parse(myArray)
  //   this.setState("3")
  //   this.setState({ fname: dat.fname })
  //   this.setState({ lname: dat.lname })
  //   this.setState({ designation: dat.designation })
  //   console.warn(this.state.employeeid)
  // }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }


  getData = () => {

    const { date } = this.state;
    const { name } = this.props.route.params;
    const { leavetype } = this.props.route.params;
    const { desig } = this.props.route.params;
    const { dateF } = this.props.route.params;
    const { dateT } = this.props.route.params;
    const { des } = this.props.route.params;
    const { dp } = this.props.route.params;
    const { leave_id } = this.props.route.params;
    const { emp_id } = this.props.route.params;

    fetch('http://' + global.IP + '/BIIT_HR/api/leaves/AcceptLeave', {
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: {
        leave_id: leave_id,
        leave_type: leavetype,
        date_from: dateF,
        date_to: dateT,
        leave_description: des,
        emp_id: emp_id
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.ok) {
          console.log(data)
          this.props.navigation.navigate("AdmHome")
        } else {
          console.log("wrong ")
          Alert.alert("Email or password is not correct")
        }
      })
      .catch(error => console.log(error))

  }

  CallFun =() => {
    alert("Call Fun", this.state.leave_type)
    if(this.state.leave_type == "short"){
      this.PostShortData();
    }
    else{
      this.PostData();
    }
  }


  PostData = () => {

    alert("Haye I am leave type", this.state.leave_type);
   

    const { date_from } = this.props.route.params;
    const { date_to } = this.props.route.params;
    const { leave_description } = this.props.route.params;

    const { leave_id } = this.props.route.params;
    const { emp_id } = this.props.route.params;
   //  this.setState({leave_type: leave_type})
   // this.setState({ dialogVisible: false });

    fetch('http://' + global.IP + '/BIIT_HR/api/leaves/AcceptLeave', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(
        {

          'leave_id': leave_id,
          'leave_type': this.state.leave_type,
          'date_from': date_from,
          'date_to': date_to,
          'leave_description': leave_description,
          'emp_id': emp_id,
          'leave_status': 'Pending'

        })
    })

      .then((Response) => Response.json())
      .then((responseData) => {
        alert("Request Sent Successfully!" + responseData)
        console.log(responseData)
        this.props.navigation.navigate("AdmHome")
        //this.componentDidMount()
      })
      .catch(error => console.log(error))
    // console.log("haii")

  }
   
  getPrams = () => {
 const { leave_type } = this.props.route.params;

 const { date_from } = this.props.route.params;
 const { date_to } = this.props.route.params;
 const { leave_description } = this.props.route.params;

 const { leave_id } = this.props.route.params;
 const { emp_id } = this.props.route.params;

 this.setState({leave_type: leave_type})
 this.setState({date_from: date_from})
 this.setState({date_to: date_to})
 this.setState({leave_description: leave_description})
 this.setState({leave_id: leave_id})
 this.setState({emp_id: emp_id})

  }

  PostShortData = () => {

    alert("Haye I am Short leave type", this.state.leave_type);
    //const { leave_type } = this.props.route.params;

    const { date_from } = this.props.route.params;
    const { date_to } = this.props.route.params;
    const { leave_description } = this.props.route.params;

    const { leave_id } = this.props.route.params;
    const { emp_id } = this.props.route.params;

   // this.setState({ dialogVisible: false });
  //  this.setState({leave_type: leave_type})
    fetch('http://' + global.IP + '/BIIT_HR/api/leaves/AcceptShort', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(
        {

          'leave_id': leave_id,
          'leave_type': this.state.leave_type,
          'date_from': date_from,
          'date_to': date_to,
          'leave_description': leave_description,
          'emp_id': emp_id,
          'leave_status': 'Pending'

        })
    })

      .then((Response) => Response.json())
      .then((responseData) => {
        alert("Request Sent Successfully!" + responseData)
        console.log(responseData)
        this.props.navigation.navigate("AdmHome")
        //this.componentDidMount()
      })
      .catch(error => console.log(error))
    // console.log("haii")

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
componentDidMount(){
  this.RemainLeave();
  this.getPrams();
}
  render() {
    //  const{text}=this.props.route.params;
    const { date } = this.state;
    const { name } = this.props.route.params;
    const { leave_type } = this.props.route.params;
    const { desig } = this.props.route.params;
    const { dateF } = this.props.route.params;
    const { dateT } = this.props.route.params;
    const { leave_description } = this.props.route.params;
    const { dp } = this.props.route.params;
    const { leave_id } = this.props.route.params;
    const { emp_id } = this.props.route.params;
  // alert("hello00000", leave_type)
  // this.setState({leave_type : leave_type})
    Moment.locale('en');

    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View >
                  <Image source={{ uri: 'data:image/jpeg;base64,' + dp }} style={{
                    width: 150,
                    height: 150,
                    borderRadius: 60, marginLeft: ('5%'), marginTop: ('5%')
                  }} />
                </View>
                <View>
                  <View style={{ flexDirection: 'row', marginTop: ('20%'), fontSize: 20 }}>
                    {/* <Text style={styles.textstyle}>Name: </Text> */}
                    <Text style={{ fontSize: 21, marginLeft: ('5%'), fontWeight: 'bold' }}>{name}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, fontSize: 20 }}>

                    <Text style={{ fontSize: 20, marginLeft: ('15%') }}>{desig}</Text>
                  </View>

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

                    {/* <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: ('10%') }}>
                       
                        <View>
                            <TouchableOpacity style={styles.savebutton} onPress={()=> props.navigation.navigate("LeaveReqDetail")} >
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                  {/* <TouchableHighlight style={{borderColor: '#E66E2F', borderWidth: 2, borderRadius: 20   }} onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight> */}
               </View>
            </Modal>
            
            <TouchableHighlight style={{borderWidth:2 , borderColor: 'green', borderRadius: 10, width: 150, height: 25}} onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.Remaintext}>Remaining Leaves</Text>
            </TouchableHighlight>
                  </View>

                  
                </View>
              </View>


              {/* <View style={{ flexDirection: 'row', marginTop: ('10%'), fontSize: 20 }}>
<Text style={styles.textstyle}>Name: </Text>
<Text style={{ fontSize: 20, marginLeft: ('20%') }}>{name}</Text>
</View>

<View style={{ flexDirection: 'row', marginTop: 30, fontSize: 20 }}>
<Text style={styles.textstyle}>Designation</Text>
<Text style={{ fontSize: 20, marginLeft: ('20%') }}>{desig}</Text>
</View> */}

              <View style={{ flexDirection: 'row', marginTop: 30, fontSize: 20 }}>
                <Text style={styles.textstyle}>Leave Type:</Text>
                <Text style={{ fontSize: 20, marginLeft: ('20%') }}>{leave_type}</Text>

                <TouchableOpacity onPress={() => alert(this.state.leave_id)}>
                  <Text>Click Me</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 30, flexDirection: 'row' }}>

                <Text style={styles.textstyle}>Leave From</Text>
                <Text style={{ fontSize: 20, marginLeft: ('20%') }}>{Moment(dateF).format("Do  MMM  YYYY")}</Text>

              </View>



              <View style={{ marginTop: 30, flexDirection: 'row' }}>

                <Text style={styles.textstyle}>Leave To</Text>
                <Text style={{ fontSize: 20, marginLeft: ('20%') }}>     {Moment(dateT).format("Do  MMM  YYYY")}</Text>
              </View>


              <View>
                <Text style={styles.textstyle, { marginTop: ('5%'), marginBottom: ('2%'), color: '#054C99', fontSize: 20, marginLeft: 20 }}>Leave Description</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={8}
                  editable={false}
                  defaultValue={leave_description}
                  style={styles.txtInput}
                // onChangeText={DeText => this.setState({DeText})}
                />


              </View>


              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons1} onPress={() => this.props.navigation.navigate("LeaveReqAd")}>
                  <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={this.CallFun} >
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
              </View>


            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    );

  }
}

export default LeaveReqDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  textstyle: {
    color: '#054C99',
    marginLeft: 10,
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
    fontSize: 20

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
    backgroundColor: 'green',
    width: '40%',
    height: 45,
    borderRadius: 45,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  buttons1: {
    backgroundColor: '#054C99',
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
    width: wp('40%'),
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