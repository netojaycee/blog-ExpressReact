import React from 'react'
import SiderBar from '../components/Dashboard/SideBar'
import Main from '../components/Dashboard/main'
import useProtectedRoute from '../utils/guard';

export default function Dashboard() {
  useProtectedRoute();






  return (
    <>
    <div className='flex flex-row items-center'>
    <SiderBar />
    <Main />
    </div>
    
    </>
  )
}
