'use client';

import React from 'react'

const AddToCartButton = () => {
  return (
    <div>
        <button onClick={()=>console.log("Added to cart")}> Add to cart</button>
    </div>
  )
}

export default AddToCartButton;