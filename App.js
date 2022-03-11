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
import ClientList from './screens/clientList';
import RegisterScreen from './screens/RegisterScreen';
import OTPVerifyScreen from './screens/otpVerifyScreen';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='ClientListScreen' component={ClientList} options={{headerShown:false}} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name='OTPVerifyScreen' component={OTPVerifyScreen} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
