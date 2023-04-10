<<<<<<< HEAD
import {View, Text, ToastAndroid, StyleSheet, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {Avatar, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddImages = () => {
=======
import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import {Avatar, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';

const AddImages = ()=> {
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
  const [Pic, setPic] = React.useState('');
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
<<<<<<< HEAD
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
  const saveImageToStorage = async value => {
    try {
      await AsyncStorage.setItem('@selected_image', value);
    } catch (error) {
      console.log(error);
    }
  };
=======
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMsg('Canceled image Selection');
      } else if (response.errorCode == 'permission') {
        setToastMsg('permission not satisfied');
      } else if (response.errorMessage == 'others') {
        setToastMsg(response.errorMessage);
      } else {
        setPic(response.assets[0].base64);
<<<<<<< HEAD
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
  return (
    <View>
      <View style={styles.centerContent}>
        <Avatar.Image
          size={150}
          source={{uri: 'data:image/png;base64,' + Pic}}
        />
      </View>
      <View
        style={[styles.centerContent, {marginTop: 15, flexDirection: 'row'}]}>
=======
      }
    });
  };
  const removeImage = () => {
    setPic('');
    setToastMsg('image Removed');
  };
  return (
    <View>
      <View>
        <Text>AddImages</Text>
        <Avatar.Image
          size={250}
          source={{uri: 'data:image/png;base64,' + Pic}}
        />
      </View>
      <View>
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
        <Button onPress={() => uploadImage()}> Upload Image </Button>
        <Button onPress={() => removeImage()}> Remove Image </Button>
      </View>
    </View>
  );
<<<<<<< HEAD
};
export default AddImages;
const styles = StyleSheet.create({
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
=======
}
export default AddImages;
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
