import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"




export default function OTPVerifyScreen() {
  return (
    <View style={styles.Otp_verify}>
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
          Enter the OTP Send to Your Number xxxx
        </Text>
        <View style={styles.Group052}>
          <View style={styles.Line4} />
          <Text style={styles.Txt6310}>0</Text>
          <View style={styles.Line5} />
          <Text style={styles.Txt1077}>8</Text>
          <View style={styles.Line6} />
          <Text style={styles.Txt766}>1</Text>
          <View style={styles.Line7} />
          <Text style={styles.Txt361}>5</Text>
        </View>
        <Text style={styles.multiple1}>Don’t receive the OTP ? RESEND OTP</Text>
        <View style={styles.Group12}>
          <Text style={styles.Txt708}>Verify & Proceed</Text>
        </View>
      </View>
      <Image
        style={styles.Back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A547?alt=media&token=fb280039-c85d-46d7-8a09-7bbd36b41d54",
        }}
      />
    </View>
  )
}




const styles = StyleSheet.create({
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
  },
  Txt044: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 34,
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
    borderColor: "rgba(255,",
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
    borderColor: "rgba(255,",
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
    borderColor: "rgba(255,",
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
    borderColor: "rgba(255,",
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
    main: "Txt10710",
    seg1: "[object Object]",
    seg2: "[object Object]",
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
    top: 39,
    left: 25,
    width: 30,
    height: 30,
  },
})
