import {useFormik} from 'formik';
import * as Yup from 'yup';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import {SignUp} from '../../redux/actions/actions';
import {useNavigation} from '@react-navigation/native';
import Styles from './Signupstyle';
import {useState} from 'react';
import {Formik} from 'formik';
import {Alert} from 'react-native';
import axios from 'axios';
import {SignupAndLogin} from '../../redux/actions';
import {ScrollView} from 'react-native-gesture-handler';
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
export default function SignUpScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const handleSignupfun = async () => {
    try {
      const response = await axios.post(
        'http://7434-103-186-40-206.ngrok.io/api/user/save',
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        },
      );
      Alert.alert('Signup Successful!');
      console.log(response.data);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup Error!', error.message);
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: handleSignupfun,
  });
  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    formik.setFieldValue('firstName', value);
  };
  const handlephoneNumber = (value: string) => {
    setphoneNumber(value);
    formik.setFieldValue('phoneNumber', value);
  };
  const handleLastNameChange = (value: string) => {
    setLastName(value);
    formik.setFieldValue('lastName', value);
  };
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
    <ScrollView>
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <View style={Styles.titleTextContainer}>
            <Text style={Styles.titleText}>Sign Up</Text>
            <Image
              style={Styles.image}
              source={require('../../../Assets/SignupImage.png')}
            />
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.cardText}>First Name</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                placeholder="Enter First Name"
                placeholderTextColor={'#3E54AC'}
                value={firstName}
                autoCapitalize="words"
                onChangeText={handleFirstNameChange}
                onBlur={() => handleBlur('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Text style={Styles.errorText}>{formik.errors.firstName}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Last Name</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                placeholder="Enter Last Name"
                placeholderTextColor={'#3E54AC'}
                value={lastName}
                autoCapitalize="words"
                onChangeText={handleLastNameChange}
                onBlur={() => handleBlur('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Text style={Styles.errorText}>{formik.errors.lastName}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Email</Text>
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
                <Text style={Styles.errorText}>{formik.errors.email}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Phone Number</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                placeholder="Enter Phone number"
                placeholderTextColor={'#3E54AC'}
                value={phoneNumber}
                // secureTextEntry={true}
                onChangeText={handlephoneNumber}
                onBlur={() => handleBlur('phoneNumber')}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Text style={Styles.errorText}>
                  {formik.errors.phoneNumber}
                </Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Password</Text>
            </View>
            <View>
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
                <Text style={Styles.errorText}>{formik.errors.password}</Text>
              )}
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSignupfun}
              style={Styles.touchablebtn}>
              <Text style={Styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={Styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.signupButton}> Sign in</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={Styles.signupTextCont}> */}
          {/* </View> */}
        </View>
      </View>
    </ScrollView>
  );
}
