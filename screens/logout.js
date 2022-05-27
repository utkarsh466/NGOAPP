import React from "react";
import {View,StyleSheet,Text} from "react-native";
import firebase from "firebase";


export default class Logout extends React.Component{

    componentDidMount(){
        firebase.auth().signOut()
    }


    render(){
        return(

            <View style={styles.container}>
                <Text>
                    Logout
                </Text>
            </View>

        )
    }


}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})