import Navbar from '@/components/Navbar'
import React from 'react'
import Main from './main'
import Clients from './clients'
import Functionalities from './functionalities'

const Home = () => {
    return (
        <>

            <Navbar Homenavbar={true} />

            <Main />
            <Clients />
            <Functionalities />

        </>
    )
}

export default Home