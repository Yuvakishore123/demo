// import React from 'react';
// import Additems from './AdditemsLogic';
// import {View} from 'react-native';
// import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
// type Props = {
//   route: {name: string};
//   navigation: any;
// };
// function OwnerItems({navigation}:Props) {
//   return (
//   );
// }
// export default OwnerItems;
import React from 'react';
import {View, Text, Image} from 'react-native';
import Ownerstyles from './Additemsstyle';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DropdownMenu from '../../components/atoms/GenderDropdown/GenderDropdown';
import DropdownComponent from '../../components/atoms/Eventdropdown/EventsDropdown';
import TypeSelction from '../../components/atoms/TypeDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import Mainbutton from '../../components/atoms/MainButton';
import Additemshook from './Useadditems';
const Additems = () => {
  const {handleItems, name, setName, description, setDescription} =
    Additemshook();
  return (
    <ScrollView style={Ownerstyles.mainContainer}>
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
          <TextInput
            value={name}
            onChangeText={setName}
            style={Ownerstyles.Namefield}
          />
          <Text style={Ownerstyles.Itemname}> Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            style={Ownerstyles.Descriptionfield}
          />
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
