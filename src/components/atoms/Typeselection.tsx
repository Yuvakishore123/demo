import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ownerstyles from '../../screens/OwnerItems/OwnerStyles';
import {StyleSheet} from 'react-native';

const TypeSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectGender = Type => {
    setSelectedGender(Type);
    setIsOpen(false);
  };

  return (
    <View style={Ownerstyles.Container}>
      <Text style={Ownerstyles.genderText}>Select Type:</Text>
      <TouchableOpacity onPress={handleOpen}>
        <View style={Ownerstyles.dropdownContainer}>
          <Text style={Ownerstyles.dropdowntext}>
            {selectedGender ? selectedGender : ' select '}
          </Text>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={Ownerstyles.scroll}>
          <TouchableOpacity onPress={() => handleSelectGender('Shirts')}>
            <Text style={Ownerstyles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectGender('Tshirts')}>
            <Text style={Ownerstyles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default TypeSelection();
