import React from 'react'
import Hero from './Hero'
import { Route, Routes } from 'react-router-dom'
import Grocery from '../../component/grocery/Grocery'
import Bakery from '../../component/bakery/Bakery'
import Chef from '../../component/chefs/Chef'
import HeroCarousel from './HeroCarousel'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <div>
                <Routes>
                    <Route path='/' element={<Hero />}/>
                    <Route path='grocery' element={<Grocery />}/>
                    <Route path='bakery' element={<Bakery />}/>
                    <Route path='chef' element={<Chef />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Home
