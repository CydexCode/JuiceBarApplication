import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const useStyles = makeStyles(theme => ({
    searchPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: theme.spacing(1.5),
        flex: 1,
    },
    listRoot: {
        marginTop: theme.spacing(1),
        maxHeight: 450,
        overflow: 'auto',
        '& li:hover': {
            cursor: 'pointer',
            backgroundColor: '#E3E3E3'
        },
        '& li:hover .MuiButtonBase-root': {
            display: 'block',
            color: '#000',
        },
        '& .MuiButtonBase-root': {
            display: 'none'
        },
        '& .MuiButtonBase-root:hover': {
            backgroundColor: 'transparent'
        }
    }
}))

export default function SearchFoodItems(props) {


    // const { values, setValues } = props;
    // let orderedFoodItems = values.orderDetails;

    const [foodItems, setFoodItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const classes = useStyles();

    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll()
            .then(res => {
                setFoodItems(res.data);
                setSearchList(res.data);
            })
            .catch(err => console.log(err))
    
    }, [])


    return(

        <div>
        <Paper className = {classes.searchPaper}>
            <InputBase
            className={classes.searchInput}
            value={sea}
            placeholder="Search food items"/>
            <IconButton>
                < SearchTwoToneIcon ></SearchTwoToneIcon>
            </IconButton>
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

        </div>

    )

}