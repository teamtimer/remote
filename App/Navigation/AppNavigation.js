import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../Containers/LoadingScreen";
import ConnectScreen from "../Containers/ConnectScreen";

const PrimaryNav = createStackNavigator()

const { Screen, Navigator } = PrimaryNav

const Screens = () => {
    return ( 
        <Navigator headerMode={'none'} initialRouteName={"loading"} >
            <Screen name="loading" component={LoadingScreen}/>
            <Screen name="connect" component={ConnectScreen}/>
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
