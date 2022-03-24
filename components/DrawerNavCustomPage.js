import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'



const DrawerNavCustomPage = (props) => {

    console.log('ZZZZZZZZZZZZZZZZZZZZZZ')



  return (
    <View style={{backgroundColor:'white', flex:1}}>
        <DrawerContentScrollView contentContainerStyle={{backgroundColor:'red', flex:1/2, flexDirection:'column'}}>
        <Image source={require('../assets/images/Hardeep.png')} style={{height:60, width:60, borderRadius:40, marginBottom:20, top:10, left:10}}>
        </Image>
        <Text>askdjanskjdnkasd</Text>
        
        <DrawerItemList {...props} />


        </DrawerContentScrollView>
    </View>
  )
}



export default DrawerNavCustomPage

const styles = StyleSheet.create({})