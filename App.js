import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigations/drawer";
import { firebaseConfig } from "./config";
import firebase from "firebase";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import Login from './screens/login'
import NgoLogin from "./screens/ngoLogin";
//Instead of drawer navigator show switch navigator
import NgoDashboard from "./screens/ngodashboard";
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app();
}
const AppNavigator=createSwitchNavigator({
  Login:Login,
  NgoLogin:NgoLogin,
  NgoDashboard:NgoDashboard,
  UserDashboard:DrawerNavigator
})
const AppContainer=createAppContainer(AppNavigator)
export default function App() {
  return (
   <AppContainer/>
  );
}
