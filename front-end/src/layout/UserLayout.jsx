import React from 'react'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/user/UserHeader'

export const UserLayout = () => {
  return (
    <div>
      <UserHeader/>
        <div className='min-h-96 bg-gray-400 flex-1 text-primary-content font-bold '>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
