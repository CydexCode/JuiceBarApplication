import React from 'react'
import { Grid } from '@material-ui/core'
import Form from "../../layouts/Form"
import Input from "../../controls/Input"
import Select from "../../controls/Select"



export default function OrderForm() {
  return (
    <Form>
    <Grid container>
      <Grid item xs={6}>
        <Input
          disabled
          label="Order Number"
          name="orderNumber"
        />
              <Select
              label="Customer"
               name="customerId"
               
               />
      </Grid>
      <Grid item xs={6}>
        <Input
          disabled
          label="Grand Total"
          name="gTotal"
        />
      </Grid>
    </Grid>
  </Form>
      
    
  )
}
