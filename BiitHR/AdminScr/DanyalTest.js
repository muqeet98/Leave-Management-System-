import React, { Component } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Modal,
  Alert,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";

export default class DocPItemScreen extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      screenWidth: "",
      screenHeight: "",

      description: "",
      sugar: "",
      sodium: "",

      searchTxt: null,
      id: null,
      visibleP: false,
      searchTxt: null,
      dataSource: [],
      temp: [],

      searchTxt1: null,
      dataSource1: [],
      temp1: [],
      ids: [],
    };
  }

  //----------------------------------------------------------
  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };

  toggleChecked = (itemId) => {
    console.log("toggle function called");
    const ids = [...this.state.ids, itemId];

    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
    console.log(this.state.ids);
  };
  //====================================================================
  componentDidMount = () => {
    fetch(base + "Diseases?", { method: "GET" })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("data is", responseJson);
        this.setState({
          temp: responseJson,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(base + "foods?", { method: "GET" })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("data is", responseJson);
        this.setState({
          temp1: responseJson,
          dataSource1: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  getDiseaseItems = async (f_id) => {
    let foodItems = "";
    await fetch(base + "F_D/" + f_id, { method: "GET" })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("data is", responseJson);
        (foodItems = responseJson), this.setState({});
        console.log("data is foodids", foodItems);
      })
      .catch((error) => {
        console.error(error);
      });
    this.state.ids = foodItems.map(function (foodItems) {
      return foodItems.id;
    });
    console.log(this.state.ids);
  };
  
  //========================================================================================================================================
  deleteDisease(id) {
    //  console.log(id);
    try {
      fetch(base + "Diseases/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => res.text()); // or res.json()
      //  .then((res) => console.log(res));

      //Delete api or anything here
      this.componentDidMount();
    } catch (e) {
      console.log(e);
    }
  }
  updateDisease(id) {
    fetch(base + "Diseases/" + id, {
      method: "PUT",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        d_id: id,
        name: this.state.name,
        description: this.state.description,
        sodium: parseFloat(this.state.sodium),
        sugar: parseFloat(this.state.sugar),
        FoodCSV: this.state.ids.toString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
      });
    Alert.alert("Disease updated", "Disease is updated in database", [
      { text: "OK" },
    ]);
    this.componentDidMount();
  }
  //====================================================================
  renderItem = ({ item }) => {
    let items = [];
    if (item.FoodList) {
      items = item.FoodList.map((row) => {
        let imageUri = "data:image/png;base64," + row.pic;
        return (
          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 5 }}>
              <Image
                style={{ width: 75, height: 75 }}
                source={{ uri: imageUri }}
              />
            </View>
            <View style={{ marginTop: 20, marginLeft: 20, padding: 5 }}>
              <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
                {row.name}
              </Text>
            </View>
          </View>
        );
      });
    }

    return (
      <TouchableOpacity
        onPress={(value) => {
          this.setState({
            id: item.d_id,
            visibleP: true,
            name: item.name,
            description: item.description,
            sodium: item.sodium,
            sugar: item.sugar,
          });
          this.getDiseaseItems(item.d_id);
        }}
      >
        <View style={styles.flcontainer}>
          <View>
            <View style={{ flex: 0.5, justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.name}
              </Text>
            </View>
            <View style={{ flex: 6, justifyContent: "center" }}>
              <View style={{ padding: 10 }}>
                <Text>{item.description}</Text>
              </View>
              <View style={{ flex: 0.5, padding: 10 }}>
                <Text>Sodium quantity Allowed:{item.sodium}g</Text>
              </View>
              <View style={{ flex: 0.5, padding: 10 }}>
                <Text>Sugar quantity Allowed:{item.sugar}g</Text>
              </View>
              <View style={{ flex: 2.5 }}>{items}</View>
            </View>
            <View
              style={{
                flex: 250,
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={() => this.deleteDisease(item.d_id)}>
                <Icon name="delete" size={40} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search here..."
        lightTheme
        editable={true}
        round
        value={this.state.searchTxt}
        onChangeText={(value) => this.updateSearch(value)}
      />
    );
  };
  updateSearch = (value) => {
    const filterFoods = this.state.temp.filter((food) => {
      let fo = food.name.toLowerCase();
      let foLower = value.toLowerCase();
      return fo.indexOf(foLower) > -1;
    });
    this.setState({ dataSource: filterFoods });
  };
  //=====================================================================
  renderItem1 = ({ item }) => {
    let imageUri = "data:image/png;base64," + item.pic;

    // console.log(imageUri);
    return (
      <View style={styles.flcontainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUri }} />
        <View style={{ flex: 0.9, flexDirection: "row" }}>
          <View style={{ flex: 3.1, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          </View>
          <View style={{ flex: 3.2, justifyContent: "center" }}>
            <Text>Carbs:{item.carbs}g</Text>
            <Text>Sugar:{item.sugar}g</Text>
            <Text>Sodium:{item.sodium}g</Text>
          </View>
          <View style={{ flex: 3.2, justifyContent: "center" }}>
            <Text>Calories:{item.calories}g</Text>
            <Text>Protiens:{item.Protiens}g</Text>
            <Text>Fat:{item.fat}g</Text>
          </View>
          <View style={{ flex: 0.8, marginRight: 5, justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderColor: "#f0f8ff",
                borderWidth: 1,
              }}
            >
              <CheckBox
                iconType="material"
                checkedIcon="clear"
                uncheckedIcon="add"
                checkedColor="red"
                uncheckedColor="blue"
                size={35}
                checked={this.isChecked(item.id)}
                onPress={() => this.toggleChecked(item.id)}
              />
            </TouchableOpacity>
            {/* <Button title="a" onPress={() => this.toggleChecked(item.id)} /> */}
          </View>
        </View>
      </View>
    );
  };
  //====================================================================
  render() {
    return (
      <ImageBackground
        source={require("./background1.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Modal visible={this.state.visibleP} animationType="slide">
          <ImageBackground
            source={require("./background1.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <ScrollView
              //style={styles.container1}
              contentContainerStyle={{ alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                Update Information about the Disease
              </Text>
              <TextInput
                label="Enter Name"
                mode="outlined"
                theme={{
                  colors: { primary: "#556b2f", uncheckedColor: "transparent" },
                }}
                style={{ ...styles.input1, width: 300 }}
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              />
              <TextInput
                label="Enter Details"
                mode="flat"
                theme={{
                  colors: { primary: "#556b2f" },
                }}
                multiline={true}
                numberOfLines={10}
                textAlignVertical={true}
                style={{
                  ...styles.input1,
                  padding: 0,
                  height: 120,
                  width: 300,
                }}
                value={this.state.description}
                onChangeText={(description) => this.setState({ description })}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  label="Sodium limit"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: "#556b2f",
                      uncheckedColor: "transparent",
                    },
                  }}
                  keyboardType={"numeric"}
                  style={{ ...styles.input1, marginLeft: 50, width: 120 }}
                  value={String(this.state.sodium)}
                  onChangeText={(sodium) => this.setState({ sodium })}
                />

                <TextInput
                  label="Sugar limit"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: "#556b2f",
                      uncheckedColor: "transparent",
                    },
                  }}
                  keyboardType={"numeric"}
                  style={{ ...styles.input1, margin: 50, width: 120 }}
                  value={String(this.state.sugar)}
                  onChangeText={(sugar) => this.setState({ sugar })}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{ ...styles.button2, width: 130 }}
                  onPress={() => {
                    this.setState({ visibleP: false });
                  }}
                >
                  <Text style={{ ...styles.buttonText, marginLeft: 25 }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.button2, width: 130 }}
                  onPress={() => {
                    this.updateDisease(this.state.id);
                    //        console.log("id is" + this.state.id);
                    this.setState({ visibleP: false });
                  }}
                >
                  <Text style={{ ...styles.buttonText, marginLeft: 20 }}>
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                //ListHeaderComponent={this.renderHeader}
                data={this.state.dataSource1}
                renderItem={this.renderItem1}
                keyExtractor={(item, i) => i.toString()}
                extraData={this.state}
              />
            </ScrollView>
          </ImageBackground>
        </Modal>
        {/* ---------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------- */}
        {/* <FlatList ListHeaderComponent={this.renderHeader} /> */}
        <this.renderHeader />
        <ScrollView>
          <FlatList
            horizontal={true}
            //ListHeaderComponent={this.renderHeader}
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i.toString()}
            extraData={this.state}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("DocPItemAddScreen")}
        >
          <Text style={styles.buttonText}>Add new Disease</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  flcontainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 12,
    width: 390,
  },
  button1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 60,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    marginLeft: 90,
    marginBottom: 20,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "seagreen",
  },
  button2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 60,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    margin: 10,

    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "seagreen",
  },

  buttonText: {
    color: "white",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 35,
  },
  input1: {
    backgroundColor: "white",
    marginTop: 20,
    height: 50,
    fontSize: 20,
  },
});