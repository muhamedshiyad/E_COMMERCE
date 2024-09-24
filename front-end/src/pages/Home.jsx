import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className=''>
        <main className='min-h-96 bg-gray-400 flex px-24'>

           <div className='flex-1'>
           <h1 className='text-primary-content font-bold text-5xl my-5'>HI Sir,</h1>
            <p className='text-primary-content font-normal text-2xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
           </div>

            <div className='flex-1'>
                <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg" alt="loadimg" />
            </div>
        </main>

    </div>
  )
}
