import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import {StyleSheet} from 'react-native';
import Styles from '../../screens/LoginScreen/LoginStyle';
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
        <View style={Ownerstyles.dropdown}>
          <Text style={Ownerstyles.dropdowntext}>
            {selectedGender ? selectedGender : ' select '}
          </Text>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={Ownerstyles.scrollView}>
          <View>
            <TouchableOpacity
              style={Ownerstyles.DropdownContainer}
              onPress={() => handleSelectGender('Men')}>
              <Text style={Ownerstyles.genderText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Ownerstyles.DropdownContainer}
              onPress={() => handleSelectGender('Women')}>
              <Text style={Ownerstyles.genderText}>Women</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
export default GenderDropdown;
