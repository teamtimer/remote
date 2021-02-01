import React, { Component } from "react"
import { View, Text, Image } from "react-native"

import { Images } from '../Themes'
import styles from "./Styles/HeaderComponentStyle"

class HeaderComponent extends Component
{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title ? this.props.title : 'Missing title'}</Text>
                <Image style={styles.logo} source={Images.logoLight}/>
            </View>
        )
    }
}

export default HeaderComponent