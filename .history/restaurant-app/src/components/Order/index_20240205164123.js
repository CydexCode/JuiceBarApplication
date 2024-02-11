import React from 'react'
import OrderForm from './OrderForm';
import { useForm } from '../../hooks/useForm';
import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from '@material-ui/core'
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './OrderedFoodItems';


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

export default function Order() {

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  } = useForm(getFreshModelObject)


  const addFoodItem = foodItem => {
    let x = {
        orderMasterId: values.orderMasterId,
        orderDetailId: 0,
        foodItemId: foodItem.foodItemId,
        quantity: 1,
        foodItemPrice: foodItem.price,
        foodItemName: foodItem.foodItemName
    }
    setValues({
        ...values,
        orderDetails: [...values.orderDetails, x]
    })
}


const removeFoodItem = (index, id) => {
  // debugger;
  let x = { ...values };
  x.orderDetails = x.orderDetails.filter((_, i) => i != index);
  if (id != 0)
      x.deletedOrderItemIds += id + ',';
  setValues({ ...x });
}

  return (


<Grid container spacing={2}>

<Grid item xs={12}>
<OrderForm {...{ values, errors, handleInputChange }} />
            </Grid>

            <Grid item xs={6}>
                <SearchFoodItems
                 {...{ addFoodItem }}       
                />
               
            </Grid>
            <Grid item xs={6}>
                <OrderedFoodItems
                    {...{ orderedFoodItems: values.orderDetails, removeFoodItem }}
                />
            </Grid>
        </Grid>

    
  )
}
