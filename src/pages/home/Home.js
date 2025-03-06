import React from 'react'
import Hero from './Hero'
import { Route, Routes } from 'react-router-dom'
import Grocery from '../../user/component/grocery/Grocery'
import Bakery from '../../user/component/bakery/Bakery'
import Chef from '../../user/component/chefs/Chef'

const Home = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path='/' element={<Hero />}/>
                    <Route path='grocery' element={<Grocery />}/>
                    <Route path='bakery' element={<Bakery />}/>
                    <Route path='chef' element={<Chef />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Home
