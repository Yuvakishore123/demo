import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const Init = () => {
  return async (dispatch: Dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    }
  };
};
export const Login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const response = await axios.post(
<<<<<<< HEAD
        'https://64267853556bad2a5b505aec.mockapi.io/login',
=======
        'http://c252-106-51-70-135.ngrok.io/api/login',
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
        {
          email: email,
          password: password,
        },
<<<<<<< HEAD
      );
      const token = response.data.token;
      const Token = JSON.stringify(token);
      await AsyncStorage.setItem('token', Token);
      console.log('token stored');
=======
        {
          headers: {
            // Authorization: `Bearer ${await AsyncStorage.getItem(
            //   'access_token',
            // )}`,
          },
        },
      );
      const token = response.headers.access_token;
      // console.log(token);
      // const Token = JSON.stringify(token);
      await AsyncStorage.getItem('token', token);
      console.log('token stored');
      console.log(token);
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    } catch (error) {
      console.log('login error', error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const SignupAndLogin = (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
) => {
  return async (dispatch: Dispatch) => {
    axios
<<<<<<< HEAD
      .post('http://f21e-106-51-81-14.ngrok.io/user/signup', {
=======
      .post('http://c252-106-51-70-135.ngrok.io/api/user/sav', {
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((response: {data: any}) => {
        console.log('signup success');
        payload: response.data;
      })
      .catch(error => {
        console.log('signup error', error);
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.message,
        });
      });
  };
};
export const Logout = () => {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
