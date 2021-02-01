import React, { Component } from "react";
import { Text, View, Image,TouchableOpacity } from "react-native"

import { Images } from "../../Themes"
import HeaderComponent from "../../Components/HeaderComponent"

import styles from "./Styles/ConnectScreenStyle"

class ConnectScreen extends Component
{
    render(){
        return(
            <View>
                <View style={styles.mainContainer}>
                    <HeaderComponent title={'Connect'}/>
                    <View style={styles.middleContainer}>
                        <Image style={styles.logo} source={Images.plusIcon} resizeMode={"contain"}/>
                        <Text style={styles.text}>Add server</Text>   
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.settingsButton}>
                             <Image style={styles.gearIcon} source={Images.claritySettingsSolid} />
                        </TouchableOpacity>
                        
                    </View>
            </View>
            </View>
        );
    }
}

export default ConnectScreen