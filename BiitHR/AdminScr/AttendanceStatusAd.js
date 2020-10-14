import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, KeyboardAvoidingView,
  TextInput, Keyboard, TouchableOpacity,
  Image, TouchableWithoutFeedback,

} from 'react-native';
import { DataTable , Searchbar} from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

class AttendanceStatusA extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });
  render() {
    const { searchQuery } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textstyle}></Text>
        <View>
          <Searchbar style={styles.searchBarStyle}
            placeholder="Search"
            onChangeText={this._onChangeSearch}
            value={searchQuery}
          />
        </View>
        <ScrollView style={{ marginTop: 20 }}>
          <DataTable>
            <DataTable.Header style={styles.headertxtDT}>
              <DataTable.Title style={styles.titleDTC1}>#</DataTable.Title>
              <DataTable.Title style={styles.titleDTC2}>Date</DataTable.Title>
              <DataTable.Title style={styles.titleDTC3}>Status</DataTable.Title>
            </DataTable.Header>

            {/* <DataTable.Row style={styles.headertxtDT}>
              <DataTable.Cell style={styles.textstyle}>1</DataTable.Cell>
              <DataTable.Cell style={styles.cellstyle2}>12-3-2020</DataTable.Cell>
              <DataTable.Cell style={styles.cellstyle3}>P</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.headertxtDT}>
              <DataTable.Cell style={styles.textstyle}>2</DataTable.Cell>
              <DataTable.Cell style={styles.cellstyle2}>13-3-2020</DataTable.Cell>
              <DataTable.Cell style={styles.cellstyle3}>P</DataTable.Cell>
            </DataTable.Row> */}






                              {/* <DataTable.Pagination
                  page={1}
                  numberOfPages={3}
                  onPageChange={(page) => { console.log(page); }}
                  label="1-2 of 6"
                  /> */}
          </DataTable>
        </ScrollView>
      </View>
    );
  }
}

export default AttendanceStatusA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  textstyle: {
    fontSize: 22,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    paddingLeft: 10
  },
  searchBarStyle:{
    marginLeft: ('5%'),
    marginRight: ('5%')
  },
  signinbutton: {
    backgroundColor: '#e91e63',
    width: '90%',
    height: 45,
    borderRadius: 45,
    marginTop: 20,
    marginRight: 50,
    marginLeft: 20
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    justifyContent: 'center'

  },
  headertxtDT: {
    backgroundColor: '#BBBBBB',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 20
  },
  titleDTC1: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 10,

  },
  titleDTC2: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 40,

  },
  titleDTC3: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 50,

  },
  cellstyle1: {
    fontSize: 22,
    color: 'white',
    paddingRight: 20
  },
  cellstyle2: {
    paddingLeft: 45
  },
  cellstyle3: {
    paddingLeft: 70
  }




})