import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";


useEffect(() => {
    createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll()
        .then(res => {
            setFoodItems(res.data);
            setSearchList(res.data);
        })
        .catch(err => console.log(err))

}, [])

export default function SearchFoodItems(props) {

    return(
        <div>

        </div>
    )
}
