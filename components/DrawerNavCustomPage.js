import { StyleSheet, View, StatusBar, Image, Text, Linking } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'



const DrawerNavCustomPage = (props) => {

  let aa = [1,4,5,5,5,5,6,6]

  return (

    <View style={styles.container}>
      {/* <StatusBar animated /> */}
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/Hardeep.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.gillKernColumn}>
          <Text style={styles.gillKern}>Gill Kern</Text>
          <Text style={styles.kernGmailCom}>hardeep@gmail.com</Text>
        </View>
      </View>

      <View style={styles.singleHorizontalLine}></View>

      <DrawerContentScrollView contentContainerStyle={{backgroundColor:'white', top:40}}>

        <DrawerItemList {...props} />

        <DrawerItem
        inactiveTintColor='black'
        activeTintColor='black'
        label="Help"
        onPress={() => Linking.openURL('tel:9662079915')}
        />

        {/* <Text style={styles.notification}>Notification</Text>
        <Text style={styles.changePassword}>Change Password</Text>
        <Text style={styles.logout}>Logout</Text> */}

      </DrawerContentScrollView>

    </View>

  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    width: 60,
    height: 65,
    borderRadius: 60,
    backgroundColor: "white"
  },
  gillKern: {
    fontFamily: "roboto-regular",
    color: "blue",
    // height: 30,
    fontSize: 16,
    top:10
  },
  kernGmailCom: {
    fontFamily: "roboto-regular",
    color: "black",
    // height: 21,
    // width: 193,
    fontSize: 14,
    top: 15
  },
  gillKernColumn: {
    width: 193,
    marginLeft: 20
  },
  imageRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 14,
    // marginRight: 26,
  },
  
  notification: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 221,
    fontSize: 24,
    lineHeight: 14,
    marginTop: 25,
    marginLeft: 45
  },

  changePassword: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 221,
    fontSize: 24,
    textAlign: "justify",
    marginTop: 1,
    marginLeft: 45
  },

  logout: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 162,
    fontSize: 24,
    marginTop: 12,
    marginLeft: 56
  },

  singleHorizontalLine: {
    backgroundColor: "black",
    width: 240,
    height: 4,
    marginTop:50,
    left:20
  }

});



//   return (
//     <View style={{backgroundColor:'white', flex:1}}>
//         <DrawerContentScrollView contentContainerStyle={{backgroundColor:'red', flex:1/2, flexDirection:'column'}}>
//         <Image source={require('../assets/images/Hardeep.png')} style={{height:60, width:60, borderRadius:40, marginBottom:20, top:10, left:10}}>
//         </Image>
//         <Text>askdjanskjdnkasd</Text>
        
//         <DrawerItemList {...props} />


//         </DrawerContentScrollView>
//     </View>
//   )




export default DrawerNavCustomPage