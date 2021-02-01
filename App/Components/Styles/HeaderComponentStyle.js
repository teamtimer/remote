import React from "react"
import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        //backgroundColor: "#1D1D1D",
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: "#ffffff",
        borderBottomWidth: 2,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 32,
        color: '#ffffff'
    }
})

export default style