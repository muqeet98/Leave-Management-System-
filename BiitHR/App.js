import React, { useEffect, useState } from 'react';
import Notification from './EmployeeScr/Notification';
import { StyleSheet, Text, View, AsyncStorage,Button, Alert } from 'react-native';
import Login from './EmployeeScr/EmpLogin';
import LeaveReq from './EmployeeScr/LeaveReq';
import EmpHome from './EmployeeScr/EmpHome';
import RemainingLeave from './EmployeeScr/RemainingLeave';
import EmpAttandanceE from './EmployeeScr/AttandanceStatusEmp';
import Profile from './EmployeeScr/Profile'
import FirstScreen from './FirstScreen';
import LoadingScreen from './LoadingScreen';
import AdmLogin from './AdminScr/AdminLogin';
import LeaveView from './AdminScr/LeaveView';
import AdminHome from './AdminScr/AdminHome';
import LeaveManage from './AdminScr/LeaveManagement';
import NotificationAd from './AdminScr/NotificationAd';
import AttendanceStatusA from './AdminScr/AttendanceStatusAd';
import LeaveReqAd from './AdminScr/LeaveRequestsAd';
import AllEmployee from './AdminScr/AllEmployee';
import AddEmployee from './AdminScr/AddEmployee';
import EmployeeDetail from './AdminScr/EmployeeDetails';
import UpdateEmployee from './AdminScr/updateEmployee';
import LeaveReqDetail from './AdminScr/LeaveReqDetail';
import TakeAttendance from './AdminScr/TakeAttendance';
import EmpRemainL from './AdminScr/EmpRemainL';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Badge, Icon } from 'react-native-elements';

global.IP='169.254.119.21';
const Stack = createStackNavigator();
const App = ({navigation}) => {
  const [isloggeding, setLogged] = useState(null)
  const detactlogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)
    }
    else {
      setLogged(false)
    }
  }
  

  useEffect(() => {
    detactlogin()
  }, [])


  return (
    <View style={styles.container}  >
      <Stack.Navigator style={{ backgroundColor: '#e91e63' }}>

        
        <Stack.Screen name="Loading" component={LoadingScreen} />

        <Stack.Screen name="Home" component={EmpHome} 

        options={({ navigation }) => ({
          headerShown: false,
          title: 'Employee Home',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          // headerRight: () => (
          // <Icon style={{marginRight:10}} type="ionicon" name="ios-notifications" size={40} color='#fff' onPress={() => navigation.navigate("Notification")} />
          // ),
          })}

        />

        <Stack.Screen name="Login" component={Login} options={{
          title: 'Employee Login',
          headerStyle: {
            backgroundColor: '#E66E2F',
            // backgroundColor: '#e91e63',
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        
        <Stack.Screen name="First" component={FirstScreen} options={{
          title: '    BIIT Leave Management System',

          headerStyle: {
            backgroundColor: '#E66E2F',
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        {/* 
<Stack.Screen name="Login" component={Login} options={{
title: 'Employee Login',
headerStyle: {
backgroundColor: '#E66E2F',
// backgroundColor: '#e91e63',
},

headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
},
}} />  */}


        <Stack.Screen name="AdmLogin" component={AdmLogin}
         options={{
          title: 'Admin Login',
          headerStyle: {
            backgroundColor: '#E66E2F',
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        />
        {/* 
<Stack.Screen name="Home" component={EmpHome} options={
{
title: 'Employee Home',
headerRight: () => {

<Icon type="ionicon" name="ios-notifications" size={40} color='white' onPress={() => props.navigation.navigate("Leave")} />
},
headerStyle: {
//backgroundColor: '#1e90ff',
backgroundColor: '#E66E2F'
},
headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
},
}}
/> */}

        <Stack.Screen name="AdmHome" component={AdminHome}
           options={({ navigation }) => ({
             headerShown: false,
            title: 'Admin Home',
            headerStyle: {
              backgroundColor: '#E66E2F'
            },
            // headerLeft: () => (
            //  
            //               ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerRight: () => (
              <Icon  type="material" name="more-vert" size={40} color='#fff' onPress={() => navigation.navigate("LeaveReqAd")} />,
              <Icon  type="ionicon" name="ios-notifications" size={40} color='#fff' onPress={() => navigation.navigate("Notification")} />
            // <Icon style={{marginRight:50}} type="ionicon" name="ios-notifications" size={40} color='#fff' onPress={() => navigation.navigate("LeaveReqAd")} />
            // <Icon style={{marginRight:30}} type="ionicon1" name="ellipsis-vertical-outline" size={40} color='#fff' onPress={() => navigation.navigate("LeaveReqAd")} />
            )
           
           })}
        />

        <Stack.Screen name="Leave" component={LeaveReq} options={{
          title: 'Leave Application',
          headerStyle: {
            // backgroundColor: '#1e90ff',
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '',
          },
        }} />

        <Stack.Screen name="AttndStatus" component={EmpAttandanceE} options={{
          title: 'Attendence Status',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

<Stack.Screen name="Profile" component={Profile} options={{
          title: 'Profile Screen',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

<Stack.Screen name="Notification" component={Notification} options={{
          title: 'Notifications',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
<Stack.Screen name="RemainingLeave" component={RemainingLeave} options={{
          title: 'Remaining Leaves',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />


        {/*+++++++++++++++++++++++++++++ adminstaks**************************************************** */}

        <Stack.Screen name="LeaveMan" component={LeaveManage} options={{
          title: 'Leave Management',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        
<Stack.Screen name="Leaveview" component={LeaveView} options={{
          title: 'Leave Management',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="AttndStatusAdmin" component={AttendanceStatusA} options={{
          title: 'Attendence Status',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="LeaveReqAd" component={LeaveReqAd} options={{
          title: 'Leave Requests',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="AllEmployee" component={AllEmployee} options={{
          title: 'All Employee',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} options={{
          title: 'Add Employee',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
<Stack.Screen name="NotificationAd" component={NotificationAd} options={{
          title: 'Notification',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />



<Stack.Screen name="EmployeeDetail" component={EmployeeDetail} options={{
          title: 'Employee Details',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

<Stack.Screen name="UpdateEmployee" component={UpdateEmployee} options={{
          title: 'Update Employee',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />



<Stack.Screen name="LeaveReqDetail" component={LeaveReqDetail} options={{
          title: 'Leave Details',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

<Stack.Screen name="TakeAttendance" component={TakeAttendance} options={{
          title: 'Take Attendance',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />


<Stack.Screen name="EmpRemainL" component={EmpRemainL} options={{
          title: 'Remaining Leaves',
          headerStyle: {
            backgroundColor: '#E66E2F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

      </Stack.Navigator>

    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e91e63',

  },
});
