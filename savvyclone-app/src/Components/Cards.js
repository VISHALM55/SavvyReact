import React from 'react'
//import { useState } from 'react';

const Cards = (props) => {
    return (
        
            <div className='card' >
                <div className='image-container'>
                    
                        <img className='product-image'src={props.pImg} ></img>
                    
                </div>
                <div className='product-description'>
                    <span>{props.pName}</span>
                    <div className='product-value'>
                        <span>&#8377;{props.pPrice}/mon</span>
                    </div>
                    <button>View Product</button>
                </div>
            </div>
        

    )
}
export default Cards;
