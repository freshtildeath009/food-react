import React from 'react'
import About from '../component/About'
import Booking from '../component/Booking'
import Hero from "../component/Hero"
import Menu from '../component/Menu'
import Service from '../component/Service'
import Team from '../component/Team'
const HomePage = () => {
    return (
        <>
            <Hero />
            <Service />
            <About />
            <Menu />
            <Booking />
            <Team />

        </>
    )
}

export default HomePage

