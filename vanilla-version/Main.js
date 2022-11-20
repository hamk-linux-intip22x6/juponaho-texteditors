import React, { Component } from 'react';
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="innerbody">
                    <ul className="header">
                        <h1>Super Company 3000</h1>

                        <div className="nav-bar">
                            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/stuff" className="nav-link">Catalog</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        </div>
                    </ul>

                    <hr/>

                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
