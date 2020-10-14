import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, KeyboardAvoidingView, Keyboard, TouchableOpacity,
  Image, TouchableWithoutFeedback, Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AdmLogin=(props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Loginbtn = () => {
    fetch('http://192.168.137.1/BIIT_HR/api/admin/loginadmin?admin_name=' + email + '&ad_password=' + password + '', {
      method: '',
    })

      .then(res => res.json())
      .then(data => {
        if (!data.ok) {
          console.log(data)
          props.navigation.navigate("AdmHome")
        } else {
          console.log("wrong ")
          Alert.alert("Email or password is not correct")
        }
      })
      .catch(error => Alert.alert("Email or password is not correct"))
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
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
              <TouchableOpacity style={styles.signinbutton} onPress={() => props.navigation.navigate("AdmHome")} >
                {/* Loginbtn()} */}
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

export default AdmLogin;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(32,53,70)',
    backgroundColor: 'white',
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
    // backgroundColor: 'rgb(32,53,70)',
    backgroundColor: 'white',
    padding: 20
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
    marginTop: 5

  },
  signinbutton: {
    backgroundColor: '#E66E2F',
    borderColor: '#E66E2F',
    borderWidth: 1,
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

  cardcover: {
    height: hp('16%'),
    width: wp('26%'),
    marginLeft: wp('5%'),
    marginRight: wp('15%'),
    marginTop: ('5%')


  },
  cardimage: {
    height: hp('16%'),
    width: wp('27%'),
    borderRadius: 10

  },
  cardText: {
    fontSize: 15, color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textInputstyle: {
    marginTop: hp('2%'),
    marginLeft: wp('1%'),

    marginRight: wp('1%'),
  },
  

})