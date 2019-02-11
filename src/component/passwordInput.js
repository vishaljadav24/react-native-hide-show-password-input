import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PasswordInputText extends React.PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)
    };

    render() {
        const { 
            state: { icEye, password }, 
            props: { containerStyle, labelStyle, label, iconStyle, iconSize, iconColor, underlineWidth, underlineActiveWidth, inputColor, textColor } 
        } = this;

        return (
            <View style={[styles.container, containerStyle && containerStyle]}>
                <TextField 
                    {...this.props}
                    style={labelStyle && labelStyle}
                    secureTextEntry={password}
                    label={label}
                    lineWidth={underlineWidth}
                    activeLineWidth={underlineActiveWidth}
                    tintColor={inputColor}
                    textColor={textColor}
                />
                <Icon 
                    style={[styles.icon, iconStyle && iconStyle]}
                    name={icEye}
                    size={iconSize}
                    color={iconColor}
                    onPress={this.changePwdType}
                />
            </View>
        );
    }
}


export const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 33,
        right: 0
    }, 
    container: {
        width: '100%'
    }
});

PasswordInputText.defaultProps = {
    iconSize: 25,
    label: "Password",
    underlineWidth: 1,
    underlineActiveWidth: 2,
    inputColor: "rgb(0, 145, 234)",
    textColor: "rgb(0, 145, 234)"
}

