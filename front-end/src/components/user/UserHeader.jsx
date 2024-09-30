import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserHeader = () => {
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
        <div className='flex gap-5'>
          <Link>
               <ShoppingCart />
          </Link>
          <Link to={'/user/profile'}>
               <User />
          </Link>
        </div>
    </div>
  )
}
