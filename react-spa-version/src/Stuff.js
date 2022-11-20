import React, { Component } from 'react';

class Stuff  extends Component {
    render() {
        return (
            <div>
                <h2>Catalog</h2>
                <p>Here is our current selection of tractors.</p>

                <div className="imgbox">
                    <p>Fendt 724</p>
                    <img src="./imgs/Fendt-724.jpg" alt="Fendt 724"/>
                </div>

                <div className="imgbox">
                    <p>John Deere 6R 185</p>
                    <img src="./imgs/JD-6R-185.jpg" alt="John Deere 6R 185"/>
                </div>

                <div className="imgbox">
                    <p>Valtra Q305</p>
                    <img src="./imgs/Valtra-Q305.jpg" alt="Valtra Q305"/>
                </div>

                <div className="imgbox">
                    <p>Valtra S274</p>
                    <img src="./imgs/Valtra-S274.jpg" alt="Valtra S274"/>
                </div>

            </div>
        );
    }
}

export default Stuff;
