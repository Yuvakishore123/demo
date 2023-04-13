import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';

export const AddImagesLogicCustomHook = () => {
  const [pic, setPic] = React.useState('');

  const setToastMsg = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  useEffect(() => {
    retrieveImageFromStorage();
  }, []);

  const retrieveImageFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@selected_image');
      if (value !== null) {
        setPic(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveImageToStorage = async (value) => {
    try {
      await AsyncStorage.setItem('@selected_image', value);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        setToastMsg('Canceled image Selection');
      } else if (response.errorCode == 'permission') {
        setToastMsg('permission not satisfied');
      } else if (response.errorMessage == 'others') {
        setToastMsg(response.errorMessage);
      } else {
        setPic(response.assets[0].base64);
        saveImageToStorage(response.assets[0].base64);
      }
    });
  };

  const removeImage = async () => {
    setPic('');
    setToastMsg('image Removed');
    try {
      await AsyncStorage.removeItem('@selected_image');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pic,
    uploadImage,
    removeImage,
  };
};
