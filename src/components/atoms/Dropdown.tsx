import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ownerstyles from '../../screens/OwnerItems/OwnerStyles';
import {StyleSheet} from 'react-native';

const GenderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectGender = gender => {
    setSelectedGender(gender);
    setIsOpen(false);
  };

  return (
    <View style={Ownerstyles.Container}>
      <Text style={Ownerstyles.genderText}>Gender:</Text>
      <TouchableOpacity onPress={handleOpen}>
        <View style={Ownerstyles.dropdownContainer}>
          <Text style={Ownerstyles.dropdowntext}>
            {selectedGender ? selectedGender : ' select '}
          </Text>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={Ownerstyles.scroll}>
          <TouchableOpacity onPress={() => handleSelectGender('Male')}>
            <Text style={Ownerstyles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectGender('Female')}>
            <Text style={Ownerstyles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GenderDropdown;

