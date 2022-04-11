import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, StatusBar, Animated } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { selectPhoneNumber, setPhoneNumber, setSignupUserName } from "../reduxSlices/infoSlice";
import { TWILIO_SMS_OTP_BASE_URL } from '@env';
// import styles from "../Dark Mode CSS/cssRegisterScreen";
import styles from "../White Mode CSS/cssRegisterScreen";



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
              dispatch(setSignupUserName(event.nativeEvent.text))
            }}
            placeholder="Full Name"
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
            // const response = await fetch(`${TWILIO_SMS_OTP_BASE_URL}/start-verify`, {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     to: '+91' + phoneNumber,
            //     channel: "sms",
            //   }),
            //   });
            // const json = await response.json();
            // console.log('333333333333333333333333', response, json)

            // json.success === true && navigation.navigate('OTPVerifyScreen')

            // navigation.navigate('OTPVerifyScreen')
            
            navigation.navigate('ClientListDrawerScreens')

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
