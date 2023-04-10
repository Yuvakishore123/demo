/* eslint-disable react/react-in-jsx-scope */
// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   Alert,
//   Image,
// } from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import styles from './Signupstyle';
// import LoginScreen from '../Login/LoginScreen';
// import axios from 'axios';
// import {useDispatch} from 'react-redux';
// import {SignupAndLogin} from '../../redux/actions/actions';
// import {useNavigation} from '@react-navigation/native';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too short!')
//     .max(50, 'Too long!')
//     .required('Please enter your first Name'),
//   lastName: Yup.string()
//     .min(2, 'Too short!')
//     .max(50, 'Too long!')
//     .required('Please enter your last Name'),
//   email: Yup.string()
//     .email('Invalid eamil')
//     .required('please enter your email address'),
//   password: Yup.string()
//     .min(8)
//     .required('plesae enter your password')
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       'Must contain minimum 8 characters,at least one uppercase letter',
//     ),
// });

// const SignupScreen = () => {
//   const [phoneNumber, setphoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [firstName, setfirstName] = useState('');
//   const [lastName, setlastName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(
//         'http://596d-106-51-70-135.ngrok.io/user/signup',
//         {
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//           password,
//         },
//       );
//       Alert.alert('Signup Successful!');
//       console.log(response.data);
//       navigation.navigate('LoginScreen');
//     } catch (error) {
//       Alert.alert('Signup Error!', error.message);
//       console.log(error);
//     }
//   };
//   const onhandleLogin = () => {
//     navigation.navigate('LoginScreen');
//   };
//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={SignupSchema}>
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         setFieldTouched,
//         isValid,
//         handleSubmit,
//       }) => (
//         <View style={styles.mainContainer}>
//           <View style={styles.container}>
//             <View style={styles.titleTextContainer}>
//               <Text style={styles.titleText}>SignUp</Text>
//               <Image
//                 style={styles.image}
//                 source={require('../../../Assets/Signup.png')}
//               />
//             </View>
//             <View style={styles.card}>
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <Text style={styles.cardText}>First Name</Text>
//                 <Text style={styles.cardText1}>Last Name</Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   marginTop: 10,
//                   gap: 30,
//                 }}>
//                 <TextInput
//                   style={styles.textfirst}
//                   placeholder=" "
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.firstName}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('firstName')}
//                   onBlur={() => setFieldTouched('firstName')}
//                   // onChangeText={text => setEmail(text)}
//                 />
//                 {touched.firstName && errors.firstName && (
//                   <Text style={styles.errorTxt}>{errors.firstName}</Text>
//                 )}
//                 <TextInput
//                   style={styles.textfirst}
//                   placeholder=" "
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.lastName}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('lastName')}
//                   onBlur={() => setFieldTouched('lastName')}
//                 />
//               </View>
//               {/* {touched.lastName && errors.lastName && (
//                 <Text style={styles.errorTxt}>{errors.lastName}</Text>
//               )} */}
//               {/* {PhoneNumbererror.length > 0 && (
//               <Text style={{marginTop: 5, color: 'red'}}>{PhoneNumbererror}</Text>
//             )} */}
//               <View>
//                 <Text style={styles.cardText}>Email </Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Enter Email"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.email}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('email')}
//                   onBlur={() => setFieldTouched('email')}
//                 />
//                  {touched.email && errors.email && (
//                 <Text style={styles.errorTxt}>{errors.email}</Text>
//               )}
//               </View>
//               </View>

//               <View>
//                 <Text style={styles.cardText}>Password</Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Enter password"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.password}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('password')}
//                   onBlur={() => setFieldTouched('password')}
//                 />
//               </View>
//               <View>
//                 <Text style={styles.cardText}> Phone Number</Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Phonenumber"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.phoneNumber}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('phoneNumber')}
//                   onBlur={() => setFieldTouched('phoneNumber')}
//                 />
//               </View>
//               {/* onPress={submit} */}
//             </View>
//             <TouchableOpacity style={styles.touchablebtn}>
//               <Text style={styles.subTitileText} onPress={handleSubmit}>
//                 SignUp
//               </Text>
//             </TouchableOpacity>
//             <View style={styles.Logintext}>
//               <Text style={styles.dontText}>
//                 Already have Account ?
//                 <Text style={styles.sign} onPress={onhandleLogin}>
//                   {' '}
//                   Login
//                 </Text>
//               </Text>
//             </View>
//           </View>
//         </View>
//       )}
//     </Formik>
// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   Alert,
//   Image,
// } from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import styles from './Signupstyle';
// import LoginScreen from '../Login/LoginScreen';
// import axios from 'axios';
// import {useDispatch} from 'react-redux';
// import {SignupAndLogin} from '../../redux/actions/actions';
// import {useNavigation} from '@react-navigation/native';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too short!')
//     .max(50, 'Too long!')
//     .required('Please enter your first Name'),
//   lastName: Yup.string()
//     .min(2, 'Too short!')
//     .max(50, 'Too long!')
//     .required('Please enter your last Name'),
//   email: Yup.string()
//     .email('Invalid eamil')
//     .required('please enter your email address'),
//   password: Yup.string()
//     .min(8)
//     .required('plesae enter your password')
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       'Must contain minimum 8 characters,at least one uppercase letter',
//     ),
// });

// const SignupScreen = () => {
//   const [phoneNumber, setphoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [firstName, setfirstName] = useState('');
//   const [lastName, setlastName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(
//         'http://596d-106-51-70-135.ngrok.io/user/signup',
//         {
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//           password,
//         },
//       );
//       Alert.alert('Signup Successful!');
//       console.log(response.data);
//       navigation.navigate('LoginScreen');
//     } catch (error) {
//       Alert.alert('Signup Error!', error.message);
//       console.log(error);
//     }
//   };
//   const onhandleLogin = () => {
//     navigation.navigate('LoginScreen');
//   };
//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={SignupSchema}>
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         setFieldTouched,
//         isValid,
//         handleSubmit,
//       }) => (
//         <View style={styles.mainContainer}>
//           <View style={styles.container}>
//             <View style={styles.titleTextContainer}>
//               <Text style={styles.titleText}>SignUp</Text>
//               {/* <Image
//                 style={styles.image}
//                 source={require('../../../Assets/Signup.png')}
//               /> */}
//             </View>
//             <View style={styles.card}>
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <Text style={styles.cardText}>First Name</Text>
//                 <Text style={styles.cardText1}>Last Name</Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   marginTop: 10,
//                   gap: 30,
//                 }}>
//                 <TextInput
//                   style={styles.textfirst}
//                   placeholder=" "
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.firstName}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('firstName')}
//                   onBlur={() => setFieldTouched('firstName')}
//                   // onChangeText={text => setEmail(text)}
//                 />
//                 {touched.firstName && errors.firstName && (
//                   <Text style={styles.errorTxt}>{errors.firstName}</Text>
//                 )}
//                 <TextInput
//                   style={styles.textfirst}
//                   placeholder=" "
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.lastName}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('lastName')}
//                   onBlur={() => setFieldTouched('lastName')}
//                 />
//               </View>
//               {/* {touched.lastName && errors.lastName && (
//                 <Text style={styles.errorTxt}>{errors.lastName}</Text>
//               )} */}
//               {/* {PhoneNumbererror.length > 0 && (
//               <Text style={{marginTop: 5, color: 'red'}}>{PhoneNumbererror}</Text>
//             )} */}
//               <View>
//                 <Text style={styles.cardText}>Email </Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Enter Email"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.email}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('email')}
//                   onBlur={() => setFieldTouched('email')}
//                 />
//                  {touched.email && errors.email && (
//                 <Text style={styles.errorTxt}>{errors.email}</Text>
//               )}
//               </View>
//               </View>

//               <View>
//                 <Text style={styles.cardText}>Password</Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Enter password"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.password}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('password')}
//                   onBlur={() => setFieldTouched('password')}
//                 />
//               </View>
//               <View>
//                 <Text style={styles.cardText}> Phone Number</Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Phonenumber"
//                   placeholderTextColor={'#3E54AC'}
//                   value={values.phoneNumber}
//                   // onChangeText={text => setEmail(text)}
//                   onChangeText={handleChange('phoneNumber')}
//                   onBlur={() => setFieldTouched('phoneNumber')}
//                 />
//               </View>
//               {/* onPress={submit} */}
//             </View>
//             <TouchableOpacity style={styles.touchablebtn}>
//               <Text style={styles.subTitileText} onPress={handleSubmit}>
//                 SignUp
//               </Text>
//             </TouchableOpacity>
//             <View style={styles.Logintext}>
//               <Text style={styles.dontText}>
//                 Already have Account ?
//                 <Text style={styles.sign} onPress={onhandleLogin}>
//                   {' '}
//                   Login
//                 </Text>
//               </Text>
//             </View>
//           </View>
//         </View>
//       )}
//     </Formik>

//     // <View style={Signstyles.mainContainer}>
//     //   <View style={Signstyles.container}>
//     //     <View style={Signstyles.titleTextContainer}>
//     //       <Text style={Signstyles.titleText}>Sign up</Text>
//     //     </View>
//     //     <View style={Signstyles.card}>
//     //       <View style={Signstyles.firstText}>
//     //         <Text style={Signstyles.cardText}>FirstName</Text>
//     //         <TextInput
//     //           style={Signstyles.textinput}
//     //           placeholder="firstname" )}
//     //           value={firstName}
//     //           onChangeText={setfirstName}
//     //         />
//     //         <Text style={Signstyles.cardText}>LastName</Text>
//     //         <TextInput
//     //           style={Signstyles.textinput}
//     //           placeholder="lastname"
//     //           value={lastName}
//     //           onChangeText={setlastName}
//     //         />
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Email</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Email"
//     //             value={email}
//     //             onChangeText={setEmail}
//     //           />
//     //         </View>
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Phone Number</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Ph No"
//     //             value={phoneNumber}
//     //             onChangeText={setphoneNumber}
//     //           />
//     //         </View>
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Password</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Password"
//     //             secureTextEntry
//     //             value={password}
//     //             onChangeText={setPassword}
//     //           />
//     //         </View>
//     //         <View>
//     //           <TouchableOpacity
//     //             onPress={handleSubmit}
//     //             style={Signstyles.touchablebtn}>
//     //             <Text style={Signstyles.subTitileText}>Sign Up</Text>
//     //           </TouchableOpacity> )}
//     //           <Text style={Signstyles.dontText}>
//     //             Already Have Account?
//     //             <Text style={Signstyles.sign} onPress={onhandleLogin}>
//     //               {' '}
//     //               Login{' '}
//     //             </Text>
//     //           </Text>
//     //         </View>
//     //       </View>
//     //     </View>
//     //   </View>
//     // </View>
//   );
// };
// export default SignupScreen;

//     // <View style={Signstyles.mainContainer}>
//     //   <View style={Signstyles.container}>
//     //     <View style={Signstyles.titleTextContainer}>
//     //       <Text style={Signstyles.titleText}>Sign up</Text>
//     //     </View>
//     //     <View style={Signstyles.card}>
//     //       <View style={Signstyles.firstText}>
//     //         <Text style={Signstyles.cardText}>FirstName</Text>
//     //         <TextInput
//     //           style={Signstyles.textinput}
//     //           placeholder="firstname" )}
//     //           value={firstName}
//     //           onChangeText={setfirstName}
//     //         />
//     //         <Text style={Signstyles.cardText}>LastName</Text>
//     //         <TextInput
//     //           style={Signstyles.textinput}
//     //           placeholder="lastname"
//     //           value={lastName}
//     //           onChangeText={setlastName}
//     //         />
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Email</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Email"
//     //             value={email}
//     //             onChangeText={setEmail}
//     //           />
//     //         </View>
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Phone Number</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Ph No"
//     //             value={phoneNumber}
//     //             onChangeText={setphoneNumber}
//     //           />
//     //         </View>
//     //         <View>
//     //           <Text style={Signstyles.cardText}>Password</Text>
//     //           <TextInput
//     //             style={Signstyles.textinput}
//     //             placeholder="Password"
//     //             secureTextEntry
//     //             value={password}
//     //             onChangeText={setPassword}
//     //           />
//     //         </View>
//     //         <View>
//     //           <TouchableOpacity
//     //             onPress={handleSubmit}
//     //             style={Signstyles.touchablebtn}>
//     //             <Text style={Signstyles.subTitileText}>Sign Up</Text>
//     //           </TouchableOpacity> )}
//     //           <Text style={Signstyles.dontText}>
//     //             Already Have Account?
//     //             <Text style={Signstyles.sign} onPress={onhandleLogin}>
//     //               {' '}
//     //               Login{' '}
//     //             </Text>
//     //           </Text>
//     //         </View>
//     //       </View>
//     //     </View>
//     //   </View>
//     // </View>
//   );
// };
// export default SignupScreen;import React, { useState } from 'react';
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
        'http://c252-106-51-70-135.ngrok.io/api/user/save',
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
      navigation.navigate('LoginScreen');
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
              source={require('../../../Assets/Signup.png')}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
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

export default SignUpScreen;
