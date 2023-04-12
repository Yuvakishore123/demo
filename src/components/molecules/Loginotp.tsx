import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import Colors from '../../constants/Colors';
import {useDispatch} from 'react-redux';
import {verifyOtp} from '../../redux/reducers/Otpreducer';

const Loginotp = () => {
  const [otp, setOtp] = useState('');
  const [phoneNo, setPhonenumber] = useState('');
  const dispatch = useDispatch();

  const handleSendOtp = () => {
    axios
      .post('http://bb9e-180-151-121-182.ngrok.io/api/phoneNo', {
        phoneNo: phoneNo,
      })
      .then(response => {
        console.log(response.data); // Replace with your code to handle the response
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleVerifyOtp = () => {
    axios
      .post('http://bb9e-180-151-121-182.ngrok.io/api/otplogin', {
        otp: otp,
      })
      .then(response => {
        console.log(response.data); // Replace with your code to handle the response
        // await AsyncStorage.getItem('token', token);
      })
      .catch(error => {
        console.error(error);
      });
    // dispatch(verifyOtp(otp));
    // Alert.alert('otp submitted');
  };

  return (
    <View style={{backgroundColor: Colors.main}}>
      <Text>Loginotp</Text>
      <View style={{borderColor: 'Black', height: '100%', width: 100}}>
        <View
          style={{
            height: 40,
            width: 100,
            borderRadius: 8,
            backgroundColor: Colors.iconscolor,
            opacity: 0.5,
          }}>
          <TextInput
            placeholder="ENter phonenumber"
            value={phoneNo}
            onChangeText={setPhonenumber}
          />
          <View
            style={{
              height: 40,
              width: 100,
              borderRadius: 8,
              backgroundColor: Colors.iconscolor,
              opacity: 0.5,
              marginBottom: 50,
            }}>
            <TextInput
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
              placeholder="Otp"
            />
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <TouchableOpacity onPress={handleSendOtp}>
            <Text>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleVerifyOtp}>
            <Text>Submit OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Loginotp;
