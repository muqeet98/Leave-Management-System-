// import React from 'react';
// import {StyleSheet, FlatList, View, Text} from 'react-native';
// const Notification =()=>{
//   return(
//     <View>
//        <Text>Work In process!!</Text>
//     </View>
//   )

// }
// export default Notification;




import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

 import {DataTable} from 'react-native-paper';

class Notification extends React.Component {
state = {
    data: []
}
renderItem = ({ item })=> {
  const { navigate } = this.props.navigation;

  return (
    <View style={styles.listItem}>
      
      <Text style={{marginLeft: ('5%')}}>{item.leave_id}</Text>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.date_from}</Text>
      </View>
      <View>
      <Text style={{ fontWeight: "bold", marginRight:('5%') }}>{item.leave_status}</Text>
      </View>   
    </View>
  );
}


webCall = () => {
  const { emp_id } = this.props.route.params;
  fetch('http://'+global.IP+'/BIIT_HR/api/Leaves/OneLeave?emp_id=' +emp_id+'', {
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
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <DataTable>
         <DataTable.Header style={styles.headertxtDT}>
           <DataTable.Title style={styles.titleDTC1}>#</DataTable.Title>
           <DataTable.Title style={styles.titleDTC2}>Date</DataTable.Title>
           <DataTable.Title style={styles.titleDTC3}>Status</DataTable.Title>
         </DataTable.Header>
       </DataTable>
       <ScrollView>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item}
          ItemSeparatorComponent={this.renderSeperator}
        />
       </ScrollView>
      </View>
    );
  }
}

export default Notification;

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
  },
    headertxtDT:{
    backgroundColor: '#BBBBBB',
    marginLeft: 20,
    marginRight:20,
    borderRadius:10,
    marginTop:20
  },
  titleDTC1:{
    fontSize: 30,
    color: 'black',
    paddingLeft:10,

  },
  titleDTC2:{
    fontSize: 30,
    color: 'black',
    paddingLeft:('20%'),

  },
  titleDTC3:{
    fontSize: 30,
    color: 'black',
    paddingLeft:('30%'),

  },
});