import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
    TextInput,
    SafeAreaView
  } from "react-native";
  import React from "react";
  import { RFValue } from "react-native-responsive-fontsize";
  import firebase from "firebase";
  export default class NgoLogin extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mail:"",
            pass:"",
        }
    }

    login=async() =>{
        var mail = this.state.mail;
        var pass = this.state.pass;

        if(mail && pass){

            try{
                const response=await firebase.auth().signInWithEmailAndPassword(mail,pass)

                if(response){
                    this.props.navigation.navigate("NgoDashboard");
                }
            }
            catch(error){

                switch(error.code){

                    case 'auth/user-not-found':
                        alert('User not found')
                        break;
                    case 'auth/invalid-email':
                        alert('Email not found');
                        break;
                }

            }

        }
        else{
            alert("Enter email and password!")
        }

    }

    render() {
      return (
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.mailContainer}>
                <TextInput style={styles.mail}
                placeholder={"Mail"}
                onChangeText={(text) => {
                    this.setState({
                        mail:text
                    })
                }}
                >

                </TextInput>
                <TextInput style={styles.mail}
                placeholder={"Password"}
                onChangeText={(text) => {
                    this.setState({
                        pass:text
                    })
                }}
                >
                    
                </TextInput>
            </View>
            <View style={styles.loginBtnConainer}>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={this.login}
                >
                    <Text style={{margin:5,fontSize:RFValue(20)}}>Log In</Text>
                </TouchableOpacity>
            </View>
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
    mail:{
        borderWidth:RFValue(1),
        borderRadius:RFValue(10),
        width:250,
        height:50,
        textAlign:"center",
        margin:RFValue(25)
    },
    loginBtn:{
        backgroundColor:"white",
        fontSize:RFValue(40),
        borderWidth:RFValue(1),
        borderRadius:RFValue(10),
        width:RFValue(100),        
        height:RFValue(50),
        alignItems: "center",
        
    }
    
  });
  