import {View, Text, TextInput} from 'react-native';
import React from 'react';
import LoginButtonhook from '../../CustomHooks/LoginButtonhook';
import styles from './Styles';

const LoginButtonComponent = () => {
  const {handlepress, email, password, setEmail, setPassword} =
    LoginButtonhook();
  return (
    <View style={styles.mainContainer}>
      <Text>Enter email</Text>
      <View style={styles.textInput}>
        <TextInput value={email} onChangeText={setEmail} />
      </View>
      <Text>Enter password</Text>
      <View style={styles.textInput}>
        <TextInput value={password} onChangeText={setPassword} />
      </View>
      <Text style={styles.ButtonText} onPress={handlepress}>
        Login
      </Text>
    </View>
  );
};

export default LoginButtonComponent;
