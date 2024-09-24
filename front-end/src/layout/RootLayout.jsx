import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <Header/>
        <div className='min-h-96 bg-gray-400 flex-1 text-primary-content font-bold text-3xl'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
