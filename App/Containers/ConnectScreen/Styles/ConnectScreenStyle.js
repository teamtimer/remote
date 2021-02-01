import {StyleSheet} from 'react-native'
import {Metrics} from "../../../Themes"

export default StyleSheet.create({
    mainContainer:{
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
    title:{
      color: "#ffffff",
      fontSize: 36,  
      textAlign: "left",
      alignSelf: 'stretch',
    },
    text:{
        color: "#ffffff",
    },
    middleContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    gearIcon:{
        width: 50,
        height: 50,
    },
    bottomContainer:{
        flexDirection: "row-reverse",
        width: "100%",

    },
    settingsButton:{
        backgroundColor: "#ffffff",
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
})