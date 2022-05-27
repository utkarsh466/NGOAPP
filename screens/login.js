import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import NgoLogin from "./ngoLogin";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.props.navigation.navigate("UserDashboard")
      }
      else{
        this.props.navigation.navigate("Login")
      }
    })

  }



  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  
                })
                .then(function (snapshot) {});
            }
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        androidClientId:
          "907347948751-brbk50r9uhplm4p3rjvd48hkocukooo2.apps.googleusercontent.com",

        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e.message);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.signInWithGoogleAsync()}
        >
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ngoBtn}>
          <Text
            style={{
              fontSize: RFValue(18),
            }}
            onPress={() => {
              this.props.navigation.navigate("NgoLogin");
            }}
          >
            NGO
          </Text>
        </TouchableOpacity>
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
  loginBtn: {
    backgroundColor: "white",
    width: 200,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: RFValue(10),
  },
  ngoBtn: {
    backgroundColor: "#4aeaff",
    marginTop: RFValue(600),
    marginLeft: RFValue(290),
  },
});
