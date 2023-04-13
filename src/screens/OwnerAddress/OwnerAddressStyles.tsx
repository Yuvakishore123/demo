import React from 'react';
import {StyleSheet} from 'react-native';

const OwnerAddressStyles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  headerText: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 20,
    color: '#3E54AC',
    flexDirection: 'row',

    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 20,
    borderWidth: 0.2,
    padding: 8,

    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btnText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',

    color: 'white',
  },
  card: {
    backgroundColor: '#ECF2FF',

    width: '100%',

    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    // backgroundColor: 'pink',
    alignSelf: 'center',

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,

    borderRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteBtn: {
    padding: 7,
    borderWidth: 0.2,
    marginRight: 20,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  deleteBtnText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 12,
    color: 'white',
  },

  btnfield: {
    alignItems: 'center',
    alignSelf: 'center',

    width: 60,
    height: 59,
    marginTop: 30,

    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntext: {
    position: 'absolute',
    alignItems: 'center',

    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  input: {marginLeft: 15},

  stateName: {marginLeft: 15, marginBottom: 10},
  city: {marginLeft: 15, marginTop: 10},

  addAddressHeader: {flexDirection: 'row'},

  backBtn: {
    marginTop: 15,
    marginLeft: 15,

    flexDirection: 'row',
  },

  btnImage: {width: 24, height: 24, marginTop: 15},

  addAddressText: {
    marginTop: 28,
    marginLeft: 30,
    fontSize: 20,
    color: '#3E54AC',
    fontWeight: 'bold',
  },

  inputMargin: {marginTop: 20},

  inputAddress: {
    backgroundColor: '#ECF2FF',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,

    width: '100%',
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#3E54AC',
    fontWeight: 'bold',
    borderRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnfieldAddress: {
    alignItems: 'center',
    alignSelf: 'center',

    width: 300,
    height: 59,
    marginTop: 30,

    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntextAddress: {
    position: 'absolute',
    alignItems: 'center',

    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
});
export default OwnerAddressStyles;
