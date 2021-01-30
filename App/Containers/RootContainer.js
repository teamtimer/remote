import React, { Component } from 'react'
import { Text, View, StatusBar, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigation from "../Navigation/AppNavigation"

import ConfigActions from '../Redux/ConfigRedux'

class RootContainer extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <StatusBar barStyle={'default'} />
                <Navigation />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    config: state.config
})

const mapDispatchToProps = (dispatch) => ({
    setBarstyle: (data) => dispatch(ConfigActions.configSetBarstyle(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)