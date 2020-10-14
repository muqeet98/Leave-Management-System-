import React from 'react';

import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
class TakeAttendance extends React.Component {
  state = {
    data: [],
    ids:[],
    status: '',
    date: '',
    checked:[],
  }
  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };

  toggleChecked = (itemId) => {
    const ids = [...this.state.ids, itemId];

    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
    console.log(this.state.ids);
  };
  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    let {checked} = this.state;
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: 'data:image/jpeg;base64,' + item.picture }} style={{ width: 60, height: 60, borderRadius: 30 }} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.designation}</Text>
        </View>
        {/* <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", backgroundColor: '#40BF80' }}
          onPress={() => this.state.status('P')

          }
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>P</Text>
        </TouchableOpacity> */}
        <CheckBox
            center
            iconType="material"
           // checkedIcon="clear"
           uncheckedIcon= {<Image style={{width: 45, height: 45}} source={require('../assets/unchecked.png')} />}
           checkedIcon= {<Image style={{width: 60, height: 50}} source={require('../assets/checked.png')} />}
            //checkedIcon="add"
           // checkedColor="red"
            uncheckedColor="blue"
            size={30}
            checked={this.isChecked(item.emp_id)}
            onPress={() => this.toggleChecked(item.emp_id)}
            />
      </View>
    );
  }

Submit = () => {
alert(this.state.ids)
  fetch('http://'+IP.global+'/BIIT_HR/api/attendances/postattendence', {
    method: 'POST',
    headers: {
       Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    
      body: JSON.stringify({
        date: this.state.date,
        csv: this.state.ids.toString(),
      })

    
  })
    .then(Response => Response.json())
    .then(responseData => {
      alert("Request Sent Successfully!", responseData)
      console.log(responseData)
        this.props.navigation.navigate("AdmHome")

    })
    .catch(error => console.log(error))
 
  
// console.log("han click hua hai", this.state.date)
//   fetch('http://' + global.IP + '/BIIT_HR/api/attendances/postattendence', {
//     method: "post",
//     mode:'no-cors',
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       date: '16-08-2020',
//       csv: this.state.ids.toString(),
//     }),
   
//   })
//   .then(res => res.json())
//     .then(data => {
        
//       })
      
    
}

  webCall = () => {
    fetch('http://' + global.IP + '/BIIT_HR/api/employees/allemployee', {
      method: "get",
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: true,
          data: data

        })
        console.log('Data hai' + data)
      })
  }

  componentDidMount() {
    this.webCall();
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date:
       year+ '-' + month + '-' + date,
    });
  }

  handleChange = (index) => {
    let checked = [...this.state.checked];
    checked[index] = !checked[index];
    this.setState({ checked });
  }
  render() {
    // let {checked} = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>


{/* <DatePicker
                         style={{ width: wp('53%'), paddingLeft: 30, alignItems: 'center', borderRadius: 45, marginLeft: ('15%'), marginBottom: ('2%')}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        minDate="01-01-2016"
                        maxDate="01-01-2022"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 50
                            },
                            dateInput: {
                                marginLeft: 36,
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}

                    /> */}

<DatePicker
                         style={{ width: wp('70%'), paddingLeft: 30, marginRight:10 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Date"
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
                                marginLeft: 80
                            },
                            dateInput: {
                                marginLeft: 70,
                                //borderWidth: 0,

                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}

                    />
</View>
        <FlatList
          style={{ flex: 1 }}
          extraData={this.state}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.emp_id}
        />
      
        <View>
        <TouchableOpacity style={styles.signinbutton} onPress={this.Submit} >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default TakeAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 20
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  TouchableOpacityStyle: {

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 35
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    justifyContent: 'center',
    color: '#fff',
    marginTop: 5

  },
  signinbutton: {
    backgroundColor: '#E66E2F',
    borderColor: '#E66E2F',
    borderWidth: 1,
    //width: '50%',
    height: 45,
    borderRadius: 45,
    alignItems: "center",
    marginLeft: ('20%'),
    marginRight: ('20%'),
    marginBottom: ('3%')
    
  },
});