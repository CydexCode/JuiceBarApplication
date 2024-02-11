import React,{useState} from 'react'
import { Grid, InputAdornment,makeStyles } from '@material-ui/core'
import Form from "../../layouts/Form"
import { Input, Select, Button } from "../../controls";
import { useForm } from '../../hooks/useForm';

const pMethods = [
  {id:'none', title:'Select'},
  {id:'Cash', title:'Cash'},
  {id:'Card', title:'Card'},
]

const useStyles = makeStyles(theme =>({
  ad
}))

export default function OrderForm(props) {

const { values, errors, handleInputChange } = props;

  return (
    <Form>
    <Grid container>
      <Grid item xs={6}>
        <Input
          disabled
          label="Order Number"
          name="orderNumber"
          value = {values.orderNumber}
          InputProps= {{
            startAdornment : <InputAdornment 
            position="start">#</InputAdornment>
          }}
        />
              <Select
              label="Customer"
               name="customerId"
               value = {values.customerId}
               onChange = {handleInputChange}
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
               onChange = {handleInputChange}
               options = {pMethods}
               />
        <Input
          disabled
          label="Grand Total"
          name="gTotal"
          value = {values.gTotal}
          InputProps = {{
            startAdornment : <InputAdornment 
            position="start">$</InputAdornment>
          }}
        />
         
      </Grid>
    </Grid>
  </Form>
      
    
  )
}
