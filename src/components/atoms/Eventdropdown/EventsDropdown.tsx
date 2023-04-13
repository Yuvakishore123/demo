/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../../screens/Additems/Additemsstyle';
import styles from './Eventstyles';
import Useeventdropdown from './Useeventdropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownComponent = () => {
  const {CategoriesData, value, setValue, isFocus, setIsFocus} =
    Useeventdropdown();
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
export default DropdownComponent;
