import Navbar from '@/components/Navbar'
import React from 'react'
import Main from './main'
import Clients from './clients'

const Home = () => {
    return (
        <>

            <Navbar Homenavbar={true} />

            <Main />
            <Clients />

        </>
    )
}

export default Home