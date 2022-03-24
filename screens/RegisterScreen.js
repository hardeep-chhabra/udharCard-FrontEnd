import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, TextInput, StatusBar } from "react-native"
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../reduxSlices/infoSlice";



export default function RegisterScreen() {

    useEffect(() => {
        console.log('REGISTERSCREEN MOUNTED');
    
        return () => {
        console.log('REGISTERSCREEN UNMOUNTED');
        }
      })

    const navigation = useNavigation();
    const dispatch = useDispatch();



  return (
    <View style={styles.SignUp}>

      <StatusBar backgroundColor="black" />

      <View style={styles.Group696}>
        <Text style={styles.Txt698}>Logo</Text>

        <View style={styles.Group2611}>
            <TextInput
            placeholder="Username"
            multiline={false}
            keyboardAppearance="dark"
            // defaultValue="none"
            // inlineImagePadding={"null"}
            // numberOfLines={"null"}
            autoCapitalize="none"
            keyboardType="default"
            selectionColor="grey"
            disableFullscreenUI={false}
            clearTextOnFocus={false}
            autoCorrect={false}
            selectTextOnFocus={false}
            editable={true}
            placeholderTextColor='rgba(0,0,0,1)'
            // style={styles.textInput}
            style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400", borderRadius:10}} />
            <Image
                style={styles.userIcon}
                source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A226?alt=media&token=b6802ea3-cd6b-4478-8d43-f26269ae5b50",
                }}
            />
        </View>

        <View style={styles.Group2611}>
            <TextInput
            placeholder="Email Id"
            multiline={false}
            textContentType="emailAddress"
            keyboardAppearance="dark"
            // defaultValue="none"
            // inlineImagePadding={"null"}
            // numberOfLines={"null"}
            autoCapitalize="none"
            keyboardType="default"
            selectionColor="grey"
            disableFullscreenUI={false}
            clearTextOnFocus={false}
            autoCorrect={false}
            selectTextOnFocus={false}
            editable={true}
            placeholderTextColor='rgba(0,0,0,1)'
            // style={styles.textInput}
            style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400", borderRadius:10}} />
            <Image
                style={styles.userIcon}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-38%3A269?alt=media&token=e6b0d507-9cd3-4f69-83e0-cd5091558bb6",
                  }}
            />
        </View>

        <View style={styles.Group2611}>
            <TextInput
            onSubmitEditing={(event) => {
              console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', setPhoneNumber)
              dispatch(setPhoneNumber(event.nativeEvent.text))
            }}
            placeholder="Mobile Number"
            multiline={false}
            keyboardAppearance="dark"
            // defaultValue="none"
            // inlineImagePadding={"null"}
            // numberOfLines={"null"}
            autoCapitalize="none"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            selectionColor="grey"
            disableFullscreenUI={true}
            clearTextOnFocus={false}
            autoCorrect={false}
            selectTextOnFocus={false}
            editable={true}
            placeholderTextColor='rgba(0,0,0,1)'
            style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400", borderRadius:10}} />
            <Image
                style={styles.userIcon}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-39%3A322?alt=media&token=6ecd6630-b98e-45e8-bff2-18fba4c99982",
                  }}
            />
        </View>

        <View style={styles.Group2611}>
            <TextInput
            placeholder="Password"
            multiline={false}
            keyboardAppearance="dark"
            // defaultValue="none"
            // inlineImagePadding={"null"}
            // numberOfLines={"null"}
            autoCapitalize="none"
            textContentType="newPassword"
            // keyboardType="visible-password"
            selectionColor="grey"
            secureTextEntry={true}
            disableFullscreenUI={false}
            clearTextOnFocus={false}
            autoCorrect={false}
            selectTextOnFocus={false}
            editable={true}
            placeholderTextColor='rgba(0,0,0,1)'
            // style={styles.textInput}
            style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400", borderRadius:10, paddingRight:40}} />
            <Image
                style={styles.userIcon}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-38%3A259?alt=media&token=c395d71b-fb4a-42ea-a9d1-4882c8faaacd",
                  }}
                />
            <Image
            style={styles.hidePassword}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-38%3A279?alt=media&token=ee4d1214-9d40-4ad5-93d5-a04e5e4b26b9",
            }}
            />
        </View>
        
        {/* <View style={styles.Group297}>
          <Text style={styles.Txt056}>Register</Text>
        </View> */}

        <TouchableOpacity 
        onPress={(() => {
            navigation.navigate('OTPVerifyScreen')
            })}
        >
            <View style={styles.Group457}>
            <Text style={styles.Txt4104}>Register</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.Line1} />

        <TouchableOpacity onPress={(() => {
          navigation.replace('LoginScreen')
        })} style={{flexDirection:'row'}}>
        <Text style={styles.multiple1}>Do You Have Account ? </Text>
        <Text style={styles.multiple2}>SIGN IN</Text>
        </TouchableOpacity>

      </View>
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-38%3A281?alt=media&token=7a5c9cfd-72eb-48b1-9da0-a0aa6753fa09",
        }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  SignUp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 0,
    paddingBottom: 35,
    paddingLeft: 37,
    paddingRight: 0,
    backgroundColor: "black",
    /*  linear-gradient(90.15deg, rgba(27,23,34,0.9) 1%, rgba(37,29,49,0.9) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 375,
    height: 667,
    flex:1
  },

  Group696: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt698: {
    fontSize: 16,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 84,
  },
  Group982: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 11,
    paddingRight: 194,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: "rgba(229,229,229,1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },

  Group2611: {
    // display: "flex",
    // flexDirection: "row",
    // paddingTop: 14,
    // paddingBottom: 14,
    // paddingLeft: 13,
    // paddingRight: 192,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "rgba(229,229,229,1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },

  userIcon:{
    top: 12,
    left: 10,
    position: "absolute",
    // color: "black",
    // fontSize: 30,
    width: 20,
    height: 20
  },

  hidePassword: {
    top: 12,
    right: 10,
    position: "absolute",
    // color: "black",
    // fontSize: 30,
    width: 20,
    height: 20,
  },

  User: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Txt342: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Group425: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 11,
    paddingRight: 208,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: "rgba(229,229,229,1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },
  Mail: {
    width: 20,
    height: 20,
    marginRight: 11,
  },
  Txt342: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Group186: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 11,
    paddingRight: 163,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },
  Mail: {
    width: 20,
    height: 20,
    marginRight: 11,
  },
  Txt342: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Group5102: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 12,
    paddingRight: 17,
    marginBottom: 42,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },
  User: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Txt743: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginRight: 160,
  },
  Hide: {
    width: 20,
    height: 20,
  },

  Group297: {
    paddingTop: 15,
    paddingBottom: 14,
    paddingLeft: 118,
    paddingRight: 117,
    marginBottom: 45,
    borderRadius: 5,
    backgroundColor: "rgba(0,97,255,1)",
    width: 300,
    height: 50,
  },
  Txt056: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    width: 63,
    height: 19,
  },

  Line1: {
    borderWidth: 0.75,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 285,
    height: 0.75,
    marginBottom: 30,
  },
//   multiple1: {
//     main: "Txt815",
//     seg1: "[object Object]",
//     seg2: "[object Object]",
//   },

multiple1: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 31,
  },

  multiple2: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(0,97,255,1)",
    marginBottom: 31,
  },

  Group: {
    position: "absolute",
    top: 133,
    left: 203,
    width: 321.86,
    height: 287.76,
  },

  Group457: {
    paddingTop: 14,
    paddingBottom: 12,
    paddingLeft: 120,
    paddingRight: 100,
    marginBottom: 24,
    marginTop: 24,
    borderRadius: 5,
    backgroundColor: "rgba(0,97,255,1)",
    width: 300,
    height: 50,
  },

  Txt4104: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    // width: 56,
  },

})
