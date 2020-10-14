
// import React, { Component, useState } from 'react';
// import {
//     View, Text, StyleSheet, KeyboardAvoidingView,
//     StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity
// } from 'react-native';
// import { Input } from 'react-native-elements';
// import { TextInput } from 'react-native-paper';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ScrollView } from 'react-native-gesture-handler';
// import { render } from 'react-dom';

// const LeaveManage = (props) => {
//     const [cri_total_leave, setTotalleaves] = useState(0)
//     const [cri_sick_leave, setSickleave] = useState(0)
//     const [cri_earned_leave, setEarnedleave] = useState(0)
//     const [cri_casual_leave, setCasual] = useState(0)
//     const [cri_short_leave, setShort] = useState(0)
//     const [cri_id] = useState('100')
//     const PostData = () => {

//         fetch('http://' + global.IP + '/BIIT_HR/api/criteria/CriteriaPut', {
//             method: "post",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({
//                 cri_id,
//                 cri_total_leave,
//                 cri_sick_leave,
//                 cri_earned_leave,
//                 cri_casual_leave,
//                 cri_short_leave,
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (!data.ok) {
//                     console.log(data)
//                     props.navigation.navigate("AdmHome")
//                 } else {
//                     console.log("wrong ")
//                     Alert.alert("Email or password is not correct")
//                 }
//             })
//             .catch(error => console.log(error))

//     }

//     const addValues = () => {
//         // let sickL = cri_sick_leave;
//         // const earned= cri_earned_leave;
//         // const casual = cri_casual_leave;
//         // const short = cri_short_leave;
//         let sickL = cri_sick_leave;
//         let earnedL = cri_earned_leave;
//         let casualL = cri_casual_leave;
//         let shortL = cri_sick_leave;

//         let total = sickL + earnedL + casualL + shortL;
//         setTotalleaves(total);

//         console.log("hello" + total);
//     }

//     const { total_leave } = props.route.params;
//     const { sick_leave } = props.route.params;
//     //   const{cri_earned_leave}=props.route.params;
//     //   const{cri_casual_leave}=props.route.params;
//     //   const{cri_short_leave}=props.route.params;

//     return (

//         <KeyboardAvoidingView behavior="height" style={styles.container}>
//             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
//                 <ScrollView style={styles.container}>

//                     <View>
//                         <Text style={{ fontSize: 25, fontStyle: 'normal', marginLeft: 55, fontWeight: "bold" }}>Update Leave Critera {total_leave}</Text>
//                     </View>


//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Sick Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={cri_sick_leave}
//                                 // onChangeText={(text) => {setSickleave({text}); addValues()}}
//                                 onChangeText={text => { setSickleave(text) }}
//                             />
//                         </View>

//                     </View>
//                     <View>
//                         <Text>Hello I am sick leave {cri_sick_leave}</Text>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Earned Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}

//                                 value={cri_earned_leave}
//                                 // onChangeText={(text) => {setEarnedleave({text}); addValues()}}
//                                 onChangeText={text => setEarnedleave(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Casual Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={cri_casual_leave}
//                                 keyboardType={'numeric'}
//                                 onChangeText={text => setCasual(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Short Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={cri_short_leave}
//                                 onChangeText={text => setShort(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Total Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 placeholder=''

//                                 //defaultValue={cri_sick_leave}
//                                 value={cri_sick_leave + cri_earned_leave}
//                                 editable={false}
//                                 onChangeText={text => setTotalleaves(text)}
//                             // onChangeText

//                             />
//                         </View>
//                     </View>

//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: ('10%') }}>
//                         <View>
//                             <TouchableOpacity style={styles.cancelbutton} onPress={() => props.navigation.navigate("AdmHome")}>
//                                 <Text style={styles.buttonText}>Cancel</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <TouchableOpacity style={styles.savebutton} onPress={PostData}  >
//                                 <Text style={styles.buttonText}>Save</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </ScrollView>

//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>

//     );

// }

// export default LeaveManage;

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
//         //fontWeight: "bold" 
//     },

//     EditText1: {
//         width: wp('20%'),
//         height: hp('5%'),
//         borderColor: '#E66E2F',
//         borderRadius: 5,
//         borderWidth: 1

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
//         width: wp('30%')
//     },
//     cancelbutton: {
//         backgroundColor: '#E66E2F',
//         height: 45,
//         borderRadius: 45,
//         marginTop: ('4%'),
//         width: wp('30%')
//     },

// });







/////////////////////////////////////////////////////

import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, KeyboardAvoidingView,
    StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
class LeaveManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: '',
          dateTo: '',
          cri_id: 100,
          cri_sick_leave: 0,
          cri_earned_leave: 0,
          cri_casual_leave: 0,
          cri_short_leave: 0,
          cri_total_leave: 0
        }
      }


     PostData = () => {
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/CriteriaPut', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                cri_id: this.state.cri_id,
                cri_total_leave: this.state.cri_total_leave,
                cri_sick_leave: this.state.cri_sick_leave,
                cri_earned_leave: this.state.cri_earned_leave,
                cri_casual_leave: this.state.cri_casual_leave,
                cri_short_leave: this.state.cri_short_leave,
            })
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

     addValues = async() => {
        // let sickL = cri_sick_leave;
        // const earned= cri_earned_leave;
        // const casual = cri_casual_leave;
        // const short = cri_short_leave;
        console.log("Hello teeeeeeeeee")
      var cri_sick = parseInt(this.state.cri_sick_leave);
        var cri_earned_leave = parseInt(this.state.cri_earned_leave);
        var cri_casual_leave = parseInt(this.state.cri_casual_leave);
        var cri_short_leave = parseInt(this.state.cri_short_leave);
          console.log("Hello you" +cri_sick)

        console.log("Earned " + cri_earned_leave)
        console.log("casual " + cri_casual_leave)
        console.log("short" + cri_short_leave)
        
        const cri_total_leave = cri_sick + cri_earned_leave + cri_casual_leave + cri_short_leave;

        this.setState({cri_total_leave})
        console.log("Total you" + cri_total_leave)
       // alert(this.state.cri_sick_leave)
        //console.log("hello" + total);
    }



   render(){
    const { total_leave } = this.props.route.params;
    const { sick_leave } = this.props.route.params;
    //   const{cri_earned_leave}=props.route.params;
    //   const{cri_casual_leave}=props.route.params;
    //   const{cri_short_leave}=props.route.params;

    return (

        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <ScrollView style={styles.container}>

                    <View>
                        <Text style={{ fontSize: 25, fontStyle: 'normal', marginLeft: 55, fontWeight: "bold" }}>Update Leave Critera {total_leave}</Text>
                    </View>


                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Sick Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            <TextInput style={styles.EditText1}
                                // label='Email'
                                value={String(this.state.cri_sick_leave)}

                                onChangeText={(cri_sick_leave) => { this.setState({cri_sick_leave},()=> this.addValues());  } }
                               
                            />
                        </View>

                    </View>
                  

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Earned Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            <TextInput style={styles.EditText1}

                                value={String(this.state.cri_earned_leave)}
                                onChangeText={(cri_earned_leave) => { this.setState({cri_earned_leave},()=> this.addValues());  } }
                           
                           />
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Casual Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            <TextInput style={styles.EditText1}
                                // label='Email'
                                value={String(this.state.cri_casual_leave)}
                                onChangeText={(cri_casual_leave) => { this.setState({cri_casual_leave},()=> this.addValues());  } }
                           
                            />
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Short Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            <TextInput style={styles.EditText1}
                            
                                value={String(this.state.cri_short_leave)}
                                onChangeText={(cri_short_leave) => { this.setState({cri_short_leave},()=> this.addValues());  } }
                           
                            />
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Total Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            <TextInput style={styles.EditText1}
                                placeholder=''
                                editable= {false}
                                value={String(this.state.cri_total_leave)}
                                onChangeText={(cri_total_leave) => { this.setState({cri_total_leave});()=> this.addValues(); } }
                              
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: ('10%') }}>
                        <View>
                            <TouchableOpacity style={styles.cancelbutton} onPress={() => this.props.navigation.navigate("AdmHome")}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.savebutton} onPress={this.PostData}  >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
   }
}

export default LeaveManage;

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
        width: wp('30%')
    },
    cancelbutton: {
        backgroundColor: '#E66E2F',
        height: 45,
        borderRadius: 45,
        marginTop: ('4%'),
        width: wp('30%')
    },

});