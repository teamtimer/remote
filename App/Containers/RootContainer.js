import React, { Component } from 'react'
import { Text, View, StatusBar, Button, Alert, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Navigation from "../Navigation/AppNavigation"

import ApplicationStyles from '../Themes/ApplicationStyles'
import Metrics from '../Themes/Metrics'

import ConfigActions from '../Redux/ConfigRedux'

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    statusBar: {
      marginBottom: Metrics.navBarHeight
    }
})


class RootContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBar} barStyle={'default'} />
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