import React, {Component} from 'react';
import {View} from 'react-native';
import PasswordInputText from "./passwordInput";

export default class App extends Component {
    render() {
        return (
            <View style={{margin: 20}}>
                <PasswordInputText/>

                <PasswordInputText
                    error="password error"/>
            </View>
        );
    }
}


