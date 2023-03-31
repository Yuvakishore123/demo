import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux';
import Profile from './src/screens/Home/Profile';
import {ActivityIndicator} from 'react-native-paper';
import Colors from './src/constants/Colors';
import {Init} from './src/redux/actions';
import Home from './src/screens/main/Home';
const Stack = createSharedElementStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
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
      <RootNavigation />
    </Provider>
  );
};

export default App;
