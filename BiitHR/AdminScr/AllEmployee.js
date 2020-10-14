import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

class AllEmployee extends React.Component {
state = {
    data: []
}

renderItem = ({ item })=> {
  const { navigate } = this.props.navigation;

  return (
    <View style={styles.listItem}>
      <Image source={{ uri: 'data:image/jpeg;base64,' + item.picture }} style={{ width: 60, height: 60, borderRadius: 30 }} />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.designation}</Text>
      </View>
      <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
       onPress={() => navigate("EmployeeDetail",{dp:item.picture,
        name:item.name,
        email: item.email,
        contact_no: item.contact_no,
        cnic: item.cnic,
        designation: item.designation,
        emp_id: item.emp_id,
        password: item.password,
        date: item.date,
      })
      
       }>
        <Text style={{ color: "#E66E2F" }}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}


webCall = () => {
  <ActivityIndicator size="large" />
  fetch('http://'+global.IP+'/BIIT_HR/api/employees/allemployee', {
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

renderSeperator =() => {
  return(
    <View 
       style={{
         height: 1,
         width: ('90%'),
        backgroundColor: '#E66E2F',
        marginLeft: ('3%'),
        marginRight: ('3%')
       }}
    />
  )
}
componentDidMount(){
  this.webCall();
  <ActivityIndicator size="large" />
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.emp_id}
          ItemSeparatorComponent={this.renderSeperator}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={() =>navigate("AddEmployee")} style={styles.TouchableOpacityStyle} >

          <Image source={require('../icons/logoplus2.png')}

            style={styles.FloatingButtonStyle}  />

        </TouchableOpacity>
      </View>
    );
  }
}

export default AllEmployee;

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