import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
const OwnerHomeLogic = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };
  return (
    <View style>
      <Text>Welcome to owner Home page</Text>
      <Button onPress={submit}> Logout </Button>
    </View>
  );
};
export default OwnerHomeLogic;
