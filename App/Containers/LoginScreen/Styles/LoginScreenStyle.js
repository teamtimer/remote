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
        justifyContent: 'flex-start'
    },
    contentContainer:{
        padding: 20,
        width: Metrics.screenWidth,
        justifyContent: 'flex-start'
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
    textInput:{
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        width: '100%',
        marginTop: 30,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
    },
    submitButton: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB0069',
        padding: 8,
        borderRadius: 20,
        width: 100
    }
})