import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../Containers/LoadingScreen";
import ConnectScreen from "../Containers/ConnectScreen";
import LoginScreen from "../Containers/LoginScreen";

import { Metrics } from "../Themes"

const PrimaryNav = createStackNavigator()

const { Screen, Navigator } = PrimaryNav

const Screens = () => {
    return ( 
        /* 
        <Navigator headerMode={'none'} initialRouteName={"loading"} >
            <Screen name="loading" component={LoadingScreen}/>
            <Screen name="connect" component={ConnectScreen}/>
        </Navigator> */
        <Navigator headerMode={'none'} style={{width: Metrics.screenWidth, height: Metrics.screenHeight }}>
             <Screen name="Login" component={LoginScreen}/>
        </Navigator>
        
    )
}

const Container = () => {
    return (
        <NavigationContainer>
            <Screens/>
        </NavigationContainer>
    )
}

export default Container
