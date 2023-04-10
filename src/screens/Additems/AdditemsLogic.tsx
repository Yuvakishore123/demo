import React from 'react';
import {View, Text, Image} from 'react-native';
import Ownerstyles from './Additemsstyle';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DropdownMenu from '../../components/atoms/GenderDropdown';
import DropdownComponent from '../../components/atoms/EventsDropdown';
import TypeSelction from '../../components/atoms/TypeDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import Mainbutton from '../../components/atoms/MainButton';
// import {useNavigation} from '@react-navigation/native';
// import OwnerImage from '../OwnerImage/OwnerImage';
const Additems = () => {
//   const navigation = useNavigation();
//   const handleItems = () => {
//     navigation.navigate(OwnerImage);
//   };
  return (
    <ScrollView>
      <Text style={Ownerstyles.Titletext}> Add Items </Text>
      <View>
        <Image
          style={Ownerstyles.Imageitem}
          source={require('../../../Assets/additems1.png')}
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
          <Mainbutton text="Continue" onPress={undefined} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Additems;