import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, TextInput, StatusBar, Animated } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { selectPhoneNumber, setPhoneNumber, setSignupUserName } from "../reduxSlices/infoSlice";



export default function RegisterScreen() {

    useEffect(() => {
        console.log('REGISTERSCREEN MOUNTED');
    
        return () => {
        console.log('REGISTERSCREEN UNMOUNTED');
        }
      })

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const phoneNumber = useSelector(selectPhoneNumber)



  return (
    <View style={styles.SignUp}>

      <StatusBar backgroundColor="black" />

      <View style={styles.Group696}>
        <Text style={styles.Txt698}>Logo</Text>

        <View style={styles.Group2611}>
            <TextInput
            onEndEditing={(event) => {
              console.log('2222222222222222222222', event.nativeEvent.text)
              dispatch(setSignupUserName(event.nativeEvent.text))
            }}
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
            onEndEditing={(event) => {
              console.log('1111111111111111111111111', event.nativeEvent.text)
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

        <TouchableOpacity 
        onPress={(async () => {
            const response = await fetch(`https://verify1-1227-pufhrk.twil.io/start-verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                to: '+917597446644',
                channel: "sms",
              }),
              });
            const json = await response.json();
            console.log('333333333333333333333333', response, json)

            json.success === true && navigation.navigate('OTPVerifyScreen')

            // navigation.navigate('OTPVerifyScreen')

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
        <Text style={styles.multiple1}>Do You Have an Account ? </Text>
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

  Group2611: {
    // display: "flex",
    // flexDirection: "row",
    // paddingTop: 14,
    // paddingBottom: 14,
    // paddingLeft: 13,
    // paddingRight: 192,
    marginBottom: 28,
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

  Line1: {
    borderWidth: 0.75,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 285,
    height: 0.75,
    marginBottom: 30,
  },

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
    marginBottom: 34,
    marginTop: 44,
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
