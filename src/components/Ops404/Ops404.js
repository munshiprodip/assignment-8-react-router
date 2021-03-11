import React from 'react';
import { useHistory } from 'react-router';

const Ops404 = () => {

    const history = useHistory()
    const goHome = () => {
        const homePath = "/home";
        history.push(homePath)
    }
    return (
        <div style={{height:'100vh', color:'#fff'}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <h1>404</h1>
            <h3>Ops...!!!</h3>
            <h5>Page not found</h5>
            <button className="btn btn-info m-5" onClick={()=>goHome()}>Go Home</button>
        </div>
    );
};

export default Ops404;