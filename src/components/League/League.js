import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const League = (props) => {
    
    const [leagueData, setLeagueData] = useState();
    const {league, img} = props

    useEffect(()=>{
        const leagueUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${league.idLeague}`;
        fetch(leagueUrl)
        .then(res => res.json())
        .then(data=> setLeagueData(data.leagues[0]))
      }, [league])

    const history = useHistory();
    const viewDetails = (idLeague) => {
        const newPath = `details/${idLeague}`
        history.push(newPath)
    }
      
    return (
        <div className="col-md-4 my-3">     
            <div style={{backgroundColor: '#050505', color: '#7e7b7b'}} className="card text-center h-100 py-5">
                <img style={{width:"50%"}} src={leagueData?.strLogo} className="mx-auto card-img-top" alt={img}/>
                <div className="card-body">
                    <h5 className="card-title">{leagueData?.strLeague}</h5>
                    <p className="card-text">{leagueData?.strSport === "Soccer"? "Football" : leagueData?.strSport }</p>
                    <button onClick={()=>viewDetails(leagueData?.idLeague)} className="btn btn-dark" >Explore Details <span><i className="fas fa-long-arrow-alt-right"></i></span></button>
                </div>
            </div>
        </div>
    );
};

export default League;

