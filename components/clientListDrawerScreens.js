import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientList from '../screens/clientList';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavCustomPage from './DrawerNavCustomPage';
import LogoutScreen from '../screens/LogoutScreen';



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
      screenOptions={{headerShown:false, swipeEdgeWidth:50, drawerActiveTintColor:'black', drawerInactiveTintColor:'black', drawerActiveBackgroundColor:'gray'}}
      drawerContent={(props) => {
          console.log('YYYYYYYYYYYYYYYYYYYYYYY', {...props})
          return <DrawerNavCustomPage {...props}/>
      }}
      >
        <Drawer.Screen name="Notification" component={ClientList} /> 
        <Drawer.Screen name="Change Password" component={RegisterScreen} /> 
        <Drawer.Screen name="Logout" component={LogoutScreen} /> 
      </Drawer.Navigator>
    )



}


export default ClientListDrawerScreens