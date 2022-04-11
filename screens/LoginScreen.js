import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react"
import { Image, Text, View,StatusBar, TextInput, TouchableOpacity, Animated, BackHandler, Alert } from "react-native"
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { selectPhoneNumber, setPhoneNumber, setSignupUserName } from "../reduxSlices/infoSlice";
import { DEV_DJANGO_BASE_URL, TWILIO_SMS_OTP_BASE_URL } from '@env';
// import styles from "../Dark Mode CSS/cssLoginScreen";
import styles from "../White Mode CSS/cssLoginScreen";



export default function SignIn() {  
  
  const navigation = useNavigation();

  const animateTextOpacity = new Animated.Value(0)

  const messageAnimatedView = useRef(0);
  const phoneNumber = useSelector(selectPhoneNumber)
  const dispatch = useDispatch();

  const failLoginMessageAnimation = Animated.sequence([Animated.timing(animateTextOpacity, {
        toValue:1,
        delay:100,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(animateTextOpacity, {
        toValue:0,
        delay:100,
        duration:3000,
        useNativeDriver:true
      })])



  useEffect(() => {
    console.log('LOGINSCREEN MOUNTED');

    return () => {
    console.log('LOGINSCREEN UNMOUNTED');
    }
  })

  useEffect(() => {

    const backAction = () => {
      Alert.alert("Exiting The App", "Are you sure you want to exit the App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

  }, [])


  
  
  return (
    <View style={styles.SignIn}>
      <View style={styles.Group929}>
        <Text style={styles.Txt609}>Logo</Text>

      <StatusBar backgroundColor="black" />

      <Animated.View
      ref={messageAnimatedView}
      style={[styles.animatedViewMsg, {flex:1, opacity:animateTextOpacity, display:'none'}]}>
        <TextInput
        multiline 
        editable={false} 
        value='Mobile Number Not Registered on our Server, Please Signup/Register First!!!' 
        style={styles.animatedViewText}>
          </TextInput>
        </Animated.View>

      <View style={[styles.Group2611, {display:'none'}]}>
        <TextInput
          onEndEditing={(event) => {
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
        {/* <Icon name="user" style={styles.icon}></Icon> */}
        <Image
            style={styles.userIcon}
            source={{
              uri: styles.iconsAndImages.usernameImage
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
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          selectionColor="grey"
          disableFullscreenUI={false}
          clearTextOnFocus={false}
          autoCorrect={false}
          selectTextOnFocus={false}
          secureTextEntry={true}
          editable={true}
          placeholderTextColor='rgba(0,0,0,1)'
          style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400", borderRadius:10}} />
        <Image
            style={styles.passwordIcon}
            source={{
              uri: styles.iconsAndImages.passwordImage,
            }}
          />
      </View>

        {/* <TouchableOpacity>
        <Text style={styles.Txt667}>Forget Password ?</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
        style={styles.Group457}
        onPress={(async () => {
          // CALL THE BACKEND API
          // IF SUCCESSFUL
          // const response = await fetch(`${TWILIO_SMS_OTP_BASE_URL}/start-verify`, {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify({
          //       to: '+91' + phoneNumber,
          //       channel: "sms",
          //     }),
          //     });
          // const json = await response.json();
          // navigation.navigate('OTPVerifyScreen');
          // ELSE NOT SUCCESSFUL
          messageAnimatedView.current.setNativeProps({'style':{'display':'flex'}});
          failLoginMessageAnimation.start((message) => {
            console.log('00000000000000000000', messageAnimatedView.current.setNativeProps);
            messageAnimatedView.current.setNativeProps({'style':{'display':'none'}});
            failLoginMessageAnimation.reset();
          })
        })}>
          <Text style={styles.Txt4104}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.Txt3108}>or</Text>

        <View style={styles.Group1027}>
        <TouchableOpacity>
          <View style={styles.Group484}>
            <Image
              style={styles.Surface85389450}
              source={{
                uri: styles.iconsAndImages.googleLoginImg,
              }}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.Group620}>
            <Image
              style={styles.Surface85324364}
              source={{
                uri: styles.iconsAndImages.facebookLoginImg,
              }}
            />
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.Line1} />

        <TouchableOpacity onPress={(() => {
          navigation.replace('RegisterScreen')
        })} style={{flexDirection:'row'}}>
        <Text style={styles.multiple1}>Don’t have Account ? </Text>
        <Text style={styles.multiple2}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  )
}
