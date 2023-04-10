import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
import MyHeader from '../../components/molecules/MyHeader';
import BottomTab from '../../components/molecules/BottomTab';
import ImagePicker from 'react-native-image-picker';

import {Image} from 'react-native';
type Props = {
  route: {name: string};
  navigation: any;
};

export default function Profile({route, navigation}: Props) {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={{flex: 1}}>
      <MyHeader back title={route.name} style={style.header} />
      <View style={style.container}>
        <View style={style.profileStyle}>
          <View>
            <Image
              source={require('../../../Assets/UserProfilePic.jpg')}
              style={style.profileImg}
            />
          </View>

          <View>
            <Text style={style.profileText}>John</Text>
          </View>

          <View style={style.profileFields}>
            <TouchableOpacity style={style.whiteBtn}>
              <Text style={style.btnPText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.whiteBtn}>
              <Text style={style.btnPText}>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.whiteBtn}>
              <Text style={style.btnPText}>My Orders</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={style.btnfield}>
              <Text style={style.btntext} onPress={submit}>
                Logout{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.bottomTabWrapper}>
        <BottomTab navigation={navigation} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF2FF',
  },
  header: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginHorizontal: 4,
  },
  bottomTabWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnfield: {
    alignItems: 'center',

    width: 300,
    height: 59,

    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntext: {
    position: 'absolute',

    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },

  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'red',
    shadowColor: '#3E54AC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,  
  },
  profileStyle: {
    backgroundColor: '#ECF2FF',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#3E54AC',
    fontFamily: 'poppins',
    fontSize: 22,
    padding: 16,
  },

  profileFields: {
    height: 300,
  },
  editprofile: {
    backgroundColor: '#FFFFFF',
    color: 'white',
  },
  whiteBtn: {
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    height: 59,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnPText: {
    position: 'absolute',

    left: 110,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#3E54AC',
  },
});
