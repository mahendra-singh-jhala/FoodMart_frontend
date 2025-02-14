import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../../user/component/navbar/Navbar'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <HeroSection />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
