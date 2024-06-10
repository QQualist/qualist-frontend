import Navbar from '@/components/Navbar'
import React from 'react'
import Main from './main'
import Clients from './clients'
import Functionalities from './functionalities'
import Feedback from './feedback'
import Footer from './footer'

const Home = () => {
    return (
        <>

            <Navbar Homenavbar={true} />

            <Main />
            <Clients />
            <Functionalities />
            <Feedback />
            <Footer />

        </>
    )
}

export default Home