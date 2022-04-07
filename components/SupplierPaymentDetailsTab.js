import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'



const SupplierPaymentDetailsTab = () => {

  useEffect(() => {
    console.log('SupplierPaymentDetailsTab MOUNTED');

    return () => {
    console.log('SupplierPaymentDetailsTab UNMOUNTED');
    }
  })



  return (
    <View>
      <Text>SupplierPaymentDetailsTab</Text>
    </View>
  )


}

export default SupplierPaymentDetailsTab



const styles = StyleSheet.create({})