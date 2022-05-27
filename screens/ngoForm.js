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
    Alert
  } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";
  
  
  
export default class NgoForm extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            animal_name:'a',
            user_name:'b',
            problems:'c',
            description:'d',
            address:'e',
            number:'f',
            animal_image:'',
            is_complete:false,
        }

    }

    render() {
        return(

            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>

                    <View style={styles.animalNameContainer}><Text>{this.state.animal_name}</Text></View>
                    <View style={styles.userNameContainer}><Text>{this.state.user_name}</Text></View>
                    <View style={styles.problemContainer}><Text>{this.state.problem}</Text></View>
                    <View style={styles.descriptionContainer}><Text>{this.state.description}</Text></View>
                    <View style={styles.addressContainer}><Text>{this.state.address}</Text></View>
                    <View style={styles.numberContainer}><Text>{this.state.number}</Text></View>
                    <View style={styles.imageContainer}>

                        {/* <Image source={{uri:this.state.animal_image}}></Image> */}
                        <Image source={require("../assets/cat.png")}></Image>
                    </View>
                    <View style={styles.markBtnContainer}><TouchableOpacity style={styles.markBtn}>
                        <Text style={{fontSize:RFValue(24)}}>Mark as complete</Text>
                        </TouchableOpacity></View>

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
    markBtn:{
        width:RFValue(150),
        height:RFValue(40),
        backgroundColor:"white",
        borderRadius: RFValue(10),
    }
  });