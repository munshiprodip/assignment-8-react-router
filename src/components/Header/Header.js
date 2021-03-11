import React from 'react';

const Header = () => {

    return (
        <div style={{borderRadius: 'unset'}} className="card bg-dark text-white">
            <img style={{filter: 'brightness(40%)', opacity: '0.5', height: '50vh'}} src="Banner/home.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <h1 className="card-title">SPORTSPEDIA</h1>
            <h3> Explore your foverite League</h3>
            </div>
        </div>
    );
};

export default Header;