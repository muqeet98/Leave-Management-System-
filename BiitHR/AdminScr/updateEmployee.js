

import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Picker, Image, TouchableOpacity, Button,ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

 import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Body } from 'native-base';

class UpdateEmployee extends React.Component {
  constructor(props) {
    super(props);
    const { dateJ } = this.props.route.params;
    this.state = {
      // dateF: "",
      // position: "",
      image: null,
      avatarSource: null,
      base64string: '',
      Picture: null,
      dataSource: [],
      PostArray: [],
      // name: null,
      // cnic_txt: null,
      // contact_txt:'',
      // email: '',
      // passwordTxt:'',
      date: '',
      

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
    const { emp_id } = this.props.route.params;
    fetch('http://'+global.IP+'/BIIT_HR/api/Employees/EmployeePut/' + emp_id+'' , {
      method: 'put',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      
        body: JSON.stringify( this.state.PostArray[0])
  
      
    })
      .then((Response) => Response.json())
      .then((responseData) => {
        alert("Updated Successfully!", responseData)
        console.log(responseData)
          this.props.navigation.navigate("EmployeeDetail")
         //this.componentDidMount()
      })
      .catch(error => console.log(error))
     // console.log("haii")
    
  }


  componentDidMount() {

    this.getPermissionAsync();
    console.log('hi');
    this.fun();
  }


  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, //All,Images,Videos
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
    });
    this.setState({ base64string: result.base64 })
    console.log('ye ha' + this.state.base64string);

    if (!result.cancelled) {
        this.setState({ image: result.uri });
        console.log('Image ka console' + this.state.Image);
    }
};

  myfun = () => {
    ImagePicker.showImagePicker(options, (Picture) => {
      console.log('Picture = ', Picture);


      if (Picture.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (Picture.error) {
        console.log('Image Picker Error: ', Picture.error);
      }
      else {
        // let source = { uri: Picture.uri };

         let source = { uri: 'data:image/jpeg;base64,' + Picture.data };
         //console.log(Picture);

        this.setState({
          avatarSource: source,
          Picture: Picture.data,
          
        });
      }
    });
  }
  fun=()=>{
    const { emp_id } = this.props.route.params;
    console.log("ID Data",{emp_id});
  }


  render() {
     let { image } = this.state;
     const { dp } = this.props.route.params;
     const { name } = this.props.route.params;
     const { email } = this.props.route.params;
     const { designation } = this.props.route.params;
     const { contact_no } = this.props.route.params;
     const { cnic } = this.props.route.params;
     const { password } = this.props.route.params;
    //  const { dateJ } = this.props.route.params;


  // this.setState({
  //   id: emp_id
  // }
  // )

    return (
      <View style={styles.container}>
        <ScrollView style={styles.View2}>


          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop: ('3%'), borderRadius: 80}}>
          {/* <Image source={this.state.avatarSource}
            style={{ width: 100, height: 100, margin: 10 }}
          />
          <Button
            title="Select Image"                     
           // onPress={this.myfun}
           // customClick={this.myfun.bind(this)}
          /> */}
             {/* {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 45 }} />}
            <Button title="Upload Image" color="#E66E2F" onPress={this._pickImage} /> */}
            <Text>{}</Text>
 <ImageBackground source={{ uri: 'data:image/jpeg;base64,' + dp }}  style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginBottom: '5%', borderRadius: 80 }}>
                                    <TouchableOpacity onPress={this._pickImage}>
                                        <View style={{
                                            // borderWidth: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 150,
                                            height: 150,
                                            backgroundColor: 'rgba(0,0,0,0)',
                                            borderRadius: 60,
                                        }}>

                                            {image &&
                                                <Image source={{ uri: image }} style={{
                                                    borderWidth: 1,
                                                    borderColor: 'rgba(0,0,0,0)',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 150,
                                                    height: 150,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 80,
                                                }} />}
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>

          </View> 


          <TextInput style={styles.textInputstyle}
            label='Name'
            mode='outlined'
            placeholder='enter full name'
            defaultValue={name}
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={name => this.setState({ name })}
          />
          <TextInput style={styles.textInputstyle}
            label='CNIC'
            mode='outlined'
            placeholder='82103-9659052-1'
            defaultValue={cnic}
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={cnic => this.setState({ cnic })}
          />

          <TextInput style={styles.textInputstyle}
            label='Contact No'
            mode='outlined'
            placeholder='0337-9207375'
            defaultValue={contact_no}
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={contact_txt => this.setState({ contact_txt })}
          />

          <TextInput style={styles.textInputstyle}
            label='Email'
            mode='outlined'
            placeholder='abc@gmail.com'
            defaultValue={email}
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />

          <TextInput style={styles.textInputstyle}
            label='Password'
            //secureTextEntry
            mode='outlined'
            placeholder='i.e:123'
            defaultValue={password}
            theme={{ colors: { primary: '#E66E2F', underlineColor: 'transparent', } }}
            //   value={this.state.text}
            onChangeText={password => this.setState({ password })}
          />


          {/* <View style={{ marginTop: ('5%'), flexDirection: 'row' }}>

            <Text style={styles.textstyle}>Join Date</Text>
            <DatePicker
                                     style={{ width: wp('70%'), paddingLeft: 50 }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Join Date"
                                    defaultda
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2022-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 4,
                                            top: 4,
                                            marginLeft: 15
                                        },
                                        dateInput: {
                                            marginLeft: 36,
                                            borderWidth: 0,

                                        }
                                  
                                    }}
                        
                                    onDateChange={(date) => { this.setState({ date: date }) }}

                                />
          </View> */}

          <View style={{ flexDirection: 'row', marginTop: ('7%'), fontSize: 30 }}>
            <Text style={styles.textstyle}>Position</Text>
            <Picker
            defaultValue={designation} 
              onValueChange={position => {
                this.setState({ position })
                console.log('changed to', position)
              }}
              selectedValue={this.state.position}
              style={{ height: 40, width: wp('70%'), color: 'black', marginLeft: ('20%'), fontSize: 20 }}
              mode='dialog'
            >
              <Picker.Item label="Select Designation" value="Select" />
              <Picker.Item label="Asst Professer" value="AProfesser" />
              <Picker.Item label="Professor" value="Professor" />
              <Picker.Item label="Lab Instructor" value="LabAtt" />
              <Picker.Item label="Manager" value="Manager" />
            </Picker>
          </View>


        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupbutton} onPress={() => this.props.navigation.navigate("AllEmployee")}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupbutton} onPress={ this.PostData} >
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default UpdateEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10
  },
  View2: {
    marginTop: 2
  },
  textInputstyle: {
    marginTop: hp('5%'),
    marginLeft: wp('4%'),

    marginRight: wp('4%'),
  },
  textstyle: {
    color: 'black',
    marginLeft: hp('3%'),
    fontSize: 16,
    marginTop: 5

  },
  buttonContainer: {

    margin: 30,


    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    color: 'white',
    marginTop: ('4%')

  },
  buttons: {
    backgroundColor: '#E66E2F',
    width: '40%',
    height: 45,
    borderRadius: 45,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  signupbutton: {
    backgroundColor: '#E66E2F',
    width: '45%',
    height: 60,
    borderRadius:45
    // borderRadius: 45,

    // borderWidth: 1,
    // borderColor: '#E66E2F'


  }

});



