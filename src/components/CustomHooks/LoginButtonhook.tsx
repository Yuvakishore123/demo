/* eslint-disable no-const-assign */
import {Alert} from 'react-native';
import {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

const LoginButtonhook = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlepress = () => {
    Alert.alert('Login Pressed');
    if (email === 'yuva@gmail.com' && password === 'Kishore') {
      Alert.alert('login success');
      setEmail(email);
      setPassword(password);
      console.log(email, password);
    } else {
      Alert.alert('login failure');
    }
  };
  return {email, handlepress, password, setEmail, setPassword};
};

export default LoginButtonhook;
