import React from 'react'
import HeroCarousel from './HeroCarousel'
import Hero from './Hero'
import { Route, Routes } from 'react-router-dom'
import Grocery from '../../user/component/grocery/Grocery'
import Bakery from '../../user/component/Bakery/Bakery'

const Home = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path='/' element={<Hero />}/>
                    <Route path='grocery' element={<Grocery />}/>
                    <Route path='bakery' element={<Bakery />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Home
