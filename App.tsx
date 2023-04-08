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
const Stack = createSharedElementStackNavigator();

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
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <OwnerItems />
    </Provider>
  );
};

export default App;
