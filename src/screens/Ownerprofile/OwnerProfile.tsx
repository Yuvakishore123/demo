/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
import {Logout} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import OwnerEditProfile from '../OwnerEditProfile/OwnerEditProfile';
import OwnerAddress from '../OwnerAddress/OwnerAddress';

type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  const handleOwnerEditProfile = () => {
    navigation.navigate('OwnerEditProfile');
  };
  const handleOwnerAddress = () => {
    navigation.navigate('OwnerAddress');
  };

  return (
    <View style={style.profileStyle}>
      <ScrollView>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>
          <AddImages />
        </View>
        <View>
          <Text style={style.profileText}>Vishal</Text>
        </View>
        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={handleOwnerEditProfile}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn} onPress={handleOwnerAddress}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={submit} style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}}>
        <OwnerBottomTab navigation={navigation} />
      </View>
    </View>
  );
};
export default OwnerProfile;
