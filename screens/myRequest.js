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
import firebase from "firebase";

export default class MyRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
    };
  }
  componentDidMount() {
    this.fetchRequest();
  }

  fetchRequest = () => {
    firebase
      .database()
      .ref("/posts/")
      .on("value", (data) => {
        var requests = [];
        if (data.val()) {
          Object.keys(data.val()).forEach(function (key) {
            if (data.val()[key].userId === firebase.auth().currentUser.uid) {
              requests.push(data.val()[key]);
            }
          });

          this.setState({
            requests: requests,
          });
        }
      });
  };

  render() {
    // console.log(this.state.requests);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          {this.state.requests.map((object) => {
            return (
              <View style={styles.posts}>
                <Text style={styles.postText}>{object.MOBILE_NUMBER}</Text>
                <Text style={styles.postText}>{object.ADDRESS}</Text>
                <Text style={styles.postText}>{object.DESCRIPTION}</Text>
                
              </View>
            )
          })}
        </ScrollView>
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
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  posts:{
    width:RFValue(280),
    height:RFValue(100),
    backgroundColor:"#4aeaff",
    borderRadius:RFValue(18),
    alignItems:"center",
    marginBottom:RFValue(30)
  },
  postText:{
    fontSize: RFValue(20)
  }
});
