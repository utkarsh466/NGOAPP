import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/profile";
import About from "../screens/about";
import Dashboard from "../screens/dashboard";
import Logout from "../screens/logout";
import MyRequest from "../screens/myRequest";
import React from "react";
import CustomSideBarMenu from "./customSideBar";
import StackNavigator from "./stackNavigator";

import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends React.Component {
  render() {
    var props = this.props;
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomSideBarMenu {...props} />}
          screenOptions={{
            headerTitle: "",
            headerStyle: { height: 80, alignSelf: "center" },
          }}
          labeled={false}
        >
          <Drawer.Screen name="Home" component={StackNavigator} />
          <Drawer.Screen name="Profile" component={Profile} />

          <Drawer.Screen name="Request" component={MyRequest} />

          <Drawer.Screen name="About" component={About} />

          <Drawer.Screen
            name="Logout"
            component={Logout}
            style={{ marginTop: 1000 }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
