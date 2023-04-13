import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
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
export default styles;
