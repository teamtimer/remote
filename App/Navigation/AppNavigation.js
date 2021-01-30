import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../Containers/LoadingScreen";

const PrimaryNav = createStackNavigator()

const { Screen, Navigator } = PrimaryNav

const Screens = () => {
    return ( 
        <Navigator headerMode={'none'}>
            <Screen name="loading" component={LoadingScreen}/>
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
