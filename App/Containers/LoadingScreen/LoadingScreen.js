import React, { Component } from "react";
import { Text, View, Image } from "react-native"

import { Images } from "../../Themes"

import styles from "./Styles/LoadingScreenStyle"

class LoadingScreen extends Component
{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={Images.logoLight} resizeMode={"contain"}/>
                <Image style={styles.logo} source={Images.remoteLight} resizeMode={"contain"}/>
                <Text style={styles.text}>connecting to main server</Text>
            </View>
        );
    }
}

export default LoadingScreen
