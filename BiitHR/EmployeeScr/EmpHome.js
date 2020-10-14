// import React, { Component, useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View, style,
//   Button,
//   Text,
//   StatusBar,
//   KeyboardAvoidingView,
//   TextInput, Keyboard, TouchableOpacity,
//   Image, TouchableWithoutFeedback, AsyncStorage, Modal, TouchableHighlight
// } from 'react-native';
// import { Badge, Icon } from 'react-native-elements';
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// console.disableYellowBox = true;
// const EmpHome = (props) => {
//   //const [emp_id, setEmail] = useState("")
//  // const{text}=this.props.route.params;
//  const [modalVisible, setModalVisible] = useState(false);

//  const { emp_id } = props.route.params;
// const { dp } = props.route.params;
// const { emp_name } = props.route.params;
// const { email } = props.route.params;
// const { designation } = props.route.params;
// const { contact_no } = props.route.params;
// const { cnic } = props.route.params;
// const { date } = props.route.params;
// const { password} = props.route.params;


// const toggleModal =(visible) => {
//   this.setState({ modalVisible: visible });
// }

//   const logout = ({ navigation }) => {
//     AsyncStorage.removeItem("token").then(() => {
//       props.navigation.replace("First")
//     })
//   }

//    const retrieveData = async () => {
//     try {
//         const values = await AsyncStorage.getItem('emp_id');
//         if (values !== null) {
//           // We have data!!
//           console.log("Hello " , values)
//           setEmail(values)

//         }

//       // const emp_id = await AsyncStorage.getItem('emp_id');
//       // console.log(emp_id)
//       // if (emp_id !== null) {
//       //   return JSON.parse(emp_id)
//       //   // We have data!!
//       //   console.log(emp_id);
//       //   setEmail(emp_id)
//       // }
      
//     } catch (error) {
//       // Error retrieving data
//     }
//   };



//   const _getProtectedQuote= async () => {
//     var DEMO_TOKEN = await AsyncStorage.getItem('token');
//   return  fetch("http://192.168.137.1/BIIT_HR/api/employees/loginemployee/", {
//       method: "GET",
//       headers: {
//         Authorization: 'Bearer ' + DEMO_TOKEN
//       }
//     })
//     .then((response) => response.json())
//     .then((quote) => {
//          console.log(quote.email)
//     })
//     .done();
//   }
  
//   const FetchToken = () => {

//   }


//   useEffect(() => {
//     FetchToken()
//   }, [])

//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.row}>
//         <Icon type="ionicon" name="ios-notifications" size={40} color='#054C99' onPress={() => props.navigation.navigate("Leave")} />
//         <Badge
//           value="7"
//           status="error"
//           containerStyle={styles.badgeStyle}
//         />
//       </View> */}
//       <View>
        
//            <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
            
//           <TouchableOpacity
//               style={{ ...styles.openButton, backgroundColor: "#fff" }}
//                 onPress={logout}
//             >
//               <Text style={styles.textStyle}>Logout</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ ...styles.openButton, backgroundColor: "#fff" }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//      <View style={{flexDirection: 'row', marginLeft: ('83%')}}>     
//          <Icon style={{marginRight:10}} type="ionicon" name="ios-notifications" size={40} color='#E66E2F'  
//  onPress={() => props.navigation.navigate("Notification",{emp_id: emp_id})} />
//          <Icon  type="material" name="more-vert" size={40} color='#E66E2F'  onPress={() => {
//           setModalVisible(true);
//         }}/>

//         </View>

//         <View style={{flexDirection:'row', marginTop: hp('15%'), marginLeft: ('25%')}}>
//           <Text>Welcome! </Text>
//           <Text style={{fontSize: 22, fontWeight: 'bold' }}>{emp_name}</Text>
//         </View>

//       </View>
//       <View style={{ marginTop: hp('15%') }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={styles.cardcover} >

//             <Card onPress={() => props.navigation.navigate("Profile", {emp_id: emp_id,
//             dp: dp,
//             name: emp_name,
//             email:email,
//             designation:designation,
//             contact_no:contact_no,
//             cnic:cnic,
//             date:date,
//             password:password
//             })} style={styles.cardcover}>
//               <Card.Cover source={require('../icons/profile.png')} style={styles.cardimage} />
//               <Text style={styles.cardText}>Profile</Text>
//             </Card>
//           </View>
//           <View style={styles.cardcover} >
//             <Card onPress={() => props.navigation.navigate("Leave", {emp_id: emp_id})} style={styles.cardcover}>
//               <Card.Cover source={require('../icons/Leave1.png')} style={styles.cardimage} />
//               <Text style={styles.cardText}>Leave Request</Text>
//             </Card>
//           </View>
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('10%') }}>
//           {/* <View style={styles.cardcover} >
// <Card onPress={() => props.navigation.navigate("AllEmployee")} style={styles.cardcover}>
// <Card.Cover source={require('../icons/EmpManagement.png')} style={styles.cardimage} />
// <Text style={styles.cardText}>Employee Management</Text>
// </Card>

// </View> */}
//           <View style={styles.cardcover} >
//             <Card onPress={() => props.navigation.navigate("AttndStatus", {emp_id: emp_id})} style={styles.cardcover}>
//               <Card.Cover source={require('../icons/attendance.png')} style={styles.cardimage} />
//               <Text style={styles.cardText}>Status</Text>
//             </Card>

//           </View>
//         </View>
//       </View>
//     </View>
//   );

// }

// export default EmpHome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     flexDirection: 'column',
//   },
//   text: {
//     fontSize: 18
//   },
//   row: {
//     flexDirection: 'row',
//     marginRight: 20
//   },
//   badgeStyle: {
//     position: 'relative',
//     top: 3,
//     right: 10
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 22,
//     justifyContent: 'center'

//   },
//   signinbutton: {
//     backgroundColor: '#1e90ff',
//     width: '80%',
//     height: 45,
//     borderRadius: 45,
//     marginLeft: 40,
//     marginTop: 50
//   },
//   // CardS: {
//   //   marginTop: 15,
//   //   marginLeft: 110,
//   //   marginRight: 110,
//   //   // height:200,
//   //   // width:,
//   //   backgroundColor: 'rgb(32,53,70)',
//   //   justifyContent: 'center',

//   // },
//   // cardimag:{
//   //   width: 100,
//   //    height: 100,
//   //     marginLeft: 40, 
//   //     marginRight:40,
//   //     marginTop: 10 ,
//   //     borderRadius: 10, 


//   // },

//   cardText: {
//     textAlign: 'center', fontSize: 20, color: 'black',
//   },
//   Touchable: {
//     width: 400,
//     marginRight: 200
//   },

//   cardcover: {
//     height: hp('13%'),
//     width: wp('25%'),
//     marginLeft: wp('8%'),
//     marginRight: wp('17%'),
//     marginTop: ('3%'),
//     backgroundColor: '#fff'


//   },

//   cardimage: {
//     height: hp('13%'),
//     width: wp('25%'),
//     borderRadius: 10

//   },

//   modalView: {
//     marginTop: ('26%'),
//     marginLeft: ('60%'),
//     marginBottom: ('10%'),
//     backgroundColor: "white",
//     marginRight: 10,
//     borderRadius: 0,
//     paddingLeft: 0 ,
//    // alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 2
//   },
//   openButton: {
//     marginTop: ('0%'),
//     marginLeft: ('0%'),
//     backgroundColor: "#F194FF",
//     borderRadius: 0,
//     padding: 6,
//     elevation: 5
//   },
//   textStyle: {
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 0,
//     textAlign: "center"
//   }

// });





import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, style,
  Button,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TextInput, Keyboard, TouchableOpacity,
  Image, TouchableWithoutFeedback, AsyncStorage, Modal, TouchableHighlight
} from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import { Avatar, Card, Title, Paragraph , Appbar} from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.disableYellowBox = true;
const EmpHome = (props) => {
  //const [emp_id, setEmail] = useState("")
 // const{text}=this.props.route.params;
 const [modalVisible, setModalVisible] = useState(false);

 const { emp_id } = props.route.params;
const { dp } = props.route.params;
const { emp_name } = props.route.params;
const { email } = props.route.params;
const { designation } = props.route.params;
const { contact_no } = props.route.params;
const { cnic } = props.route.params;
const { date } = props.route.params;
const { password} = props.route.params;


const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

const toggleModal =(visible) => {
  this.setState({ modalVisible: visible });
}

  const logout = ({ navigation }) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.replace("First")
    })
  }

   const retrieveData = async () => {
    try {
        const values = await AsyncStorage.getItem('emp_id');
        if (values !== null) {
          // We have data!!
          console.log("Hello " , values)
          setEmail(values)

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
  };



  const _getProtectedQuote= async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem('token');
  return  fetch("http://192.168.137.1/BIIT_HR/api/employees/loginemployee/", {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + DEMO_TOKEN
      }
    })
    .then((response) => response.json())
    .then((quote) => {
         console.log(quote.email)
    })
    .done();
  }
  
  const FetchToken = () => {

  }


  useEffect(() => {
    FetchToken()
  }, [])

  return (
    // <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>,
 
    //   <Appbar.Header>
  //   <Appbar.BackAction onPress={_goBack} />
  //   <Appbar.Content title="Title" subtitle="Subtitle" />
  //   <Appbar.Action icon="magnify" onPress={_handleSearch} />
  //   <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
  // </Appbar.Header>
    <View style={styles.container}>
      {/* <View style={styles.row}>
        <Icon type="ionicon" name="ios-notifications" size={40} color='#054C99' onPress={() => props.navigation.navigate("Leave")} />
        <Badge
          value="7"
          status="error"
          containerStyle={styles.badgeStyle}
        />
      </View> */}
       <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#D17C50" translucent = {true}/>
 
          <Appbar.Header style={{backgroundColor:'#E66E2F'}}>
    {/* <Appbar.BackAction onPress={_goBack} />  */}
    <Appbar.Content title="Employee Home" color="#fff"/>
    <Appbar.Action icon="bell" color="#fff" onPress={() => props.navigation.navigate("Notification",{emp_id: emp_id})} />
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

     {/* <View style={{flexDirection: 'row', marginLeft: ('83%')}}>     
         <Icon style={{marginRight:10}} type="ionicon" name="ios-notifications" size={40} color='#E66E2F'  
 onPress={() => props.navigation.navigate("Notification",{emp_id: emp_id})} />
         <Icon  type="material" name="more-vert" size={40} color='#E66E2F'  onPress={() => {
          setModalVisible(true);
        }}
        />

        </View> */}

        <View style={{flexDirection:'row', marginTop: hp('15%'), marginLeft: ('25%')}}>
          <Text>Welcome! </Text>
          <Text style={{fontSize: 22, fontWeight: 'bold' }}>{emp_name}</Text>
        </View>

      </View>
      <View style={{ marginTop: hp('15%') }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.cardcover} >

            <Card onPress={() => props.navigation.navigate("Profile", {emp_id: emp_id,
            dp: dp,
            name: emp_name,
            email:email,
            designation:designation,
            contact_no:contact_no,
            cnic:cnic,
            date:date,
            password:password
            })} style={styles.cardcover}>
              <Card.Cover source={require('../icons/profile.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Profile</Text>
            </Card>
          </View>
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("Leave", {emp_id: emp_id})} style={styles.cardcover}>
              <Card.Cover source={require('../icons/Leave1.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Leave Request</Text>
            </Card>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('10%') }}>
          {/* <View style={styles.cardcover} >
<Card onPress={() => props.navigation.navigate("AllEmployee")} style={styles.cardcover}>
<Card.Cover source={require('../icons/EmpManagement.png')} style={styles.cardimage} />
<Text style={styles.cardText}>Employee Management</Text>
</Card>

</View> */}
          <View style={styles.cardcover} >
            <Card onPress={() => props.navigation.navigate("AttndStatus", {emp_id: emp_id})} style={styles.cardcover}>
              <Card.Cover source={require('../icons/attendance.png')} style={styles.cardimage} />
              <Text style={styles.cardText}>Status</Text>
            </Card>

          </View>
        </View>
      </View>
    </View>
  );

}

export default EmpHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    flexDirection: 'column',
  },
  text: {
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    marginRight: 20
  },
  badgeStyle: {
    position: 'relative',
    top: 3,
    right: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    justifyContent: 'center'

  },
  signinbutton: {
    backgroundColor: '#1e90ff',
    width: '80%',
    height: 45,
    borderRadius: 45,
    marginLeft: 40,
    marginTop: 50
  },
  // CardS: {
  //   marginTop: 15,
  //   marginLeft: 110,
  //   marginRight: 110,
  //   // height:200,
  //   // width:,
  //   backgroundColor: 'rgb(32,53,70)',
  //   justifyContent: 'center',

  // },
  // cardimag:{
  //   width: 100,
  //    height: 100,
  //     marginLeft: 40, 
  //     marginRight:40,
  //     marginTop: 10 ,
  //     borderRadius: 10, 


  // },

  cardText: {
    textAlign: 'center', fontSize: 20, color: 'black',
  },
  Touchable: {
    width: 400,
    marginRight: 200
  },

  cardcover: {
    height: hp('13%'),
    width: wp('25%'),
    marginLeft: wp('8%'),
    marginRight: wp('17%'),
    marginTop: ('3%'),
    backgroundColor: '#fff'


  },

  cardimage: {
    height: hp('13%'),
    width: wp('25%'),
    borderRadius: 10

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

});