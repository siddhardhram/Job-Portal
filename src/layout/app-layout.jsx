import  Header  from '../components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <div className="grid-background"></div>
        <main className='min-h-screen'>
            <Header/>
            <Outlet/>
            
        </main>
        <div className='p-10 text-center bg-grey-800 mt-10'>
            Made By siddhu(👉ﾟヮﾟ)👉
        </div>    
    </div>
  )
}

export default AppLayout
