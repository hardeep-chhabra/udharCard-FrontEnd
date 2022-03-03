import { StyleSheet, Text, View, useColorScheme, Platform, KeyboardAvoidingView, TouchableOpacity, Dimensions, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { Button, Input, Image } from 'react-native-elements'
import { Colors} from 'react-native/Libraries/NewAppScreen';

const screenHeight = Dimensions.get('screen')['height']


const LoginScreen = () => {

    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
    // };

    const isDarkMode = useColorScheme() === 'dark';
    console.log('000000000000000000000000', screenHeight)




  return (
    <KeyboardAvoidingView style={styles.viewContainer} >
        {/* <Input style={styles.inputName} placeholder='Username' textContentType='givenName'>
            </Input> */}
        <TextInput style={styles.inputName} placeholder='Username' placeholderTextColor='black'>
        </TextInput>
        <TextInput secureTextEntry style={styles.inputPassword} placeholder='Password' placeholderTextColor='black'>
        </TextInput>
        <TouchableOpacity style={{backgroundColor:'red',flex:1/16}}>
        <Text>Press Here</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
  )


}



export default LoginScreen


const styles = StyleSheet.create({

    viewContainer: {
      flex:1,
      flexDirection:'column',
      backgroundColor:'hsl(240, 7%, 16%)',
      justifyContent:'center'
    },

    inputName: {
        backgroundColor:'white', 
        marginBottom: 30, 
        flex:1/16,
        marginHorizontal:30, 
        borderRadius:7, 
        color:'black',
        fontStyle:'italic', 
        paddingLeft:50
        // marginBottom:50
    },

    inputPassword: {
        backgroundColor:'white',
        flex:1/16, 
        marginBottom: screenHeight*0.2, 
        marginHorizontal:30, 
        borderRadius:7, 
        color:'black',
        fontStyle:'italic', 
        paddingLeft:50
    }


  });