import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientList from '../screens/clientList';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavCustomPage from './DrawerNavCustomPage';



const ClientListDrawerScreens = () => {

    useEffect(() => {
        console.log('CLIENTLISTDRAWERSCREENS MOUNTED');
    
        return () => {
        console.log('CLIENTLISTDRAWERSCREENS UNMOUNTED');
        }
      })


    const Drawer = createDrawerNavigator();
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb', Drawer)
  
  
    return (
      <Drawer.Navigator
      screenOptions={{headerShown:false}}
      drawerContent={(props) => {
          console.log('YYYYYYYYYYYYYYYYYYYYYYY', {...props})
          return <DrawerNavCustomPage {...props}/>
      }}
      >
        <Drawer.Screen name="ClientList" component={ClientList} /> 
        <Drawer.Screen name="DSFSDFSDFsad" component={RegisterScreen} /> 
      </Drawer.Navigator>
    )



}


export default ClientListDrawerScreens