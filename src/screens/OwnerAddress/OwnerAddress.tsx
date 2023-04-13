// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from 'react-native';
// import React, {useEffect} from 'react';

// import {useNavigation, useIsFocused} from '@react-navigation/native';

// import OwnerProfile from '../Ownerprofile/OwnerProfile';

// import AddAddress from './OwnerAddAddress';

// import {useDispatch, useSelector} from 'react-redux';
// import {AddressReducers} from '../../redux/reducers/AddressReducers';
// import {FlatList} from 'react-native-gesture-handler';
// import {addAddress, deleteAddress} from '../../redux/actions/actions';
// import style from './OwnerAddressStyles';

// // import style from '../OwnerEditProfile/OwnerEditProfileStyles';
// let addressList = [];

// const Address = () => {
//   const navigation = useNavigation();

//   const handleOwnerAddAddress = () => {
//     navigation.navigate('OwnerAddAddress');
//   };

//   const isFoucused = useIsFocused();

//   const addressList = useSelector(state => state.AddressReducers);
//   const dispatch = useDispatch();
//   console.log(addressList);

//   return (
//     <View>
//       <View style={style.header}>
        

//         <View style={style.addAddressHeader}>
//           <TouchableOpacity
//             style={style.backBtn}
//             onPress={() => {
//               navigation.goBack();
//             }}>
//             <Image
//               source={require('../../../Assets/back.png')}
//               style={style.btnImage}></Image>
//           </TouchableOpacity>

//           <Text style={style.addAddressText}>Add Address</Text>
//         </View>

//         <TouchableOpacity
//           style={style.btnContainer}
//           onPress={handleOwnerAddAddress}>
//           <Text style={style.btnText}>Add Address</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={addressList}
//         renderItem={({item, index}) => {
//           return (
//             <View style={style.card}>
//               <View>
//                 <Text style={style.city}>{'City:' + item.city}</Text>

//                 <Text style={style.input}>{'Building:' + item.building}</Text>
//                 <Text style={style.input}>{'Pincode:' + item.pincode}</Text>
//                 <Text style={style.stateName}>{'State:' + item.stateName}</Text>
//               </View>
//               <TouchableOpacity
//                 style={style.deleteBtn}
//                 onPress={() => {
//                   dispatch(deleteAddress(index));
//                 }}>
//                 <Text style={style.deleteBtnText}>Delete Address</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         }}></FlatList>
//     </View>
//   );
// };

// export default Address;




import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {useAddress} from './useAddress';
import { OwnerAddressCustomHook } from './OwnerAddressCustomHook';
import OwnerProfile from '../Ownerprofile/OwnerProfile';
import AddAddress from './OwnerAddAddress';
import style from './OwnerAddressStyles';

const Address = () => {
  const {
    addressList,
    handleOwnerAddAddress,
    handleDeleteAddress,
    isFocused,
    goBackButton,
  } = OwnerAddressCustomHook();

  return (
    <View>
      <View style={style.header}>
        <View style={style.addAddressHeader}>
          <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
            <Image
              source={require('../../../Assets/back.png')}
              style={style.btnImage}></Image>
          </TouchableOpacity>
          <Text style={style.addAddressText}>Add Address</Text>
        </View>
        <TouchableOpacity
          style={style.btnContainer}
          onPress={handleOwnerAddAddress}>
          <Text style={style.btnText}>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View style={style.card}>
              <View>
                <Text style={style.city}>{'City:' + item.city}</Text>
                <Text style={style.input}>{'Building:' + item.building}</Text>
                <Text style={style.input}>{'Pincode:' + item.pincode}</Text>
                <Text style={style.stateName}>{'State:' + item.stateName}</Text>
              </View>
              <TouchableOpacity
                style={style.deleteBtn}
                onPress={() => {
                  handleDeleteAddress(index);
                }}>
                <Text style={style.deleteBtnText}>Delete Address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Address;
