import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'



const ClientPaymentDetailsTab = () => {

      useEffect(() => {
        console.log('ClientPaymentDetailsTab MOUNTED');

        return () => {
        console.log('ClientPaymentDetailsTab UNMOUNTED');
        }
      })




      return (
        <View>
          <Text>ClientPaymentDetailsTab</Text>
        </View>
      )


}

export default ClientPaymentDetailsTab



const styles = StyleSheet.create({})