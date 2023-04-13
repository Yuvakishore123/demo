import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Ownerstyles from './Additemsstyle';
import {ScrollView} from 'react-native-gesture-handler';
import GenderDropdown from '../../components/atoms/GenderDropdown';
import EventsDropdown from '../../components/atoms/EventsDropdown';
import TypeDropdown from '../../components/atoms/TypeDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import Mainbutton from '../../components/atoms/MainButton';
import Useadditems from './Useadditems';
const Additems = () => {
  const {
    name,
    description,
    setGender,
    setEventType,
    setOutfitType,
    setItemType,
    handleGenderChange,
    handleEventTypeChange,
    handleOutfitChange,
    handleItemTypeChange,
    handleItems,
    setName,
    setDescription,
  } = Useadditems();
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
          <TextInput
            style={Ownerstyles.Namefield}
            onChangeText={setName}
            value={name}
          />
          <Text style={Ownerstyles.Itemname}> Description</Text>
          <TextInput
            style={Ownerstyles.Descriptionfield}
            onChangeText={setDescription}
            value={description}
          />
          <GenderDropdown
            onSelectGender={setGender}
            onChange={handleGenderChange}
          />
          <Text style={Ownerstyles.Itemname}>Select Type</Text>
          <TypeDropdown
            onSelectType={setItemType}
            onChange={handleItemTypeChange}
          />
          <Text style={Ownerstyles.Itemname}>Select Event</Text>
          <EventsDropdown
            onSelectEvent={setEventType}
            onChange={handleEventTypeChange}
          />
          <Text style={Ownerstyles.Itemname}>Select Outfit </Text>
          <OutfitDropdown
            onSelectOutfit={setOutfitType}
            onChange={handleOutfitChange}
          />
          <Mainbutton text="Continue" onPress={handleItems} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Additems;
