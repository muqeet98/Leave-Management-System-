import React, { Component, useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, KeyboardAvoidingView,
    StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity,Alert
} from 'react-native';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const LeaveView = (props) => {
  const[cri_total_leave,totalleaves]= useState("")
  const[cri_sick_leave, setSickleave] = useState("")
  const[cri_earned_leave, setEarnedleave] = useState("")
  const[cri_casual_leave, setCasual] = useState("")
  const[cri_short_leave, setShort] = useState("")
  const[id] = useState("19")



  const PostData = () => {

    fetch('http://'+ global.IP +'/BIIT_HR/api/criteria/getCriteria?cri_id=100', {
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            totalleaves(data[0].cri_total_leave)
            setSickleave(data[0].cri_sick_leave)
            setEarnedleave(data[0].cri_earned_leave)
            setCasual(data[0].cri_casual_leave)
            setShort(data[0].cri_short_leave)

            console.log(data[0].cri_sick_leave)
          console.log(data[0].cri_total_leave)
          
    
        })
        .catch(error => error)

  }


  useEffect(() => {
    PostData();
  }, [])

  

    return (
    
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <ScrollView style={styles.container}>
                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Total Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >
{/* 
                            <TextInput style={styles.EditText1}
                                placeholder=''

                            // label='Email'
                               value={total_leave}
                              onChangeText={text => setTotalleaves( text )}
                            /> */}

                        <Text style={styles.textStyle}> {cri_total_leave} </Text>
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Sick Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                            {/* <TextInput style={styles.EditText1}
                            // label='Email'
                        value={cri_sick_leave}
                              onChangeText={text => setSickleave( text )}
                            /> */}

                        <Text style={styles.textStyle}>{cri_sick_leave}</Text>
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Earned Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >

                        <Text style={styles.textStyle}>{cri_earned_leave}</Text>
                            {/* <TextInput style={styles.EditText1}
                                placeholder=''
                            // label='Email'
                            value={cri_earned_leave}
                              onChangeText={text => setEarnedleave( text )}
                            /> */}
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Casual Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >
                        <Text style={styles.textStyle}>{cri_casual_leave}</Text>

                            {/* <TextInput style={styles.EditText1}
                            // label='Email'
                            value={casual_leave}
                              onChangeText={text => setCasual( text )}
                            /> */}
                        </View>
                    </View>

                    <View style={styles.Row1Style}>
                        <View style={styles.marginR1}>
                            <Text style={styles.LabelText}>Short Leaves</Text>
                        </View>
                        <View style={styles.marginR1} >
                        <Text style={styles.textStyle}>{cri_short_leave}</Text>
                            {/* <TextInput style={styles.EditText1} 
                            // label='Email'
                            value={cri_short_leave}
                            onChangeText={text => setShort( text )}
                            /> */}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: ('10%') }}>
                        <View>
                            <TouchableOpacity style={styles.cancelbutton} onPress={() => props.navigation.navigate("AdmHome")}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.savebutton} onPress={()=> props.navigation.navigate("LeaveMan"
                            , {
                                total_leaves: cri_total_leave,
                                cri_sick_leave: cri_sick_leave,
                                cri_earned_leave: cri_earned_leave,
                                cri_casual_leave: cri_casual_leave,
                                cri_short_leave: cri_short_leave

                            }
                            )} >
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    
    );

}

export default LeaveView;

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

    textStyle:{
        fontSize:20,
        marginRight:30,
       alignItems: 'center'
    }

});