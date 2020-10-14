// import React, { Component, useState, useEffect } from 'react';
// import {
//     View, Text, StyleSheet, KeyboardAvoidingView,
//     StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity,Alert
// } from 'react-native';
// import { Input } from 'react-native-elements';
// import { TextInput } from 'react-native-paper';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ScrollView } from 'react-native-gesture-handler';

// const EmpRemainL = (props) => {
//   const[total_leaves,totalleaves]= useState("")
//   const[sick_leave, setSickleave] = useState("")
//   const[earned_leave, setEarnedleave] = useState("")
//   const[casual_leave, setCasual] = useState("")
//   const[short_leave, setShort] = useState("")
//   const[id] = useState("19")
  

//   const PostData = () => {
//     const { emp_id } = props.route.params;
//     fetch('http://'+global.IP+'/BIIT_HR/api/EmployeeLeave/OneEmpLeave?emp_id='+ emp_id+ '', {
//       })
  
//         .then(res => res.json())
//         .then(data => {
//           console.log(data)
//             totalleaves(data[0].total_leaves)
//             setSickleave(data[0].sick_leave)
//             setEarnedleave(data[0].earned_leave)
//             setCasual(data[0].casual_leave)
//             setShort(data[0].short_leave)

//             console.log(data[0].sick_leave)
//           console.log(data[0].total_leave)
          
    
//         })
//         .catch(error => error)

//   }


//   useEffect(() => {
//     PostData();
//   }, [])


//     return (
    
//         <KeyboardAvoidingView behavior="height" style={styles.container}>
//             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
//                 <ScrollView style={styles.container}>
//                     <View style={styles.Row1Style}>
//                         {/* <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Remaining Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 placeholder=''

//                             // label='Email'
//                                value={total_leave}
//                               onChangeText={text => setTotalleaves( text )}
//                             />

//                         <Text style={styles.textStyle}>17 </Text>
//                         </View> */}
                    
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Sick Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             {/* <TextInput style={styles.EditText1}
//                             // label='Email'
//                         value={sick_leave}
//                               onChangeText={text => setSickleave( text )}
//                             /> */}

//                         <Text style={styles.textStyle}>{sick_leave}</Text>
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Earned Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                         <Text style={styles.textStyle}> {earned_leave}</Text>
//                             {/* <TextInput style={styles.EditText1}
//                                 placeholder=''
//                             // label='Email'
//                             value={earned_leave}
//                               onChangeText={text => setEarnedleave( text )}
//                             /> */}
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Casual Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >
//                         <Text style={styles.textStyle}> {casual_leave}</Text>

//                             {/* <TextInput style={styles.EditText1}
//                             // label='Email'
//                             value={casual_leave}
//                               onChangeText={text => setCasual( text )}
//                             /> */}
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Short Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >
//                         <Text style={styles.textStyle}>{short_leave}</Text>
//                             {/* <TextInput style={styles.EditText1} 
//                             // label='Email'
//                             value={short_leave}
//                             onChangeText={text => setShort( text )}
//                             /> */}
//                         </View>
//                     </View>

//                     <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: ('10%') }}>
//                         {/* <View>
//                             <TouchableOpacity style={styles.cancelbutton} onPress={() => props.navigation.navigate("AdmHome")}>
//                                 <Text style={styles.buttonText}>Cancel</Text>
//                             </TouchableOpacity>
//                         </View> */}
//                         <View>
//                             <TouchableOpacity style={styles.savebutton} onPress={()=> props.navigation.navigate("LeaveReqDetail")} >
//                                 <Text style={styles.buttonText}>Back</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </ScrollView>

//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
    
//     );

// }

// export default EmpRemainL;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         marginTop: hp('2%')


//     },

//     Row1Style: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: ('12%'),
//     },
//     LabelText: {
//         fontSize: 22,
//         color: 'black',
// //fontWeight: "bold" 
//     },

//     EditText1: {
//         width: wp('20%'),
//         height: hp('5%'),
//         borderColor: '#E66E2F',
//         borderRadius: 5,
//          borderWidth: 1

//     },
//     marginR1: {
//         marginLeft: ('10%'),
//         marginRight: ('10%')
//     },
//     buttonText: {
//         textAlign: 'center',
//         fontSize: 22,
//         justifyContent: 'center',
//         color: '#fff',
//         marginTop: 5

//     },
//     savebutton: {
//         backgroundColor: '#E66E2F',
//         height: 45,
//         borderRadius: 45,
//         marginTop: ('4%'),
//         width: wp('50%'),
//         marginLeft: ('25%')
//     },
//     cancelbutton: {
//         backgroundColor: '#E66E2F',
//         height: 45,
//         borderRadius: 45,
//         marginTop: ('4%'),
//         width: wp('30%')
//     },

//     textStyle:{
//         fontSize:20,
//         marginRight:30,
//        alignItems: 'center'
//     }

// });



import React, { Component, useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, KeyboardAvoidingView,
    StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity,Alert
} from 'react-native';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';


const EmpRemainL = (props) => {
  const[total_leaves,totalleaves]= useState("")
  const[sick_leave, setSickleave] = useState("")
  const[earned_leave, setEarnedleave] = useState("")
  const[casual_leave, setCasual] = useState("")
  const[short_leave, setShort] = useState("")
  const[id] = useState("19")
  




  useEffect(() => {
   // PostData();
  }, [])


    return (
        <MenuContext style={styles.container1}>
        <View>
          <Menu>
            <MenuTrigger text="Open menu" />

            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
     
    );

}

export default EmpRemainL;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: hp('2%')


    },

    Row1Style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: ('12%'),
    },
    LabelText: {
        fontSize: 22,
        color: 'black',
//fontWeight: "bold" 
    },

    EditText1: {
        width: wp('20%'),
        height: hp('5%'),
        borderColor: '#E66E2F',
        borderRadius: 5,
         borderWidth: 1

    },
    marginR1: {
        marginLeft: ('10%'),
        marginRight: ('10%')
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        justifyContent: 'center',
        color: '#fff',
        marginTop: 5

    },
    savebutton: {
        backgroundColor: '#E66E2F',
        height: 45,
        borderRadius: 45,
        marginTop: ('4%'),
        width: wp('50%'),
        marginLeft: ('25%')
    },
    cancelbutton: {
        backgroundColor: '#E66E2F',
        height: 45,
        borderRadius: 45,
        marginTop: ('4%'),
        width: wp('30%')
    },

    textStyle:{
        fontSize:20,
        marginRight:30,
       alignItems: 'center'
    },

    container1: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#ecf0f1',
      },

});