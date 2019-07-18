# React-Native Hide Show Password InputText Component

[![npm version](https://badge.fury.io/js/react-native-hide-show-password-input.svg)](https://badge.fury.io/js/react-native-hide-show-password-input)

This is a custom component for React Native, a simple Hide Show Password InputText, compatible with both ios and android.

[![demo](https://i.imgur.com/kZ7ViHt.png)](https://i.imgur.com/kZ7ViHt.png)

# Installation.
Install the package with NPM.

```sh
npm install react-native-hide-show-password-input --save
```

Or with YARN

```sh
yarn add react-native-hide-show-password-input
```

Link vector icons library

```sh
react-native link react-native-vector-icons
```

# How to use.

Very simple to use just add this component in your file.
```js
// import packages
import React, { Component } from 'react';
import { View } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

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
```

## Properties

 name                  | description                                 | type     | default
:--------------------- |:------------------------------------------- | --------:|:------------------
 iconSize              | Eye icon size                               |   Number | 25
 iconColor             | Eye icon color                              |   String | #222222
 label                 | Text Input animate label                    |   String | Password
 getRef                | Reference callback                          | Function | -
 

Note: You can use properties of [react-native-material-textfield](https://github.com/n4kz/react-native-material-textfield) and [TextInput](https://facebook.github.io/react-native/docs/textinput).
