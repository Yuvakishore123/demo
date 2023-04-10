import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import {Avatar, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';

const AddImages = ()=> {
  const [Pic, setPic] = React.useState('');
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
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
        <Button onPress={() => uploadImage()}> Upload Image </Button>
        <Button onPress={() => removeImage()}> Remove Image </Button>
      </View>
    </View>
  );
}
export default AddImages;
