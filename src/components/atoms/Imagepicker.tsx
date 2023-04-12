// import {launchImageLibrary} from 'react-native-image-picker';
// import {View, Text, Button, Image} from 'react-native';
// import React, {useState} from 'react';

// export default function Imagepicker() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const OpenPicker = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo', // only pick images, not videos or others
//         includeBase64: false, // set to true if you want to include the image data as base64-encoded string
//       },
//       response => {
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else if (response.customButton) {
//           console.log('User tapped custom button: ', response.customButton);
//         } else {
//           // Selected image
//           const source = {uri: response.uri};

//           setSelectedImage(source);
//         }
//       },
//     );
//   };

//   return (
//     <View>
//       {selectedImage ? (
//         <Image source={selectedImage} style={{width: 200, height: 200}} />
//       ) : (
//         <Button onPress={OpenPicker} title="Choose image" />
//       )}
//     </View>
//   );
// }
// import {View, Text, ToastAndroid} from 'react-native';
// import React from 'react';
// import {Avatar, Button} from 'react-native-paper';
// import {launchImageLibrary} from 'react-native-image-picker';
// import
// export const uploadImage = () => {
//   let options = {
//     mediaType: 'photo',
//     quality: 1,
//     includeBase64: true,
//   };
//   launchImageLibrary(options, response => {
//     if (response.didCancel) {
//       setToastMsg('Canceled image Selection');
//     } else if (response.errorCode == 'permission') {
//       setToastMsg('permission not satisfied');
//     } else if (response.errorMessage == 'others') {
//       setToastMsg(response.errorMessage);
//     } else {
//       setPic(response.assets[0].base64);
//     }
//   });
// };

import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React from 'react';
import {androidCameraPermission} from '../../constants/Permissions';
import axios from 'axios';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import OwnerImage from '../../screens/OwnerImage/OwnerImage';

const Imagepicker = () => {
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate(OwnerImage);
  };
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    const onCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    };
    const onGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log('Seleted Image', image);
        imageUpload(image.path);
      });
    };
    const imageUpload = imagePath => {
      const imageData = new FormData();
      imageData.append('image', {
        uri: imagePath,
        name: 'image',
      });

      axios({
        method: 'post',
        url: 'https://64267853556bad2a5b505aec.mockapi.io/login',
        data: imageData,
      })
        .then(function (response) {
          console.log('image uploaded', response);
        })
        .catch(function (error) {
          console.log('error uploading image', error);
        });
    };

    if (permissionStatus || Platform.OS === 'ios') {
      Alert.alert('Profile Picture', 'Choose option', [
        {
          text: 'Camera',
          onPress: onCamera,
        },
        {
          text: 'Gallery',
          onPress: onGallery,
        },
        {
          text: 'cancel',
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        width: 400,
      }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onSelectImage}>
        <Text style={{color: '#ffff'}}>Selct Images</Text>
      </TouchableOpacity>
      <Button onPress={handleback}> cancel </Button>
    </View>
  );
};

export default Imagepicker;
