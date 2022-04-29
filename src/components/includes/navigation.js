import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Homepage from '../screens/homepage/homepage';
import Properties from '../screens/properties/properties';
import Agents from '../screens/agents/agents';
import Contact from '../screens/contact/contact';
import AddProperty from '../screens/properties/addProperty'

class Nav extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path={'/'} element={<Homepage />} />
                    <Route path={'/homepage'} element={<Homepage />} />
                    <Route path='/properties' element={<Properties />} />
                    <Route path='/agents' element={<Agents />} />
                    <Route path='/contact-us' element={<Contact />} />
                    <Route path='/add-property' element={<AddProperty />} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}

export default Nav;