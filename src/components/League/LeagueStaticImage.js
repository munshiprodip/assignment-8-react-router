import React from 'react';
import { useHistory } from 'react-router';

const League = (props) => {
    const {league, img} = props
   
    const history = useHistory();
    const viewDetails = (idLeague) => {
        const newPath = `details/${idLeague}`
        history.push(newPath)
    }
      
    return (
        <div className="col-md-4 my-3">     
            <div className="card text-center h-100">
                <img style={{width:"50%"}} src={`LeaugeLogo/${img}`} className="mx-auto card-img-top" alt={img}/>
                <div className="card-body">
                    <h5 className="card-title">{league.strLeague}</h5>
                    <p className="card-text">{league.strSport}</p>
                    <button onClick={()=>viewDetails(league.idLeague)} className="btn btn-primary" >Explore Details <span><i className="fas fa-long-arrow-alt-right"></i></span></button>
                </div>
            </div>
        </div>
    );
};

export default League;

