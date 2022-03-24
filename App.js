import 'react-native-gesture-handler';
import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OTPVerifyScreen from './screens/otpVerifyScreen';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore';
import { enableScreens } from 'react-native-screens';
import ClientList from './screens/clientList';
import ClientListDrawerScreens from './components/clientListDrawerScreens';



const App = () => {

  const Stack = createStackNavigator();
  
  enableScreens();
  

  return (
    <Provider store={reduxStore}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='ClientListDrawerScreens' component={ClientListDrawerScreens} options={{headerShown:false}} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name='OTPVerifyScreen' component={OTPVerifyScreen} options={{headerShown:false, presentation:'modal'}} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};



export default App;
