import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance';
import { ProductCard } from '../components/Cards';

export const ProductPage = () => {
    const [data,setData]=useState([]);

    console.log(data,'==========data');

    const fetchProducts = async()=>{
        try {
            const response = await axiosInstance({
                method:"GET",
                url:"/product/product-list"
            });
            setData(response?.data?.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    

  return (
    <div> ProductPage
          <main className='grid grid-cols-3'>
            {data.map((value) =>(
                <ProductCard product={value} key={value?._id}/>
            ))} 
          </main>
    </div>
  )
}
