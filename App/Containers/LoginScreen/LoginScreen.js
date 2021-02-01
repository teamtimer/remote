import React, { Component } from "react";
import { Text, View, Image,TouchableOpacity, TextInput } from "react-native"
import { connect } from 'react-redux'

import { Images } from "../../Themes"
import HeaderComponent from "../../Components/HeaderComponent"
import UserActions from "../../Redux/UserRedux"

import styles from "./Styles/LoginScreenStyle"

class LoginScreen extends Component
{

    state = {
        username: null,
        password: null,
    }

    handleSubmit()
    {
        console.tron.log('submitting')
        this.props.loginUser({
            username: this.state.username,
            password: this.state.password
        })
    }

    componentDidUpdate()
    {
        console.tron.log(this.props.user)
    }

    componentDidMount()
    {
        console.tron.log('user', this.props.user)
    }
    
    render(){
        return(
            <View style={styles.mainContainer}>
                    <HeaderComponent title={'Login'}/>
                    <View style={styles.contentContainer}>
                        <TextInput onChangeText={(text) => this.setState({username: text}) } style={styles.textInput} placeholder={"username"} />
                        <TextInput onChangeText={(text) => this.setState({password: text}) } secureTextEntry={true} style={styles.textInput} placeholder={"********"} />
                        <TouchableOpacity onPress={() => this.handleSubmit()} style={styles.submitButton}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
                    </View>
                    
            </View>
            
        );
    }
}

const mapStateToProps = (state) => ({
    config: state.config,
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(UserActions.userRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)