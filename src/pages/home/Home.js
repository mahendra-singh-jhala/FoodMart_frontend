import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../../user/component/navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <HeroSection />
            </div>
        </div>
    )
}

export default Home
