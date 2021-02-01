import React, { Component } from "react";
import { Text, View, Image,TouchableOpacity, TextInput } from "react-native"

import { Images } from "../../Themes"
import HeaderComponent from "../../Components/HeaderComponent"

import styles from "./Styles/LoginScreenStyle"

class LoginScreen extends Component
{

    state = {
        username: null,
        password: null,
    }
    
    render(){
        return(
            <View style={styles.mainContainer}>
                    <HeaderComponent title={'Login'}/>
                    <TextInput style={{width: 100, height: 30, backgroundColor: '#ffffff'}} placeholder={"username"} />
            </View>
            
        );
    }
}

export default LoginScreen