import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownHeight: 0,
      previewImage: "image_1",
      selectedItem: "",
    };
  }

  componentDidMount() {}



  render() {
    let preview_images = {
      image_1: require("../assets/cat.png"),
      image_2: require("../assets/dog.png"),
      image_3: require("../assets/cow.png"),
      image_4: require("../assets/buffalo.png"),
      image_5: require("../assets/goat.png"),
      image_6: require("../assets/sheep.png"),
      image_7: require("../assets/horse.png"),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.headerContainer}>
          <Image style={styles.headerImage}></Image>
          <Text style={styles.headerText}>
            {" "}
            Select an animal from dropdown menu
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={preview_images[this.state.previewImage]}
            style={{
              width: RFValue(75),
              height: RFValue(75),
              resizeMode: "contain",
            }}
          ></Image>
        </View>

        <View style={styles.fieldsContainer}>
          <DropDownPicker
            items={[
              { label: "Cat", value: "image_1" },
              { label: "Dog", value: "image_2" },
              { label: "Cow", value: "image_3" },
              { label: "Buffalo", value: "image_4" },
              { label: "Goat", value: "image_5" },
              { label: "Sheep", value: "image_6" },
              { label: "Horse", value: "image_7" },
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{
              height: 40,
              marginBottom: this.state.dropdownHeight,
              borderRadius: 0,
            }}
            onOpen={() => {
              this.setState({ dropdownHeight: 150 });
            }}
            onClose={() => {
              this.setState({ dropdownHeight: 0 });
            }}
            style={{ backgroundColor: "transparent" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "white" }}
            labelStyle={{
              color: "black",
              fontSize: RFValue(20),
            }}
            arrowColor={"black"}
            onChangeItem={(item) => {
              this.setState({
                previewImage: item.value,
                selectedItem: item.label,
              });
             
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
             this.props.navigation.navigate("Form",
             {animal:this.state.selectedItem});
            
          }}
        >
          <Text style={{ fontSize: 20 }}>Procced</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4aeaff",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  submitBtn: {
    marginTop: RFValue(50),
    backgroundColor: "white",
    alignItems: "center",
    padding: RFValue(20),
    borderRadius: RFValue(10),
  },
  fieldsContainer: {
    width: RFValue(300),
    backgroundColor: "white",
  },
  imageContainer: {
    borderRadius: RFValue(10),
    marginBottom: RFValue(50),
    backgroundColor: "white",
    borderWidth: RFValue(20),
    borderColor: "white",
  },
  headerText: {
    fontSize: RFValue(20),
    marginTop: RFValue(20),
    marginBottom: RFValue(80),
    justifyContent: "center",
    alignSelf: "center",
  },
});
