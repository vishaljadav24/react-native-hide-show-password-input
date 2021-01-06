// import packages
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

export const App = () => {
  const [password, setPassword] = useState('');
  let inputRef = null;

  return (
    <View style={{margin: 20}}>
      <PasswordInputText
        getRef={(input) => (inputRef = input)}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        title="Clear"
        onPress={() => {
          if (inputRef) inputRef.clear();
        }}
      />
    </View>
  );
};

export default App;
