import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance';

export const ProductDetails = () => {
  const [ProductDetails,setProductDetails]=useState({})
  const {id} = useParams();

  console.log(id);

  const fetchProductsDetails = async()=>{
    try {
      const response  = await axiosInstance({
        method:"GET",
        url:`/product/details/${id}`
      })

      setProductDetails(response?.data?.data);
      console.log(response,'========response');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProductsDetails()
  },[])

  return (
    <div className='flex'>
      <h2>ProductDetails</h2>
        <div className='flex w-full'>
          <div className='w-8/12'>
             <h1 className='text-3xl'>{ProductDetails?.title}</h1>
             <h1>{ProductDetails?.description}</h1>
             <h1>{ProductDetails?.price}</h1>
          </div>
          <div className='w-5/12'>
             <img src={ProductDetails?.imge} alt="" />
         </div>
       </div>
    </div>
  )
}
