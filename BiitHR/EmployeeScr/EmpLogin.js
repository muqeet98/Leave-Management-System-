import React, { Component, useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, KeyboardAvoidingView, Keyboard, TouchableOpacity,
  Image, TouchableWithoutFeedback, ToastAndroid, Alert, Form, AsyncStorage
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { TextInput, RadioButton } from 'react-native-paper';
import { State } from 'react-native-gesture-handler';

//import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
const STORAGE_KEY = '@save_age'
const Login = (props) => {
  //const [id, setId] =useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[emp_id, empId] =useState("");
  const[emp_name, empName]= useState("");
  const[emp_email, empEmail]= useState("");
  const[designation, empDesignation]= useState("");
  const[contact_no, contactNo]= useState("");
  const[emp_password, empPassword]= useState("");
  const[picture, Picture]= useState("");
  const[date, Date]= useState("");
  const[cnic, Cnic]= useState("");

  
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Data', JSON.stringify(emp_id));
      console.log('Data')
    } catch (error) {
      // Error saving data
    }
  };


  const retrieveData = async () => {
    try {
        const values = await AsyncStorage.getItem('Data');
        console.log(values)
        if (values !== null) {
          // We have data!!
          console.log("Hello " , values)
         // setEmail(values)

        }

      // const emp_id = await AsyncStorage.getItem('emp_id');
      // console.log(emp_id)
      // if (emp_id !== null) {
      //   return JSON.parse(emp_id)
      //   // We have data!!
      //   console.log(emp_id);
      //   setEmail(emp_id)
      // }
      
    } catch (error) {
      // Error retrieving data
    }
    return values;
  };




  const Loginbtn = () => {

    fetch('http://'+global.IP+'/BIIT_HR/api/employees/loginemployee?email=' + email + '&password=' + password + '', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        empId(data.emp_id)
        empName(data.name)
        empEmail(data.email)
        empDesignation(data.designation)
        contactNo(data.contact_no)
        empPassword(data.password)
        Picture(data.picture)
        Date(data.date)
        Cnic(data.cnic)
        
        if (!data.ok) {
          console.log("Kainat Anjum" + data)
          //await AsyncStorage.setItem('token', data.emp_id );       
           props.navigation.navigate("Home",
           {
             emp_id: emp_id,
             emp_name: emp_name,
             dp: picture,
              email: emp_email,
              contact_no: contact_no,
              cnic: cnic,
              designation: designation,
              password: emp_password,
              date: date,
            
            })
        } else {
          console.log("wrong ")
          Alert.alert("Email or password is not correct")
        }
      })
      .catch(error => Alert.alert("Wrong Email or Password"))
  }

  useEffect(() => {
    storeData()
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View>
                {/* <Text> My id is:    {emp_id}</Text> */}
            </View>

            <View>
        {/* <Button
          onPress={retrieveData}
          title="Get"
          color="#841584"

        /> */}
        </View>
            <View style={styles.logocontainer}>
              <Image style={styles.logo}
                source={require('../icons/process2.png')}>
              </Image>

            </View>
            <View style={styles.infocontainer}>
              <Text style={{ fontSize: 25, color: '#054C99', marginTop: 10 }}>Login </Text>
              {/* //054C99 */}

              <TextInput style={styles.textInputstyle}
                label='ID'
                mode='outlined'
                placeholder='ID or Email'
                placeholderTextColor='black'
                theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
                Value={email}
                onChangeText={(Value) => setEmail(Value)}
              />

              <TextInput style={styles.textInputstyle}
                label='Password'
                mode='outlined'
                placeholder='Password'
                secureTextEntry
                theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
                Value={password}
                onChangeText={(Value) => setPassword(Value)}
              />

              <View style={styles.buttonContainer}>
                {/* //onPress={() => props.navigation.navigate("Home")} */}
                <TouchableOpacity style={styles.signinbutton} onPress={() => Loginbtn()}  >
                  <Text style={styles.buttonText}> Sign In</Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(32,53,70)',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  logocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    marginTop: 70
  },
  logo: {
    width: 150,
    height: 150,

  },
  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9
  },
  infocontainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 350,
    backgroundColor: '#fff',
    padding: 20
  },
  Input: {
    height: 45,
    borderColor: '#E66E2F',
    borderWidth: 2,
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 30
  },
  buttonContainer: {
    // backgroundColor: '#f7c744',
    // paddingVertical: 15,
    // // paddingLeft:30,
    // marginTop: 20,
    marginLeft: 7,
    // borderRadius: 45,
    margin: 20,

    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between'


  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    justifyContent: 'center',
    color: '#fff',
    marginTop: 4

  },
  signinbutton: {
    backgroundColor: '#E66E2F',
    width: '105%',
    height: 45,
    borderRadius: 45,
  },
  signupbutton: {
    backgroundColor: '#1e90ff',
    width: '90%',
    height: 45,
    borderRadius: 45,


  },
  textInputstyle: {
    marginTop: hp('2%'),
    marginLeft: wp('1%'),

    marginRight: wp('1%'),
  },

})