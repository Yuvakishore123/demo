import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import {Login} from '../../redux/actions';

export default function LoginScreen() {
  const [PhoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [PhoneNumbererror, setPhoneNumbererror] = useState<string>('');
  const [passworderror, setPassworderror] = useState<string>('');
  const dispatch = useDispatch();
  const submit = () => {
    var emailValid = false;
    if (PhoneNumber.length == 0) {
      setPhoneNumbererror('Email is required');
    } else if (PhoneNumber.length < 6) {
      setPhoneNumbererror('Email should be minimum 6 characters');
    } else if (PhoneNumber.indexOf(' ') >= 0) {
      setPhoneNumbererror('Email cannot contain spaces');
    } else {
      setPhoneNumbererror('');
      emailValid = true;
    }
    var passwordValid = false;
    if (password.length == 0) {
      setPassworderror('Password is required');
    } else if (password.length < 6) {
      setPassworderror('Password should be minimum 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPassworderror('Password cannot contain spaces');
    } else {
      setPassworderror('');
      passwordValid = true;
    }
    if (emailValid && passwordValid) {
      dispatch(Login(PhoneNumber, password));
    }
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        <View style={Styles.titleTextContainer}>
          <Text style={Styles.titleText}>Login</Text>
        </View>
        <View style={Styles.card}>
          <View>
            <Text style={Styles.cardText}>Phone Number</Text>
          </View>
          <View>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter PhoneNumber"
              placeholderTextColor={'#3E54AC'}
              value={PhoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          {PhoneNumbererror.length > 0 && (
            <Text style={{marginTop: 5, color: 'red'}}>{PhoneNumbererror}</Text>
          )}
          <View>
            <Text style={Styles.cardText}>Password</Text>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter password"
              placeholderTextColor={'#3E54AC'}
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          {passworderror.length > 0 && (
            <Text style={{marginTop: 5, color: 'red'}}>{passworderror}</Text>
          )}
        </View>
        <View style={Styles.touchablebtnContainer}>
          <TouchableOpacity onPress={submit} style={Styles.touchablebtn}>
            <Text style={Styles.subTitileText}>Login</Text>
          </TouchableOpacity>
          <View style={Styles.signuptext}>
            <Text style={Styles.dontText}>
              Don't have Account ?<Text style={Styles.sign}> Signup</Text>
            </Text>
            <Text style={Styles.orText}>or</Text>
            <Text style={Styles.guest}>Continue As Guest</Text>
          </View>
        </View>
      </View>
    </View>
     // <View style={styles.container}>
    //   <Image
    //     style={StyleSheet.absoluteFillObject}
    //     source={{uri: loginBg}}
    //     blurRadius={10}
    //   />
    //   <Text style={styles.title}>Login</Text>
    //   <Surface style={styles.box}>
    //     <View>
    //       <TextInput
    //         label="PhoneNumber"
    //         mode="outlined"
    //         value={PhoneNumber}
    //         onChangeText={text => setPhoneNumber(text)}
    //       />
    //       <TextInput
    //         label="Password"
    //         mode="outlined"
    //         value={password}
    //         onChangeText={text => setPassword(text)}
    //       />
    //     </View>
    //     <Button
    //       mode="contained"
    //       color={Colors.blue}
    //       style={{marginTop: 20}}
    //       onPress={submit}>
    //       Submit
    //     </Button>
    //   </Surface>
    // </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ECF2FF',
    height: 800,
    width: 400,
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 300,
    margin: 26,
    // shadowColor: '#3E54AC',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity:15,
    // shadowRadius: 10,
    // elevation:0.1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#3E54AC',
    margin: 15,
  },
  titleTextContainer: {
    height: 150,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#3E54AC26',
    height: 300,
    width: 320,
    padding: 30,
    borderRadius: 10,
    margin: 15,
    justifyContent: 'center',
    shadowColor: '#52006A',
    // elevation: 1,
  },
  cardText: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: '700',
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3E54AC',
  },
  touchableText: {
    // margin:15,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 309,
    backgroundColor: '#3E54AC',
    margin: 15,
    marginTop: 30,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchablebtnContainer: {
    justifyContent: 'center',
    // alignItems:"center",
  },
  subTitileText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  signuptext: {
    marginTop: 20,
    alignItems: 'center',
    marginRight: 20,
    margin: 15,
  },
  sign: {
    color: '#3E54AC',
    fontSize: 14,
    opacity: 3,
  },
  guest: {
    color: '#3E54AC',
    fontSize: 14,
    marginRight: 15,
    marginTop: 10,
    margin: 15,
  },
  orText: {
    // alignItems:"center",
    // justifyContent:"center"
    marginLeft: 1,
    fontSize: 14,
  },
  dontText: {
    margin: 25,
    marginTop: 5,
    marginRight: 2,
    marginBottom: 10,
  },
});
