import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TextInput, TouchableOpacity, Animated, Easing, StatusBar } from "react-native"




export default function OTPVerifyScreen() {


  // useEffect(() => {
  //   Animated.timing(animateTextOpacity, {
  //     toValue:1,
  //     delay:2000,
  //     duration:3000,
  //     isInteraction:true,
  //     useNativeDriver:true
  //   }).start();

  //     }, [])


    const navigation = useNavigation();

    const inputTextRef = useRef('SJDBSJHBD');
    const inputTextRef2 = useRef();
    const inputTextRef3 = useRef();
    const inputTextRef4 = useRef();

    const inputTextValue1 = useRef(0);
    const inputTextValue2 = useRef(0);
    const inputTextValue3 = useRef(0);
    const inputTextValue4 = useRef(0);

    const animatedTextOTPValue = useRef();

    const animateTextOpacity = new Animated.Value(1)


    const loginMessageAnimation = Animated.sequence([Animated.timing(animateTextOpacity, {
      toValue:1,
      delay:2000,
      duration:200,
      useNativeDriver:false
    }),
    Animated.timing(animateTextOpacity, {
      toValue:0,
      delay:100,
      duration:2000,
      useNativeDriver:false
    })])

    console.log('DDDDDDDDDDDDDDDDDDDDDDDD');


  return (
    <View style={styles.Otp_verify}>

      <StatusBar backgroundColor="black" />

      <Animated.View style={[styles.animatedViewMsg, {opacity:animateTextOpacity,
      backgroundColor:animateTextOpacity.interpolate({
        inputRange:[0,1],
        outputRange:['rgba(0,97,255,1)','black'],
      })}]}>
        <TextInput editable={false} ref={animatedTextOTPValue} style={{color:'rgba(255, 255, 255, 1)', padding:0, paddingTop:0}}>
          </TextInput>
        </Animated.View>

      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-53%3A346?alt=media&token=5016789f-0cc9-4595-adb1-027bc6a420c2",
        }}
      />

      <Image
        style={styles.Frame}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-53%3A360?alt=media&token=42dca3bf-5495-46e9-a0e8-a72d657deb90",
        }}
      />
      
      <View style={styles.Group255}>
          
        <Text style={styles.Txt905}>OTP verification</Text>

        <Text style={styles.Txt044}>
          Enter the OTP Sent to Your Number xxxx
        </Text>

        <View style={styles.container}>
        {/* <View style={styles.placeholderRow}> */}
        <TextInput
          // defaultValue="9"
          maxLength={1}
          textAlign='center'
          ref={inputTextRef}
          selectTextOnFocus={false}
          textContentType='oneTimeCode'
          keyboardType="numeric"
          numberOfLines={1}
          style={styles.placeholder}
          autoFocus
          onChangeText={(value) => {
            
            if (value!=='') {
              inputTextValue1.current = value;
              inputTextRef2.current.focus();
            }
          }}
        ></TextInput>
        <TextInput
          ref={inputTextRef2}
          maxLength={1}
          textAlign='center'
          selectTextOnFocus={false}
          numberOfLines={1}
          textContentType='oneTimeCode'
          keyboardType="numeric"
          style={styles.placeholder2}
          onChangeText={(value) => {

            if (value!=='') {
              inputTextValue2.current = value;
              inputTextRef3.current.focus()
            }

          }}
        ></TextInput>
        <TextInput
          ref={inputTextRef3}
          maxLength={1}
          textAlign='center'
          selectTextOnFocus={false}
          numberOfLines={1}
          textContentType='oneTimeCode'
          keyboardType="numeric"
          keyboardAppearance='light'
          style={styles.placeholder3}
          onChangeText={(value) => {

            if (value!=='') {
              inputTextValue3.current = value;
              inputTextRef4.current.focus()
            }

          }}
        ></TextInput>
        <TextInput
          ref={inputTextRef4}
          maxLength={1}
          textAlign='center'
          selectTextOnFocus={false}
          numberOfLines={1}
          textContentType='oneTimeCode'
          keyboardType="numeric"
          style={styles.placeholder4}
          onChangeText={(value) => {
            inputTextValue4.current = value;
          }}
        ></TextInput>
      {/* </View> */}
        </View>

        <TouchableOpacity

        onPress={async () => {
          // const response = await fetch(`https://verify1-1227-pufhrk.twil.io/start-verify`, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     to: "+919662079915",
          //     channel: "sms",
          //   }),
          //   });
          // const json = await response.json();

          animatedTextOTPValue.current.setNativeProps({'text':'               OTP Resent Successfully !!!'})
          loginMessageAnimation.start(() => {
            loginMessageAnimation.reset();
          });
        }}

        style={{flexDirection:'row'}}>
        <Text style={styles.multiple1}>Didn't receive the OTP ? </Text>
        <Text style={styles.multiple2}> RESEND OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={(() => {
            // const response = await fetch(`https://verify1-1227-pufhrk.twil.io/start-verify`, {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     to: "+919662079915",
            //     channel: "sms",
            //   }),
            //   });
            // const json = await response.json();

            if (1 > 2) {
            animatedTextOTPValue.current.setNativeProps({'text':'         Please Insert the Correct OTP !!!'})
            loginMessageAnimation.start(() => {
              console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEE');
              loginMessageAnimation.reset();
            });
            console.log('GGGGGGGGGGGGGGGGGGGGGGGGG');
            console.log('HHHHHHHHHHHHHHHHHHHHH');
            }
            else {
            navigation.replace('ClientListScreen')
          }

          })}
        >
            <View style={styles.Group12}>
            <Text style={styles.Txt708}>Verify & Proceed</Text>
            </View>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity onPress={() => {
            navigation.goBack('RegisterScreen')
        }}>
      <Image
        style={styles.Back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A547?alt=media&token=fb280039-c85d-46d7-8a09-7bbd36b41d54",
        }}
      />
      </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({

container: {
        flex: 1,
        borderWidth: 0,
        borderColor: "#000000",
        flexDirection: "row",
        justifyContent:'space-evenly'
    },

placeholder: {
    fontFamily: "roboto-regular",
    color: "white",
    height: 57,
    width: 36,
    fontSize: 25,
    backgroundColor: "black",
    borderBottomColor:'white',
    borderBottomWidth:3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
        width: 3,
        height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginTop: 6,
    left:30,
    paddingBottom:7
    },

placeholder2: {
    fontFamily: "roboto-regular",
    color: "white",
    height: 65,
    width: 36,
    marginLeft: 39,
    fontSize: 25,
    backgroundColor: "black",
    borderBottomColor:'white',
    borderBottomWidth:3,
    left:30,
    marginTop: -2,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
        width: 3,
        height: 3
        },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    paddingBottom:2
    },

placeholder3: {
    fontFamily: "roboto-regular",
    color: "white",
    height: 57,
    width: 36,
    marginTop: 5,
    backgroundColor: "black",
    borderBottomColor:'white',
    borderBottomWidth:3,
    left:75,
    fontSize: 25,
    paddingBottom:10
    },

placeholder4: {
    fontFamily: "roboto-regular",
    color: "white",
    height: 43,
    width: 62,
    marginLeft: 35,
    left:80,
    height: 57,
    width: 36,
    fontSize: 25,
    backgroundColor: "black",
    borderBottomColor:'white',
    borderBottomWidth:3,
    marginTop: 4,
    paddingBottom:7
    },

    animatedViewMsg: {
      left:25,
      marginBottom:-30,
      top:70,
      },

  Otp_verify: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "black",
    /*  linear-gradient(90.15deg, rgba(27,23,34,0.9) 1%, rgba(37,29,49,0.9) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 375,
    height: 667,
    flex:1
  },

  Group: {
    position: "absolute",
    top: 133,
    left: 203,
    width: 321.86,
    height: 287.76,
  },

  Frame: {
    position: "absolute",
    top: 110,
    left: 157,
    width: 60,
    height: 92,
  },
  Group255: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 252,
    none: "0px",
    width: 237,
    height: 304,
  },
  Txt905: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 21,
    left:65
  },
  Txt044: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 34,
    left:58
  },
  Group052: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 45,
  },
  Line4: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 41,
    height: 1,
  },
  Txt6310: {
    fontSize: 25,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 31,
  },
  Line5: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 41,
    height: 1,
  },
  Txt1077: {
    fontSize: 25,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 32,
  },
  Line6: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 41,
    height: 1,
  },
  Txt766: {
    fontSize: 25,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 35,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 41,
    height: 1,
  },
  Txt361: {
    fontSize: 25,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  multiple1: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    // marginBottom: 31,
    marginLeft:90
  },

  multiple2: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(0,97,255,1)",
    // marginBottom: 31,
  },

  Group12: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 57,
    paddingRight: 52,
    borderRadius: 5,
    backgroundColor: "rgba(0,97,255,1)",
    width: 232,
    height: 50,
    left:50,
    top:50,
  },
  Txt708: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    width: 121,
    height: 20,
  },

  Back: {
    position: "absolute",
    top: 20,
    left: 10,
    width: 30,
    height: 30,
  },
})
