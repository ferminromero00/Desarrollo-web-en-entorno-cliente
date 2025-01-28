import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function Fetch() {

    const [data, setData] = useState([]);

    useEffect(() => { fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => { setData(json); }) }, []);

    return (
        <>
            {data.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <img src={item.image} width={130} />
                            <p>{item.description}</p>
                            <p>Price: {item.price} € </p>
                        </div>
                    </>
                )
            })}
        </>
    )
}
