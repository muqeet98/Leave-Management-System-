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
  Image, TouchableWithoutFeedback, Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      designation: '',

      //emp_id: 25
    }
  }

  GetInfo = () => {
    const { emp_id } = this.props.route.params;
    console.log("ID aa rahi hai------", emp_id);
    fetch('http://192.168.100.12/BIIT_HR/api/Employees/OneEmployee?emp_id=' + emp_id + '', {
      method: "get",
    }).then(res => res.json())
      .then(data => {
        console.log(data)

        console.log('Data hai' + data)
      })
  }
  componentDidMount() {
    // this.GetInfo()
  }

  render() {
    const { dp } = this.props.route.params;
    const { name } = this.props.route.params;
    const { email } = this.props.route.params;
    const { designation } = this.props.route.params;
    const { contact_no } = this.props.route.params;
    const { cnic } = this.props.route.params;
    const { emp_id } = this.props.route.params;
    const { password } = this.props.route.params;
    const { date } = this.props.route.params;

    return (
      <View style={styles.View2}>


        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: ('1%') }}>

          {/* <ImageBackground source={require('../icons/userpic.png')} style={{ width: 120, height: 120, alignItems: 'center', justifyContent: 'center', marginBottom: '10%', }}> */}
          {/* <TouchableOpacity onPress={this._pickImage}> */}
          <View style={{
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 150,
            backgroundColor: 'rgba(0,0,0,0.35)',
            borderRadius: 80,

          }}>

            <Image source={{ uri: 'data:image/jpeg;base64,' + dp }} style={{
              width: 150,
              height: 150,
              borderRadius: 60
            }} />

          </View>
          {/* </TouchableOpacity> */}
          {/* </ImageBackground> */}

        </View>



        <View>

          <View style={styles.bodytext}>

            <Text style={styles.textstyle}>Name:          </Text>
            <Text style={styles.textstyle}>{name}</Text>

          </View>

          <View style={styles.bodytext}>
            <Text style={styles.textstyle}>Email:           </Text>
            <Text style={styles.textstyle}>{email}</Text>

          </View>

          <View style={styles.bodytext}>
            <Text style={styles.textstyle}>contact no:  </Text>
            <Text style={styles.textstyle}>{contact_no}</Text>

          </View>

          <View style={styles.bodytext}>
            <Text style={styles.textstyle}>CNIC#          </Text>
            <Text style={styles.textstyle}>{cnic}</Text>

          </View>

          <View style={styles.bodytext}>
            <Text style={styles.textstyle}>Designation:</Text>
            <Text style={styles.textstyle}>{designation}</Text>

          </View>

          <View style={styles.bodytext}>
            <Text style={styles.textstyle}>password:</Text>
            <Text style={styles.textstyle}>   {password}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {/* //onPress={() => props.navigation.navigate("Home")} */}
            <TouchableOpacity style={styles.signinbutton} onPress={() => this.props.navigation.navigate("Home")} >
              {/* Loginbtn()} */}
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    );

  }
}

export default Profile;

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

    marginLeft: 7,
    // borderRadius: 45,
    margin: 20,


    flexDirection: 'row',
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
  bodytext: {
    flexDirection: 'row',
    marginTop: ('6%'),
    fontSize: 20
  },
  View2: {
    marginTop: ('3%')
  },
  signinbutton: {
    backgroundColor: '#E66E2F',
    borderColor: '#E66E2F',
    borderWidth: 1,
    width: '105%',
    height: 35,
    borderRadius: 45,
    marginTop: ('10%')
  },

})