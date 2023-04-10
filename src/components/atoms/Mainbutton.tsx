import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../screens/Login/LoginStyle';

export default function Mainbutton(props: {onPress: any; text: string}) {
  const {onPress, text} = props;
  return (
    <View style={Styles.mainButton}>
      <TouchableOpacity style={Styles.mainTouchable}>
        <Text onPress={onPress} style={Styles.touchableText}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
