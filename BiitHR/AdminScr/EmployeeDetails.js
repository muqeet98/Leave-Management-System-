

import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Picker, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Body } from 'native-base';

class EmployeeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            avatarSource: null,
            base64string: '',
            Picture: null,
            dataSource: [],
            PostArray: [],
            date: ''
        }
    }



    PostData = async () => {
        this.state.PostArray.push({
            'name': this.state.name,
            'cnic': this.state.cnic_txt,
            'contact_no': this.state.contact_txt,
            'email': this.state.email,
            'password': this.state.password,
            'designation': this.state.position,
            'picture': this.state.base64string,
            'date': this.state.date,
        });
        this.setState({ dialogVisible: false });
        fetch('http://192.168.137.1/BIIT_HR/api/employees/registeremployee', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(this.state.PostArray[0])


        })
            .then((Response) => Response.json())
            .then((responseData) => {
                alert("Record Safe Successfully!", responseData)
                console.log(responseData)
                this.props.navigation.replace("AllEmployee")
                this.componentDidMount()
            })
            .catch(error => console.log(error))
    }


    componentDidMount() {
    }




    render() {
        let { image } = this.state;
        const { dp } = this.props.route.params;
        const { name } = this.props.route.params;
        const { email } = this.props.route.params;
        const { designation } = this.props.route.params;
        const { contact_no } = this.props.route.params;
        const { cnic } = this.props.route.params;
        const { emp_id } = this.props.route.params;
        const { password } = this.props.route.params;
        const { date } = this.props.route.params;

        // console.log("Picture aa rahi hai", dp);
        return (
            <View style={styles.container}>
                <ScrollView style={styles.View2}>


                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: ('2%') }}>

                        <TouchableOpacity onPress={this._pickImage}>
                            <View style={{
                                // borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                          
                                backgroundColor: 'rgba(0,0,0,0.35)',
                                borderRadius: 80,

                            }}>

                                <Image source={{ uri: 'data:image/jpeg;base64,' + dp }} style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 60
                                }} />

                            </View>
                        </TouchableOpacity>
                        {/* </ImageBackground> */}

                    </View>

                    <View sty>

                        <View style={styles.bodytext}>

                         {/* <Text style={styles.textstyle}>:           </Text> */}
                            <Text style={styles.textstyle}>Name:{'                 '}{name}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            {/* <Text style={styles.textstyle}>Email:            </Text> */}
                            <Text style={styles.textstyle}>Email:{'                  '}{email}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            {/* <Text style={styles.textstyle}>contact no:     </Text> */}
                            <Text style={styles.textstyle}>contact no:{'          '}{contact_no}</Text>

                        </View>

                        <View style={styles.bodytext}>
                           
                            <Text style={styles.textstyle}>CNIC#{'                 '}{cnic}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            
                            <Text style={styles.textstyle}>Designation:{'         '}{designation}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            
                            <Text style={styles.textstyle}>password:{'            '}{password}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signupbutton}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupbutton} onPress={() => this.props.navigation.navigate("UpdateEmployee", {
                        emp_id: emp_id,
                        name: name,
                        dp: dp,
                        cnic: cnic,
                        email: email,
                        password: password,
                        designation: designation,
                        dateJ: date,
                        contact_no: contact_no

                    })

                    } >
                        <Text style={styles.buttonText} >Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default EmployeeDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: ('5%')
    },
    View2: {
        marginTop: ('3%')
    },
    textInputstyle: {
        marginTop: hp('2%'),
        marginLeft: wp('4%'),

        marginRight: wp('4%'),
    },
    textstyle: {
        color: 'black',
        // marginLeft: hp('5%'),
        // marginRight: hp('10%'),
        fontSize: 18,
        marginTop: 5

    },
    buttonContainer: {

        margin: ('10%'),


        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        color: 'white',
        marginTop: ('5%')

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
    signupbutton: {
        backgroundColor: '#E66E2F',
        width: '45%',
        height: 60,
        borderRadius: 45
        // borderRadius: 45,

        // borderWidth: 1,
        // borderColor: '#E66E2F'


    },

    bodytext: {
      //  flexDirection: 'row',
        marginTop: ('7%'),
        fontSize: 20,
        marginLeft: ('5%')
    }

});



