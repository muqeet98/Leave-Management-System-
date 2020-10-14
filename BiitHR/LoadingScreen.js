import React,{useEffect} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  View,
  StyleSheet, AsyncStorage
} from 'react-native';

const LoadingScreen = (props) => {

    const detactlogin = async() => {
        const token = await AsyncStorage.getItem('token')
        if(token){
          props.navigation.replace("Home")
        }
        else{
            props.navigation.replace("First")
        }
    }
    useEffect(() => {
        detactlogin()
      },[])

  return (
   <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue" />
   </View>
  );
};

const styles= StyleSheet.create({
    loading:{
     flex:1,
    justifyContent:"center",
    alignItems:"center" 
    }
    
  })


export default LoadingScreen;