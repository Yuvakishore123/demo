import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ownerstyles from './OwnerStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DropdownMenu from '../../components/atoms/Dropdown';
import styles from '../Signup/Signupstyle';
import Typeselection from '../../components/atoms/Typeselection';

function Additems() {
  return (
    <ScrollView style={Ownerstyles.mainContainer}>
      <Text style={Ownerstyles.Titletext}> Add Items </Text>
      <View>
        <Image
          style={Ownerstyles.Imageitem}
          source={require('../../../Assets/OwnerItems.png')}
        />
      </View>
      <View style={Ownerstyles.Scrollcontainer}>
        <View style={Ownerstyles.scroll}>
          <Text style={Ownerstyles.Itemname}>Name</Text>
          <TextInput style={Ownerstyles.Namefield} />
          <Text style={Ownerstyles.Itemname}> Description</Text>
          <TextInput style={Ownerstyles.Descriptionfield} />
          <DropdownMenu />
          <Text style={Ownerstyles.Itemname}>Select Type</Text>
          <Typeselection />
          <Text style={Ownerstyles.Itemname}>Select Event</Text>
          <DropdownMenu />
        </View>
      </View>
    </ScrollView>
  );
}

export default Additems;
