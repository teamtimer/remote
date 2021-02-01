import React, { Component } from "react";
import { Text, View, Image } from "react-native"
import AppConfig from "../../Config/AppConfig"
import { Images } from "../../Themes"

import styles from "./Styles/LoadingScreenStyle"

class LoadingScreen extends Component
{
    state = {
        showMessage: false,
        message: 'connecting to main server',
        disabled: false,
    }

    componentDidUpdate(){
        if(this.state.showMessage && !this.state.disabled){
            setTimeout(()=>{
                this.props.navigation.navigate('connect')
                this.setState({disabled: true})
            }, AppConfig.enableTestingDelays ? AppConfig.loadingNavDelay : 0)
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ showMessage: true })
        }, AppConfig.enableTestingDelays ? AppConfig.messageDelay : 0)
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={Images.logoLight} resizeMode={"contain"}/>
                <Image style={styles.logo} source={Images.remoteLight} resizeMode={"contain"}/>
                <Text style={styles.text}>{this.state.showMessage ? this.state.message : null}</Text>
            </View>
        );
    }
}

export default LoadingScreen
