import React from 'react'
import OrderForm from './OrderForm';

export default function Order() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  } = useForm(getFreshModelObject)
  
  return (
   
      <OrderForm/>
   
  )
}
