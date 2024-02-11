import React,{useState} from 'react'
import { Grid } from '@material-ui/core'
import Form from "../../layouts/Form"
import { Input, Select, Button } from "../../controls";

const pMethods = [
  {id:'none', title:'Select'},
  {id:'Cash', title:'Cash'},
  {id:'Card', title:'Card'},
]

const generateOrderNumber = () => Math.floor(10000 + Math.random() * 900000).toString();

const getFreshModelObject = () =>({
  orderMasterId :0,
  orderNumber :generateOrderNumber(),
  customerId : 0,
  pMethod : 'none',
  gTotal : 0,
  deletedOrderItemIds:'',
  orderDetails : []
})

export default function OrderForm() {
  const [values, setValues] = useState(getFreshModelObject());

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      cu
    })
  }

  return (
    <Form>
    <Grid container>
      <Grid item xs={6}>
        <Input
          disabled
          label="Order Number"
          name="orderNumber"
          value = {values.orderNumber}
        />
              <Select
              label="Customer"
               name="customerId"
               value = {values.customerId}
               options = {[
                {id:0, title : 'Select'},
                {id:1, title : 'Customer 1'},
                {id:2, title : 'Customer 2'},
                {id:3, title : 'Customer 3'},
                {id:4, title : 'Customer 4'}
                
               ]}
               />
      </Grid>
      <Grid item xs={6}>
      <Select
              label="Payment Method"
               name="pMethod"
               value = {values.pMethod}
               options = {pMethods}
               />
        <Input
          disabled
          label="Grand Total"
          name="gTotal"
          value = {values.gTotal}
        />
         
      </Grid>
    </Grid>
  </Form>
      
    
  )
}
