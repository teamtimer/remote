import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../Containers/LoadingScreen";

const Stack = createStackNavigator()
const { Screen, Navigator } = Stack

const Screens = () => {
    return ( 
        <Navigator>
            <Screen name="Loading" component={LoadingScreen}/>
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

export default Container;
