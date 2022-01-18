import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'
import Navbar from './Components/Nabvar'
import Home from './Components/Home'
import Tournaments from './Components/Tournaments'
import Players from './Components/Players'
import Results from './Components/Results'
import News from './Components/News'
import Contact from './Components/Contact'
import Login from './Components/Cards/Login'
import Register from './Components/Cards/Register'
import Profile from './Components/Cards/Profile'
import Error from './Components/Error'
import Footer from './Components/Footer'



const App = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/news" element={<News />}></Route>
                <Route exact path="/results" element={<Results />}></Route>
                <Route exact path="/players" element={<Players />}></Route>
                <Route exact path="/tournaments" element={<Tournaments />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/profile" element={<Profile />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
