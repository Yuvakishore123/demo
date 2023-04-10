import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ownerstyles from './OwnerStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DropdownMenu from '../../components/atoms/Dropdown';
import Mainbutton from '../../components/atoms/Mainbutton';
import DropdownComponent from '../../components/atoms/Eventselection';
import TypeSelction from '../../components/atoms/TypeSelection';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import {useNavigation} from '@react-navigation/native';
import OwnerImage from '../OwnerImage/OwnerImage';

const Additems = () => {
  const navigation = useNavigation();
  const handleItems = () => {
    navigation.navigate(OwnerImage);
  };
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
          <TypeSelction />
          <Text style={Ownerstyles.Itemname}>Select Event</Text>
          <DropdownComponent />
          <Text style={Ownerstyles.Itemname}>Select Outfit </Text>
          <OutfitDropdown />
          <Mainbutton text="Continue" onPress={handleItems} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Additems;
