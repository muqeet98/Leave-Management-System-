// import React from 'react';
// import {StyleSheet, FlatList, View, Text} from 'react-native';
// const LeaveReqAd =()=>{
//   return(
//     <View>
//        <Text>Work In process!!</Text>
//     </View>
//   )

// }
// export default LeaveReqAd;


import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImagePickerIOS } from 'react-native';


var emp_id;
class LeaveReqAd extends React.Component {
state = {
    data: []
}
renderItem = ({ item })=> {
  const { navigate } = this.props.navigation;

  return (
    <View style={styles.listItem}>
      <Image source={{ uri: 'data:image/jpeg;base64,' + item.pic }} style={{ width: 80, height: 80, borderRadius: 60 }} />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{item.EmpName}</Text>

        <Text style={{ fontSize:18, marginBottom : ('2%') }}>{item.desig}</Text>
      
      </View>
      <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" , marginTop:('2%')}}
       onPress={() => navigate("LeaveReqDetail",
       {dp:item.pic,
        name:item.EmpName,
        desig: item.desig,
        leave_type: item.Type,
        date_from: item.From,
        date_to: item.To,
        leave_description: item.des,
        leave_id: item.leaveId,
        emp_id: item.EmpID

    

      })
      
       }
       >
        <Text style={{ color: "#E66E2F" }}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}


webCall = () => {
  fetch('http://'+global.IP+'/BIIT_HR/api/leaves/AllLeaves', {
    method: "get",
  }).then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        isLoading: true,
        data: data
      
      })
      console.log('Data hai' + data)
    })
}

componentDidMount(){
this.webCall();
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.leaveId}
        />
        {/* <TouchableOpacity activeOpacity={0.5} onPress={() =>navigate("AddEmployee")} style={styles.TouchableOpacityStyle} >

          <Image source={require('../icons/logoplus2.png')}

            style={styles.FloatingButtonStyle}  />

        </TouchableOpacity> */}
      </View>
    );
  }
}

export default LeaveReqAd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 20
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  TouchableOpacityStyle:{
 
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
 
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 35
  }
});