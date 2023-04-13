import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import OwnerProfile from '../screens/Ownerprofile/OwnerProfile';

const Tab = createMaterialBottomTabNavigator();

const CustomTabBar = props => {
  const {state, descriptors, navigation} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const styles = StyleSheet.create({
    tabBarContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      overflow: 'hidden',
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    icon: {
      width: 30,
      height: 30,
    },
  });

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={route.key}
            style={[
              styles.iconContainer,
              isFocused && {backgroundColor: '#E8E8E8'},
            ]}>
            <MaterialCommunityIcons
              name={options.tabBarIcon}
              size={24}
              color={isFocused ? '#3E54AC' : '#9E9E9E'}
              style={styles.icon}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          </View>
        );
      })}
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3E54AC"
      inactiveColor="#9E9E9E"
      barStyle={{backgroundColor: 'white', paddingBottom: 5}}
      tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'account',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={OwnerProfile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: 'cog',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
