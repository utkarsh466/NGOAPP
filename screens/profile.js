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
  TextInput,
  ToastAndroid,
  Alert,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_image: "",
      name: "",
      mail: "",
    };
  }
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser=async ()=>{
    var name,image,mail;

    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    .on("value",(data)=>{
         image=data.val().profile_picture,
         name=`${data.val().first_name} ${data.val().last_name}`,
         mail=data.val().gmail
         this.setState({
          name:name,
          profile_image:image,
          mail:mail
      })
    })

    

  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: this.state.profile_image }}
            //  source={require("../assets/cat.png")}
          ></Image>
        </View>
        <Text style={styles.nameText}>{this.state.name}</Text>
        <Text style={styles.mailText}>{this.state.mail}</Text>
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
  },profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
  },
  nameText: {
    color: "black",
    fontSize: RFValue(40),
    marginTop: RFValue(10),
  },
  mailText: {
    color: "black",
    fontSize: RFValue(20),
    marginTop: RFValue(10),
  },
});
