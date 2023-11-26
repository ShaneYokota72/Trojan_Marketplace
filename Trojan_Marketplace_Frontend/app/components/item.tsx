import React from 'react'
import { useState, useEffect } from 'react'

export default function item( props :any ) {
  const {name, description, image} = props
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  )
}
