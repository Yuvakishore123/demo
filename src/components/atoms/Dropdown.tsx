import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ownerstyles from '../../screens/OwnerItems/OwnerStyles';
import {StyleSheet} from 'react-native';
import Styles from '../../screens/Login/LoginStyle';

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
    <View style={Ownerstyles.Contrainer}>
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
          <View style={Styles.DropdownContainer}>
            <TouchableOpacity
              style={Styles.DropConatiner}
              onPress={() => handleSelectGender('Male')}>
              <Text style={Ownerstyles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectGender('Female')}>
              <Text style={Ownerstyles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default GenderDropdown;
