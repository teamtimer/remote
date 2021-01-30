import {StyleSheet} from 'react-native'
import {Metrics} from "../../../Themes"

export default StyleSheet.create({
    container:{
        padding: 20,
        width: Metrics.screenWidth,
        height: Metrics.screenHeight,
        backgroundColor: "#1D1D1D",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        width: 100,
        height: 100,
    },
    text:{
        color: "#ffffff",
    }
})