import React, { Component,useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, style,

  Text,
  StatusBar, 
  KeyboardAvoidingView,
  TextInput, Keyboard, TouchableOpacity,Modal,
  Image, TouchableWithoutFeedback
} from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph,Appbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const AdminHome = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal =(visible) => {
    this.setState({ modalVisible: visible });
  }

  const logout = ({ navigation }) => {
    // AsyncStorage.removeItem("token").then(() => {
    //   props.navigation.replace("First")
    // })
    props.navigation.replace("First")
  }

  return (

    <View>
 <StatusBar barStyle = "light-content" showHideTransition="fade" color="#fff" hidden = {false} backgroundColor = "#D17C50" translucent = {true}/>
 
 <Appbar.Header style={{backgroundColor:'#E66E2F'}}>
{/* <Appbar.BackAction onPress={_goBack} />  */}
<Appbar.Content title="Employee Home" color="#fff"/>
<Appbar.Action icon="bell" color="#fff"  onPress={() => props.navigation.navigate("LeaveReqAd")} />
<Appbar.Action icon="dots-vertical" color="#fff" onPress={() => {
 setModalVisible(true);
}} />
</Appbar.Header>
<View>

  <Modal
animationType="fade"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
 Alert.alert("Modal has been closed.");
}}
>
<View style={styles.centeredView}>
 <View style={styles.modalView}>
   
 <TouchableOpacity
     style={{ ...styles.openButton, backgroundColor: "#fff" }}
       onPress={logout}
   >
     <Text style={styles.textStyle}>Logout</Text>
   </TouchableOpacity>
   <TouchableOpacity
     style={{ ...styles.openButton, backgroundColor: "#fff" }}
     onPress={() => {
       setModalVisible(!modalVisible);
     }}
   >
     <Text style={styles.textStyle}>Cancel</Text>
   </TouchableOpacity>
 </View>
</View>
</Modal>
      <View style={styles.View1}>
        <Text style={{fontSize: 16, marginLeft: 10}}>Welcome to BIIT HR Application. Here you can manage the leaves of the employee.</Text>
      </View>

      <View style={{ marginTop: hp('15%') }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("Leaveview")} style={styles.cardcover}>
              <Card.Cover source={require('../icons/leaveManagement.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Leave Management</Text>
            </Card>
          </View>
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("LeaveReqAd")} style={styles.cardcover}>
              <Card.Cover source={require('../icons/ViewLeaveReq.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>View Leave Request</Text>
            </Card>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('10%') }}>
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("AllEmployee")} style={styles.cardcover}>
              <Card.Cover source={require('../icons/EmpManagement.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Employee Management</Text>
            </Card>

          </View>
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("TakeAttendance")} style={styles.cardcover}>
              <Card.Cover source={require('../icons/attendance.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Attendence Status</Text>
            </Card>
          </View>
        </View>
      </View>
    </View>
    </View>
  );

}

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

  View1: {
    marginTop: hp('3%'),

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
    width: wp('29%'),
    borderRadius: 10

  },
  cardText: {
    fontSize: 15, color: '#054C99',
    textAlign: 'center',
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row',
    marginRight: wp('5%')
  },
  badgeStyle: {
    position: 'relative',
    top: 3,
    right: 10
  },

  
  modalView: {
    marginTop: ('12%'),
    marginLeft: ('60%'),
    marginBottom: ('10%'),
    backgroundColor: "white",
    marginRight: 20,
    borderRadius: 0,
    paddingLeft: 0 ,
   // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  openButton: {
    marginTop: ('0%'),
    marginLeft: ('0%'),
    backgroundColor: "#F194FF",
    borderRadius: 0,
    padding: 6,
    elevation: 5
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center"
  }
})