import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/dashboard";
import Form from "../screens/form";
import Login from "../screens/login";
import PickImage from "../screens/picker";
import React from "react";

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  render() {
    var props = this.props;
    return (
      <Stack.Navigator       
      screenOptions={{headerShown:false}}
        labeled={false}
      >
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Picker" component={PickImage} />
      </Stack.Navigator>
    );
  }
}
