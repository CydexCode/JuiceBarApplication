import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';




export default function SearchFoodItems(props) {


    // const { values, setValues } = props;
    // let orderedFoodItems = values.orderDetails;

    const [foodItems, setFoodItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    // const [searchKey, setSearchKey] = useState('');
    // const classes = useStyles();

    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll()
            .then(res => {
                setFoodItems(res.data);
                setSearchList(res.data);
            })
            .catch(err => console.log(err))
    
    }, [])


    return(
        <Paper>
            <InputBase
            placeholder=""
        </Paper>
        <List>
             {
             foodItems.map((item, idx)=>(
                  <ListItem
                  key={idx}>
                    <ListItemText
                      primary={item.foodItemName} 
                      secondary = {'$'+item.price}/>
                  </ListItem>
             ))
            }
        </List>

    )

}