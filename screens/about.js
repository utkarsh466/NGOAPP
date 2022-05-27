import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <Text style={styles.heading}>
          About us
        </Text>
        <Text style={styles.title}>
        Animal Ngo
        </Text>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
        </Text>
        <Text style={styles.title}>
        lauebionai
        </Text>
        <Text style={styles.contentText}>
          lorem ipsum dolor sit amet, consectetur
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet
          lorem ipsum dolor sit amet, consectet

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4aeaff",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  heading:{
    fontSize: RFValue(30),
    marginRight:200,
    marginBottom:30
  },
  title:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginRight:230,
    marginBottom:30

  },
  contentText:{
    fontSize: RFValue(13),
    marginBottom:30

  }
});
