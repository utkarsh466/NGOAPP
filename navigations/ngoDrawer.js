import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomSideBarMenu from "./customSideBar";
import StackNavigator from "./stackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NgoLogout from "../screens/Logout";
import NgoDashboard from "../screens/Dashboard";
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
          

          <Drawer.Screen name="Dashboard" component={NgoDashboard} />

          <Drawer.Screen name="Logout" component={Logout} />
          

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
