import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, FlatList, ScrollView, StatusBar, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux";
import ClientDetailsListTab from "../components/ClientDetailsListTab";
import ClientPaymentDetailsTab from "../components/ClientPaymentDetailsTab";
import SupplierDetailsListTab from "../components/SupplierDetailsListTab";
import SupplierPaymentDetailsTab from "../components/SupplierPaymentDetailsTab";
import { setClientsData } from "../reduxSlices/infoSlice";




export default function ClientList({navigation}) {

  const [supplierList, setSupplierList] = useState(styles.Group105);
  const [supplierListText, setSupplierListText] = useState(styles.Txt966);
  const [clientList, setClientList] = useState(styles.Group548);
  const [clientListText, setClientListText] = useState(styles.Txt159);

  const dispatch = useDispatch();

  const Tab = createMaterialTopTabNavigator();

  // console.log('11111111111111111111', navigation.toggleDrawer())


  useEffect(() => {
    console.log('CLIENTLIST SCREEN MOUNTED');

    return () => {
    console.log('CLIENTLIST SCREEN UNMOUNTED');
    }
  })


  useEffect(() => {

    const clientListAPIFunc = async () => {

      let json = clientList.backgroundColor === 'rgba(0,97,255,1)' ? await fetch('https://jsonplaceholder.typicode.com/albums') : await fetch('https://jsonplaceholder.typicode.com/posts')
      let response = await json.json();
      dispatch(setClientsData(response));
  }
  
    clientListAPIFunc();

  }, [clientList])



  return (
    <>
      <View style={styles.ClientList}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View style={styles.Line10} />
      <View style={styles.Line11} />
      <View style={styles.Line12} />
      </TouchableOpacity>

      <Image
        style={styles.Search}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-55%3A464?alt=media&token=10a86840-d95c-4f48-8b36-2086d8ee45fd",
        }}
      />
      <Image
        style={styles.Notification}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A472?alt=media&token=901ff0f3-a9fd-4f3d-ba30-0493b1ea32bd",
        }}
      />
      
      <View style={supplierList}>
        <Text onPress={() => {
          setSupplierList(styles.Group106);
          setSupplierListText(styles.Txt159);
          setClientList(styles.Group549);
          setClientListText(styles.Txt966);
          
        }} 
        style={supplierListText}>Supplier List</Text>
      </View>

      <View style={clientList}>
        <Text onPress={() => {
          setSupplierList(styles.Group105);
          setSupplierListText(styles.Txt966);
          setClientList(styles.Group548);
          setClientListText(styles.Txt159);

          
        }} 
        style={clientListText}>Client list</Text>
      </View>
    </View>


<Tab.Navigator
sceneContainerStyle={{backgroundColor:'black'}}
style={{flex:1/0.2, backgroundColor:'black'}}
screenOptions={{
  tabBarActiveTintColor: 'white',
  tabBarLabelStyle: { fontSize: 10 },
  tabBarStyle: { backgroundColor: 'black', borderRadius:30, right:40, left:2 },
  // tabBarContentContainerStyle:{backgroundColor:'green'}
}}
>


{clientList.backgroundColor === 'rgba(0,97,255,1)' ? <Tab.Screen
  name="Feed"
  component={ClientDetailsListTab}
  options={{ tabBarLabel: 'Client List' }}
/> : <Tab.Screen
  name="Feed"
  component={SupplierDetailsListTab}
  options={{ tabBarLabel: 'Supplier List' }}
/>}

{clientList.backgroundColor === 'rgba(0,97,255,1)' ? <Tab.Screen
  name="Notifications"
  component={ClientPaymentDetailsTab}
  options={{ tabBarLabel: 'Payment Details' }}
/> : <Tab.Screen
  name="Notifications"
  component={SupplierPaymentDetailsTab}
  options={{ tabBarLabel: 'Payment Details' }}
/>}

</Tab.Navigator>
</>

  )
}



const styles = StyleSheet.create({
  ClientList: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "black",
    /*  linear-gradient(90.15deg, rgba(27,23,34,0.9) 1%, rgba(37,29,49,0.9) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 375,
    height: 667,
  },
  Search: {
    position: "absolute",
    top: 26,
    left: 301,
    width: 20,
    height: 20,
  },
  Notification: {
    position: "absolute",
    top: 26,
    left: 335,
    width: 20,
    height: 20
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },

  Group790: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 13,
    paddingRight: 7,
    borderRadius: 10,
    backgroundColor: "rgba(255,176,178,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Group921: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 11,
    paddingRight: 9,
    marginRight: 11,
    borderRadius: 10,
    backgroundColor: "rgba(78,184,217,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },

  Group884: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(202,229,210,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },

  Group548: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 63,
    paddingRight: 62,
    borderRadius: 50,
    backgroundColor: "rgba(0,97,255,1)",
    width: 184,
    height: 34,
    left:10
  },

  Group549: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 63,
    paddingRight: 62,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 184,
    height: 34,
    left:10
  },

  Group105: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 190,
    paddingRight: 41,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 335,
    height: 34,
    left:10
  },

  Group106: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 190,
    paddingRight: 41,
    borderRadius: 50,
    backgroundColor: "rgba(0,97,255,1)",
    width: 335,
    height: 34,
    left:10
  },

  Group599: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 29,
    none: "0px",
    width: 174,
    height: 110,
  },
  Group13: {
    marginBottom: 79,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    borderTop: "3px solid rgba(255, 255, 255, 1)",
    width: 25,
    height: 8,
    left:10
  },

  Group856: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:'space-between',
    left:20,
    flex:1
  },

  Txt159: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt966: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Line10: {
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "rgba(255,255,255,1)",
    backgroundColor:'white',
    width: 25,
    height: 2,
    // marginBottom: 23,
    // borderRadius:10,
    left:10,
    marginTop:20,
  },

  Line11: {
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "rgba(255,255,255,1)",
    backgroundColor:'white',
    width: 25,
    height: 2,
    // marginBottom: 23,
    // borderRadius:10,
    left:10,
    marginTop:7,
  },

  Line12: {
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "rgba(255,255,255,1)",
    backgroundColor:'white',
    width: 25,
    height: 2,
    // marginBottom: 23,
    // borderRadius:10,
    left:10,
    marginTop:7,
  },

})
