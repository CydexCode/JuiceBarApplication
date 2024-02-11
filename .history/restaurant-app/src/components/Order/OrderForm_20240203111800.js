import React from 'react'
import Form from "../../layouts/Form"
import Input from "../../controls/Input"
import { Grid } from '@material-ui/core'

export default function OrderForm() {
  return (
    <Form>
      <Grid item xs={6}>
<Input
disabled = {true}
label = "Order Number"
name = "orderNumber"
/>
      </Grid>
      <Grid item xs={6}>

      </Grid>

    </Form>

      
    
  )
}
