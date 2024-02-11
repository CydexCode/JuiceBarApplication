import React from 'react'
import { List, ListItemText, Paper, ListItem, ListItemSecondaryAction, IconButton, ButtonGroup, Button, makeStyles } from '@material-ui/core';
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { roundTo2DecimalPoint } from "../../utils";

const useStyles = makeStyles(theme => ({
    paperRoot: {
        margin: '15px 0px',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover $deleteButton': {
            display: 'block'
        }
    },
    buttonGroup: {
        backgroundColor: '#E3E3E3',
        borderRadius: 8,
        '& .MuiButtonBase-root ': {
            border: 'none',
            minWidth: '25px',
            padding: '1px'
        },
        '& button:nth-child(2)': {
            fontSize: '1.2em',
            color: '#000'
        }
    },
    deleteButton: {
        display: 'none',
        '& .MuiButtonBase-root': {
            color: '#E81719'
        },
    },
    totalPerItem: {
        fontWeight: 'bolder',
        fontSize: '1.2em',
        margin: '0px 10px'
    }
}))
export default function OrderedFoodItems(props) {

    const {orderedFoodItems} = props;

  return (
   <List>
     {
    orderedFoodItems.map((item, idx)=>(

        <paper key={idx}>

        </paper>
     ))

     }
 


   </List>
  )
}
