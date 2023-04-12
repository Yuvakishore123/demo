import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    width: 300,
    height: 250,
    backgroundColor: Colors.iconscolor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 15,
    marginTop: 100,
  },
  ButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
  },
  textInput: {
    backgroundColor: Colors.white,
    width: 200,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
});
export default styles;
