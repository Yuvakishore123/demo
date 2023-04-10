import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyHeader from '../../components/molecules/MyHeader';
import BottomTab from '../../components/molecules/BottomTab';
import HomeLogic from './HomeLogic';
export default function Home({route, navigation}: Props) {
  return (
    <View style={{flex: 1}}>
      <MyHeader title={route.name} style={styles.header} />
      <View style={styles.container}>
        <HomeLogic />
      </View>
      <View style={styles.bottomTabWrapper}>
        <BottomTab navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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
});
