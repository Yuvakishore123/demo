/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
import Ownerprofilehook from './Useownerprofile';
type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
  const {submit} = Ownerprofilehook();
  return (
    <View style={style.profileStyle}>
      <ScrollView>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>{/* <AddImages /> */}</View>
        <View>
          <Text style={style.profileText}>Vishal</Text>
        </View>
        <View style={style.profileFields}>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
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
