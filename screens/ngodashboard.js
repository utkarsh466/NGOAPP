import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import React from "react";
import firebase from "firebase";

export default class NgoDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stories: [],
    }
  }
    render() {
      return(
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

            <View style={styles.posts}>
              <Text style={styles.postText}>This is a post</Text>
            </View>

        </View>
      )
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
  posts: {
    width: RFValue(280),
    height: RFValue(100),
    backgroundColor: "white",
    borderRadius: RFValue(18),
    alignContent:"center",
    marginBottom: RFValue(30),
  },
  postText: {
    fontSize: RFValue(20),
    alignContent:"center",
    marginLeft: RFValue(10),
    marginTop: RFValue(10)
  },
});
