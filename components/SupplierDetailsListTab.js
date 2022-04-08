import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectClientsData } from '../reduxSlices/infoSlice'
import UISupplierClientDetailsListTab from './UISupplierClientDetailsListTab'





const SupplierDetailsListTab = () => {

      const clientsData = useSelector(selectClientsData)


      useEffect(() => {
        console.log('SupplierDetailsListTab MOUNTED');

        return () => {
        console.log('SupplierDetailsListTab UNMOUNTED');
        }
      })


      return (
        <UISupplierClientDetailsListTab />
      )



}

export default SupplierDetailsListTab
