import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PasswordInputText from "react-native-hide-show-password-input";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }


  render() {

    const { password } = this.state;

    return (
      <View style={{ margin: 20 }}>

        <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          title="Clear"
          onPress={() => this.input.clear()} />
          
      </View>
    );
  }
}


