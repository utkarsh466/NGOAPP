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



export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      address: "",
      description: "",
      image: "",
      
    };
  }
  

  uploadDetails = () =>{
    
    
   
    if(
      this.state.mobileNumber&&
      this.state.address&&
      this.state.description
    ){
      var Details ={
        MOBILE_NUMBER:this.state.mobileNumber,
        ADDRESS:this.state.address,
        DESCRIPTION:this.state.description,
        userId:firebase.auth().currentUser.uid
      }

      firebase
      .database()
      .ref("/posts/"+Math.random().toString(36).slice(2))
      .set(Details)
      .then(function snapshot(){})
      ToastAndroid.show("Form Submitted!",ToastAndroid.SHORT)
        this.props.navigation.navigate("Home")
      

      


    }
    else{
      alert("Please enter all details")
    }
    


  }


  render() {
   
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={{ marginTop: 50 }}>
          <Text>{'Animal Name :'+this.props.route.params.animal}</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Mobile Number"}
            onChangeText={(text) => {
              this.setState({
                mobileNumber: text,
              });
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"Address"}
            onChangeText={(text) => {
              this.setState({
                address: text,
              });
            }}
          />
          <TextInput
            style={[styles.inputStyle, { height: RFValue(150) }]}
            multiline={true}
            placeholder={"Injury Description"}
            onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
          />
        </View>
        <View style={styles.imgBtnContainer}>
          <TouchableOpacity style={styles.imgBtn}
          onPress={()=>
        this.props.navigation.navigate('Picker')}
          >
            <Text style={{fontSize: RFValue(20)}}>Upload Image</Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.submitBtnContainer}>
          <TouchableOpacity style={styles.submitBtn}
          onPress={this.uploadDetails}
          >
            <Text style={{ fontSize: RFValue(30) }}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  },
  inputStyle: {
    borderWidth: 3,
    borderColor: "black",
    margin: 10,
    width: RFValue(250),
    borderRadius: RFValue(10),
  },
  submitBtn: {
    height: RFValue(50),
    width: RFValue(150),
    // alignSelf:"center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: RFValue(10),
  },
  imgBtn:{
    height:RFValue(30),
    width:RFValue(150),
    alignItems: "center",
    alignContent: "center",
    borderWidth:1,
    backgroundColor:'white',
    borderRadius:RFValue(10),
    margin:30
  }
});
