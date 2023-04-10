import {Alert} from 'react-native';
import SignupScreen from './Signup';
import LoginScreen from '../Login/LoginScreen';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();
export const onhandleSignup = () => {
  navigation.navigate('LoginScreen');
  Alert.alert('Successfly Registered');
};
export const handleLogin = () => {
  navigation.navigate('LoginScreen');
};
export const handleSign = () => {
  navigation.navigate('SignupScreen');
};
