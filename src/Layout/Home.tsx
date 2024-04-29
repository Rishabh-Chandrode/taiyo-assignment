import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='layout  h-[100vh] bg-slate-600'>
        <Navbar />
        <div className='w-full  h-[90vh] flex '>
          <Sidebar />
          <Outlet />
        </div>
    </div>
  )
}

export default Home