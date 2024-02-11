import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



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
        <List className={classes.listRoot}>
        {
            searchList.map((item, idx) => (
                <ListItem
                    key={idx}
                    onClick={e => addFoodItem(item)}>
                    <ListItemText
                        primary={item.foodItemName}
                        secondary={'$' + item.price} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={e => addFoodItem(item)}>
                            <PlusOneIcon />
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        }
    </List>
    )
}