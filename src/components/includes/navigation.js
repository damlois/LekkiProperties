import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Homepage from '../screens/homepage/homepage';
import Properties from '../screens/properties/properties';
import Agents from '../screens/agents/agents';
import Contact from '../screens/contact/contact';;


class Nav extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isHomePage: false,
    //         pathname: ''
    //     }
    // }

    // componentDidMount() {
    //     if (window.location.pathname === '/'
    //         || window.location.pathname === '/homepage')
    //         this.setState({ isHomePage: true });
    // };

    render() {
        return (
            <Router>
                {/* {!this.state.isHomePage && <Toolbar />} */}
                {/* <div className={!this.state.isHomePage ? 'd-flex flex-wrap page-container' : ''}>
                    {!this.state.isHomePage && <Sidebar />} */}
                    <Navbar />
                    <Routes>
                        <Route path={'/'} element={<Homepage />} />
                        <Route path={'/homepage'} element={<Homepage />} />
                        <Route path='/properties' element={<Properties />} />
                        <Route path='/agents' element={<Agents />} />
                        <Route path='/contact-us' element={<Contact />} />
                    </Routes>
                {/* </div> */}
            </Router>
        )
    }
}

export default Nav;