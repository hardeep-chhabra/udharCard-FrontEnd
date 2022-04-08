import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectClientsData } from '../reduxSlices/infoSlice'
import UISupplierClientDetailsListTab from './UISupplierClientDetailsListTab'





const ClientDetailsListTab = () => {


      useEffect(() => {
        console.log('ClientDetailsListTab MOUNTED');

        return () => {
        console.log('ClientDetailsListTab UNMOUNTED');
        }
      })



      
    return (
      <UISupplierClientDetailsListTab />
    )

}

export default ClientDetailsListTab
