import React from 'react'
import HeroCarousel from './HeroCarousel'
import Hero from './Hero'
import { Route, Routes } from 'react-router-dom'
import Grocery from '../../user/component/grocery/Grocery'

const Home = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path='/' element={<Hero />}/>
                    <Route path='grocery' element={<Grocery />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Home
