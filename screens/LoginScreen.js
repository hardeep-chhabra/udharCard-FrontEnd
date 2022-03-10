import React from "react"
import { StyleSheet, Image, Text, View,StatusBar, TextInput, ImageBackground, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather";



export default function SignIn() {
  
  return (
    <View style={styles.SignIn}>
      <View style={styles.Group929}>
        <Text style={styles.Txt609}>Logo</Text>
        {/* <View style={styles.Group2610}>
          <Image
            style={styles.User}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A226?alt=media&token=b6802ea3-cd6b-4478-8d43-f26269ae5b50",
            }}
          />
          <Text style={styles.Txt618}>Username</Text>
        </View> */}
      <StatusBar backgroundColor="black" />
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
          style={{height:45, width:300, paddingLeft:40, backgroundColor:'white', fontSize: 12, fontFamily: "undefined", fontWeight: "400"}} />
        {/* <Icon name="user" style={styles.icon}></Icon> */}
        <Image
            style={styles.icon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A226?alt=media&token=b6802ea3-cd6b-4478-8d43-f26269ae5b50",
            }}
          />
      </View>
        <View style={styles.Group4101}>
          <Image
            style={styles.User}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A219?alt=media&token=70116d08-2e36-4de7-931c-fdf443c5a6a5",
            }}
          />
          <Text style={styles.Txt618}>Password</Text>
        </View>
        <TouchableOpacity>
        <Text style={styles.Txt667}>Forget Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.Group457}>
          <Text style={styles.Txt4104}>Sign In</Text>
        </View>
        </TouchableOpacity>
        <Text style={styles.Txt3108}>or</Text>
        <View style={styles.Group1027}>
        <TouchableOpacity>
          <View style={styles.Group484}>
            <Image
              style={styles.Surface85389450}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A232?alt=media&token=d09975cc-30bc-45b3-a84f-2578cc3a31b1",
              }}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.Group620}>
            <Image
              style={styles.Surface85324364}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A230?alt=media&token=2f5bb932-ffbf-40e4-995b-bac252ec74f1",
              }}
            />
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Line1} />
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={styles.multiple1}>Don’t have Account ? </Text>
        <Text style={styles.multiple2}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      {/* <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-34%3A237?alt=media&token=9f85432f-86de-43a1-801f-088f5b22beda",
        }}
      /> */}
    </View>
  )
}




const styles = StyleSheet.create({
  SignIn: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 0,
    paddingBottom: 34,
    paddingLeft: 36,
    paddingRight: 0,
    backgroundColor: "black",
    /*  linear-gradient(90.15deg, rgba(27,23,34,0.9) 1%, rgba(37,29,49,0.9) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 375,
    height: 667,
  },
  Group929: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt609: {
    fontSize: 16,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 87,
  },
  Group2610: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 13,
    paddingRight: 192,
    marginBottom: 25,
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
    marginBottom: 25,
    borderRadius: 5,
    backgroundColor: "rgba(229,229,229,1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },

  User: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Txt618: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Group4101: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 13,
    paddingRight: 196,
    marginBottom: 36,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
  },

  Txt618: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Txt667: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 31,
  },
  Group457: {
    paddingTop: 14,
    paddingBottom: 12,
    paddingLeft: 122,
    paddingRight: 120,
    marginBottom: 24,
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
    width: 56,
  },

  Txt3108: {
    fontSize: 16,
    fontFamily: "undefined",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 18,
  },
  Group1027: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
  },
  Group484: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 34,
    borderRadius: 17.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 35,
    height: 35,
  },
  Surface85389450: {
    width: 15,
    height: 15,
  },

  Group620: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 17.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 35,
    height: 35,
  },
  Surface85324364: {
    width: 9.11,
    height: 17,
  },

  Line1: {
    borderWidth: 0.75,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    width: 300,
    height: 0.75,
    marginBottom: 31,
  },
  // multiple1: {
  //   main: "Txt552",
  //   seg1: "[object Object]",
  //   seg2: "[object Object]",
  // },
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
    top: 132,
    left: 204,
    width: 321.86,
    height: 287.76,
  },

  inputUsername: {
    backgroundColor:'white', 
    borderWidth:1, 
    padding:10, 
    width:300,
    marginBottom:30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 5,
    
  },

  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  textInput: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700italic",
    color: "#121212",
    height: 54,
    width: 302,
    textDecorationLine: "underline",
    left: 0,
    borderWidth: 3,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 14,
    shadowColor: "white",
    shadowOffset: {
      height: 3,
      width: 3
        },
    elevation: 5,
    shadowOpacity: 0.14,
    shadowRadius: 0,
    textAlign: "center",
    letterSpacing: 2,
    lineHeight: 4
  },

  icon: {
    top: 10,
    left: 10,
    position: "absolute",
    // color: "black",
    // fontSize: 30,
    width: 25,
    height: 20
  },
  textInputStack: {
    width: 302,
    height: 54,
    marginTop: 103,
    marginLeft: 19
  }

})
