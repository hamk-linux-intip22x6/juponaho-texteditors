import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="descbox">
                    <h2>Home</h2>
                    <p>Welcome to Super Company 3000. Here you can find the best second-hand tractors on the market. 
                    Whether you're upgrading your tractor or looking to get your first one, we've got you covered.</p>
                </div>

                <div className="imgbox">
                    <p>John Deere 6R 185</p>
                    <NavLink to="/stuff" className="btn">
                        <img src="./imgs/JD-6R-185.jpg" alt="JD 6R 185"/>
                    </NavLink>
                </div>
                
                <div className="imgbox">
                    <p>Valtra Q305</p>
                    <NavLink to="/stuff" className="btn">
                        <img src="./imgs/Valtra-Q305.jpg" alt="Valtra Q305"/>
                    </NavLink>
                </div>

            </div>
        );
    }
}

export default Home;
