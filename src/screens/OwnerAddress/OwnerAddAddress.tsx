// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {addAddress} from '../../redux/actions/actions';

// import style from './OwnerAddressStyles';

// const AddAddress = () => {
//   const navigation = useNavigation();

//   const [city, setCity] = useState('');
//   const [building, setBuilding] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [stateName, setStateName] = useState('');

//   const dispatch = useDispatch();

//   return (
//     <View>
//       <View style={style.addAddressHeader}>
//         <TouchableOpacity
//           style={style.backBtn}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <Image
//             source={require('../../../Assets/back.png')}
//             style={style.btnImage}></Image>
//         </TouchableOpacity>

//         <Text style={style.addAddressText}>Add Address</Text>
//       </View>

//       <View style={style.inputMargin}>
//         <TextInput
//           value={city}
//           placeholder={'enter city name'}
//           onChangeText={text => {
//             setCity(text);
//           }}
//           style={style.inputAddress}
//         />

//         <TextInput
//           value={building}
//           placeholder={'enter building name'}
//           style={style.inputAddress}
//           onChangeText={text => {
//             setBuilding(text);
//           }}
//         />
//         <TextInput
//           value={pincode}
//           placeholder={'enter  pincode'}
//           style={style.inputAddress}
//           onChangeText={text => {
//             setPincode(text);
//           }}
//         />
//         <TextInput
//           value={stateName}
//           placeholder={'enter  state name'}
//           style={style.inputAddress}
//           onChangeText={text => {
//             setStateName(text);
//           }}
//         />
//       </View>

//       <TouchableOpacity
//         style={style.btnfieldAddress}
//         onPress={() => {
//           if (
//             city !== '' &&
//             building !== '' &&
//             pincode != '' &&
//             stateName != ''
//           ) {
//             dispatch(
//               addAddress({
//                 city: city,
//                 building: building,
//                 pincode: pincode,
//                 stateName: stateName,
//               }),
//             );
//             navigation.goBack();
//           }
//         }}>
//         <Text style={style.btntextAddress}>Save Address</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AddAddress;

// const styles = StyleSheet.create({});

// // import {
// //   Image,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   TextInput,
// // } from 'react-native';
// // import React from 'react';
// // import {useNavigation} from '@react-navigation/native';
// // import {useDispatch} from 'react-redux';
// // import {addAddress} from '../../redux/actions/actions';

// // import {
// //   useCity,
// //   useBuilding,
// //   usePincode,
// //   useStateName,
// // } from './OwnerAddAddressCustomHook';

// // import style from './OwnerAddressStyles';

// // const OwnerAddAddress = () => {
// //   const navigation = useNavigation();
// //   const dispatch = useDispatch();
// //   const [city, updateCity] = useCity();
// //   const [building, updateBuilding] = useBuilding();
// //   const [pincode, updatePincode] = usePincode();
// //   const [stateName, updateStateName] = useStateName();

// //   return (
// //     <View>
// //       <View style={style.addAddressHeader}>
// //         <TouchableOpacity
// //           style={style.backBtn}
// //           onPress={() => {
// //             navigation.goBack();
// //           }}>
// //           <Image
// //             source={require('../../../Assets/back.png')}
// //             style={style.btnImage}></Image>
// //         </TouchableOpacity>

// //         <Text style={style.addAddressText}>Add Address</Text>
// //       </View>

// //       <View style={style.inputMargin}>
// //         <TextInput
// //           value={city}
// //           placeholder={'enter city name'}
// //           onChangeText={updateCity}
// //           style={style.inputAddress}
// //         />

// //         <TextInput
// //           value={building}
// //           placeholder={'enter building name'}
// //           style={style.inputAddress}
// //           onChangeText={updateBuilding}
// //         />
// //         <TextInput
// //           value={pincode}
// //           placeholder={'enter  pincode'}
// //           style={style.inputAddress}
// //           onChangeText={updatePincode}
// //         />
// //         <TextInput
// //           value={stateName}
// //           placeholder={'enter  state name'}
// //           style={style.inputAddress}
// //           onChangeText={updateStateName}
// //         />
// //       </View>

// //       <TouchableOpacity
// //         style={style.btnfieldAddress}
// //         onPress={() => {
// //           if (
// //             city !== '' &&
// //             building !== '' &&
// //             pincode != '' &&
// //             stateName != ''
// //           ) {
// //             dispatch(
// //               addAddress({
// //                 city: city,
// //                 building: building,
// //                 pincode: pincode,
// //                 stateName: stateName,
// //               }),
// //             );
// //             navigation.goBack();
// //           }
// //         }}>
// //         <Text style={style.btntextAddress}>Save Address</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default OwnerAddAddress;









import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


import style from './OwnerAddressStyles';
import { OwnerAddAddressCustomHook } from './OwnerAddAddressCustomHook';

const OwnerAddAddress = () => {
  const navigation = useNavigation();
  const {
    city,
    building,
    pincode,
    stateName,
    setCity,
    setBuilding,
    setPincode,
    setStateName,
    handleSaveAddress,
  } = OwnerAddAddressCustomHook(navigation);

  return (
    <View>
      <View style={style.addAddressHeader}>
        <TouchableOpacity
          style={style.backBtn}
          onPress={() => {
            navigation.goBack();
          }
          }>
          <Image
            source={require('../../../Assets/back.png')}
            style={style.btnImage}></Image>
        </TouchableOpacity>

        <Text style={style.addAddressText}>Add Address</Text>
      </View>

      <View style={style.inputMargin}>
        <TextInput
          value={city}
          placeholder={'enter city name'}
          onChangeText={text => {
            setCity(text);
          }}
          style={style.inputAddress}
        />

        <TextInput
          value={building}
          placeholder={'enter building name'}
          style={style.inputAddress}
          onChangeText={text => {
            setBuilding(text);
          }}
        />
        <TextInput
          value={pincode}
          placeholder={'enter  pincode'}
          style={style.inputAddress}
          onChangeText={text => {
            setPincode(text);
          }}
        />
        <TextInput
          value={stateName}
          placeholder={'enter  state name'}
          style={style.inputAddress}
          onChangeText={text => {
            setStateName(text);
          }}
        />
      </View>

      <TouchableOpacity
        style={style.btnfieldAddress}
        onPress={handleSaveAddress}>
        <Text style={style.btntextAddress}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OwnerAddAddress;

const styles = StyleSheet.create({});

