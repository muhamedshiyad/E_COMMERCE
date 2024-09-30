import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
  return (
    <div className="card  bg-slate-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={product?.image}
        alt="product"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{product?.title}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <div className="card-actions">
        <Link to={`/product-details/${product?._id}`}>
        <button className="btn btn-primary">Buy Now</button>
        </Link>
      </div>
    </div>
  </div>
  )
}
