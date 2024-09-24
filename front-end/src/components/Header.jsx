import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex justify-between items-center w-full px-20 h-24 text-primary-content bg-slate-100'>
        <Link>
        <div className='text-3xl font-bold '>Gadget Mania</div>
        </Link>
        <ul className='flex gap-6 items-center font-semibold'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Product</Link>
        </ul>

        <button className='btn btn-outline btn-primary'>Contact us</button>

    </div>
  )
}
