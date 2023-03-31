import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'redux';

export const Init = () => {
  return async (dispatch: Dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const Login = (PhoneNumber: string, password: string) => {
  return async (dispatch: Dispatch) => {
    let token: string | null = null;
    if (PhoneNumber === '1234567890' && password === '1234567') {
      token = PhoneNumber + password;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
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
