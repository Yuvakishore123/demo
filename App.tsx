import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import LoginScreen from './src/screens/Login/LoginScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import Profile from './src/screens/Profile/Profile';
import {ActivityIndicator} from 'react-native-paper';
import Colors from './src/constants/Colors';
import {Init} from './src/redux/actions/actions';
import Home from './src/screens/Home/Home';
import SignupScreen from './src/screens/Signup/Signup';
import Additems from './src/screens/OwnerItems/OwnerItemlogic';
import OwnerItems from './src/screens/OwnerItems/OwnerItems';
import DropdownMenu from './src/components/atoms/Dropdown';
import OwnerHome from './src/screens/Ownerhome/Ownerhome';
import Mainbutton from './src/components/atoms/Mainbutton';
import DropdownComponent from './src/components/atoms/Eventselection';
import OwnerImage from './src/screens/OwnerImage/OwnerImage';
import Imagepicker, { UploadImage } from './src/components/atoms/Imagepicker';
import AddImages from './src/components/atoms/AddImages';
import OpenPicker from './src/components/atoms/Openpicker';
const Stack = createSharedElementStackNavigator();

const OwnerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OwnerItems" component={OwnerItems} />
      <Stack.Screen name="OwnerImage" component={OwnerImage} />
      <Stack.Screen name="OwnerHome" component={OwnerHome} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="OwnerImage" component={OwnerImage} /> */}
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector((state: any) => state.Reducers.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {token === null ? <AuthStack /> : <OwnerStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
