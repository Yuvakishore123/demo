import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import Colors from '../../constants/Colors';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import axios from 'axios';
import {object} from 'yup';
// import AntDesign from '@expo/vector-icons/AntDesign';
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const OutfitDropdown = () => {
  const [CategoriesData, setCategoriesData] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fakestoreapi.com/products/categories',
    };
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let CategoriesArray = [];
        for (var i = 0; i < count; i++) {
          CategoriesArray.push({
            value: response.data[i],
            label: response.data[i],
          });
        }
        setCategoriesData(CategoriesArray);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={Ownerstyles.scrollView}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={CategoriesData}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};
export default OutfitDropdown;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
  },
  dropdownContainer: {
    height: '100%',
    width: 250,
    backgroundColor: '#fffff',
    marginTop: 15,
    borderRadius: 10,
    // elevation: 3,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: '50%',
    width: 250,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 10,
    // elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
    backgroundColor: Colors.primary,
  },
  label: {
    // position: 'absolute',
    // backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    marginLeft: '30%',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '40%',
  },
  iconStyle: {
    width: 20,
    height: 20,
    // color: Colors.iconscolor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: Colors.white,
    color: Colors.main,
  },
});