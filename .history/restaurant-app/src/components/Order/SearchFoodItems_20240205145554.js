import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    useEffect(() => {
        let x = [...foodItems];
        x = x.filter(y => {
            return y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase())
                // && orderedFoodItems.every(item => item.foodItemId != y.foodItemId)
        });
        setSearchList(x);
    }, [searchKey])

    return(

        <div>
        <Paper className = {classes.searchPaper}>
            <InputBase
            className={classes.searchInput}
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            placeholder="Search food items"/>
            <IconButton>
                < SearchTwoToneIcon ></SearchTwoToneIcon>
            </IconButton>
        </Paper>

   

        <List className={classes.list}>
             {
             searchList.map((item, idx)=>(
                  <ListItem
                  key={idx}>
                    <ListItemText
                      primary={item.foodItemName} 
                      secondary = {'$'+item.price}/>
                       <ListItemSecondaryAction>
                                <IconButton>
                                    <PlusOneIcon></PlusOneIcon>
                                    <ArrowForwardIosIcon/>
                                </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                 
             ))
            }
        </List>

        </div>

    )

}