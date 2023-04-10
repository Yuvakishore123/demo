import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Stylesheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import {Login} from '../../redux/actions/actions';
import SignupScreen from '../Signup/Signup';
import {useNavigation} from '@react-navigation/native';
import Styles from './LoginStyle';
import styles from '../Signup/Signupstyle';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8)
    .required('Please enter password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain * characters and uppercase letters',
    ),
});

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(Login(email, password));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });

  const handleEmailChange = (value: string) => {
    setEmail(value);
    formik.setFieldValue('email', value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    formik.setFieldValue('password', value);
  };

  const handleBlur = (field: string) => {
    formik.setFieldTouched(field);
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        <View style={Styles.titleTextContainer}>
          <Text style={Styles.titleText}>Login</Text>
          <Image
            style={Styles.image}
            source={require('../../../Assets/Login.png')}
          />
        </View>
        <View style={Styles.card}>
          <View>
            <Text style={Styles.cardText}> Email </Text>
          </View>
          <View>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter Email"
              placeholderTextColor={'#3E54AC'}
              value={email}
              autoCapitalize="none"
              onChangeText={handleEmailChange}
              onBlur={() => handleBlur('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <Text style={Styles.errorText}>{formik.errors.email} </Text>
            )}
          </View>
          <View>
            <Text style={Styles.cardText}>Password</Text>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter password"
              placeholderTextColor={'#3E54AC'}
              value={password}
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              onBlur={() => handleBlur('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <Text style={Styles.errorText}>{formik.errors.password} </Text>
            )}
          </View>
          {passwordError.length > 0 && <Text>{passwordError}</Text>}
        </View>
        <View style={Styles.touchablebtnContainer}>
          <TouchableOpacity
            style={Styles.touchablebtn}
            onPress={formik.handleSubmit}>
            <Text style={Styles.touchableText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.sign}>
          <Text style={Styles.signuptext}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={Styles.signuptext}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
