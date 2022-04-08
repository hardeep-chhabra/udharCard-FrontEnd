import React, { useEffect } from 'react'
import UISupplierClientPaymentListTab from './UISupplierClientPaymentListTab';




const ClientPaymentDetailsTab = () => {

      useEffect(() => {
        console.log('ClientPaymentDetailsTab MOUNTED');

        return () => {
        console.log('ClientPaymentDetailsTab UNMOUNTED');
        }
      })




      return (
      
        <UISupplierClientPaymentListTab />
      
      )


}

export default ClientPaymentDetailsTab
