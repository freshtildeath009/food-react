import React from 'react'
import About from "../component/About"
import HeroPages from '../component/HeroPages'
import Team from "../component/Team"
const AboutPage = () => {
    return (
        <div>
            <HeroPages title="ABOUT US" />
            <About />
            <Team />
        </div>
    )
}

export default AboutPage