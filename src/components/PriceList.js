
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Price } from './Price';

export const PriceList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/Ingredients")
            .then(res => {
                setData(res.data)
            })
    }, [])

    //console.log(item.ingredientName)
    return (
        <div className='PriceList'>
            {
                data.map(item => (
                    <Price name={item.ingredientName} price={item.price} key={item.id} />
                ))
            }
        </div>
    );
}