import { StyleSheet, View, StatusBar, Image, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'



const DrawerNavCustomPage = (props) => {

    console.log('ZZZZZZZZZZZZZZZZZZZZZZ')

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

      {/* <View style={styles.rect}>
        <View style={styles.rect2}></View>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}></View>
        <View style={styles.rect5}></View>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
        <View style={styles.rect8}></View>
      </View> */}
      <Text style={styles.notification}>Notification</Text>
      <Text style={styles.changePassword}>Change Password</Text>
      <Text style={styles.logout}>Logout</Text>
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
  rect: {
    width: 324,
    height: 41,
    backgroundColor: "white",
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    overflow: "visible",
    marginTop: 53,
    marginLeft: 14
  },
  rect2: {
    flex: 0.14,
    backgroundColor: "white",
    margin: 0
  },
  rect3: {
    flex: 0.14,
    backgroundColor: "rgba(212, 212, 212,1)",
    margin: 0
  },
  rect4: {
    flex: 0.14,
    backgroundColor: "rgba(250, 250, 250,1)"
  },
  rect5: {
    flex: 0.14,
    backgroundColor: "rgba(232, 232, 232,1)"
  },
  rect6: {
    flex: 0.14,
    backgroundColor: "rgba(246, 246, 246,1)"
  },
  rect7: {
    flex: 0.14,
    backgroundColor: "rgba(218, 218, 218,1)"
  },
  rect8: {
    flex: 0.16,
    backgroundColor: "rgba(240, 240, 240,1)"
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