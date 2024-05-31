import Navbar from '@/components/Navbar'
import React from 'react'
import Main from './main'
import Clients from './clients'

const Home = () => {
    return (
        <>

        <Navbar Homenavbar={true} />

        <div className="ml-24 p-0"><Main /></div>
        <Clients/>

        </>
    )
}

export default Home