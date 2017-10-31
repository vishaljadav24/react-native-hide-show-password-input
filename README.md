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
yarn install react-native-hide-show-password-input
```

# How to use.

Very simple to use just add this component in your file.
```js
// import packages
import React, { Component } from 'react';
import { View } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';


// use in your class
export default class App extends Component {
    state = {
        password: '',
    };

    render() {
        return (
            <View style={{margin: 20}}>
                <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                />
            </View>
        );
    }
}
```
