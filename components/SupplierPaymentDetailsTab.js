import React, { useEffect } from 'react'
import UISupplierClientPaymentListTab from './UISupplierClientPaymentListTab';



const SupplierPaymentDetailsTab = () => {

  useEffect(() => {
    console.log('SupplierPaymentDetailsTab MOUNTED');

    return () => {
    console.log('SupplierPaymentDetailsTab UNMOUNTED');
    }
  })



  return (
      
    <UISupplierClientPaymentListTab />
  
  )


}

export default SupplierPaymentDetailsTab