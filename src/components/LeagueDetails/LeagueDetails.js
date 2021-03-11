import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const LeagueDetails = () => {
    
    const {idLeague} = useParams()
    const [leagueData, setLeagueData] = useState();
    const history = useHistory();

    const goHome = () =>{
        history.push('/home')
    }
    useEffect(()=>{
        const leagueUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(leagueUrl)
        .then(res => res.json())
        .then(data=> setLeagueData(data.leagues[0]))
      }, [idLeague])

      console.log(leagueData)

      const dateFormat = { month: 'long', day: 'numeric', year: 'numeric' };
      const startDate  = new Date(leagueData?.dateFirstEvent);
      console.log(startDate)

      const imageName = leagueData?.strGender !== "Male"? 'female.png' : 'male.png';
      const defaultFb ="www.facebook.com/munshiprodip"

    return (
        <>
        <div style={{borderRadius: 'unset'}} className="card bg-dark text-white">
            <img style={{filter: 'blur(5px)', opacity: '0.2', height: '52vh'}} src={leagueData?.strBanner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                <img src={leagueData?.strLogo} alt="Banner" style={{width: '200px'}} ></img> <br/> <br/> <br/>
                <button onClick={()=>goHome()} className="btn btn-dark"><span><i class="fas fa-home"></i></span> Home</button>
            </div>
        </div>

        <div className ="container">
            <div style={{backgroundColor: '#050505', color: '#7e7b7b'}} className="card my-5">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-uppercase"> {leagueData?.strLeague}</h3>
                            <p className="card-text"><span><i className="fas fa-calendar-check"></i></span> Founded :  {startDate.toLocaleDateString("en-US", dateFormat)}</p>
                            <p className="card-text"><span><i className="fas fa-flag"></i></span> Country :  {leagueData?.strCountry}</p>
                            <p className="card-text"><span><i className="fas fa-futbol"></i> </span> Sport Type : Football</p>
                            <p className="card-text"><span><i className="fas fa-mars"></i></span> Gender :  {leagueData?.strGender}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="w-100  p-3" src={`../GenderPhoto/${imageName}`} alt="..." />
                    </div>
                </div>
            </div>
            <p style={{color:'#6f6363'}} className="text-justify">{leagueData?.strDescriptionEN}</p> <br />
            <p style={{color:'#6f6363'}} className="text-justify">{leagueData?.strDescriptionIT}</p>
            <div style={{fontSize: '30px'}} className="d-flex justify-content-center pb-5">
                <a target="_blank" className="btn btn-outline-dark m-2 " href={`https://${leagueData?.strFacebook || defaultFb}`} rel="noreferrer" ><span><i class="fab fa-facebook"></i></span></a>
                <a target="_blank" className="btn btn-outline-dark m-2 " href={`https://${leagueData?.strTwitter}`} rel="noreferrer" ><span><i class="fab fa-twitter"></i></span></a>
                <a target="_blank" className="btn btn-outline-dark m-2 " href={`https://${leagueData?.strYoutube}`} rel="noreferrer" ><span><i class="fab fa-youtube"></i></span></a>
                <a target="_blank" className="btn btn-outline-dark m-2 " href={`https://${leagueData?.strWebsite}`} rel="noreferrer" ><span><i class="fas fa-globe"></i></span></a>
            </div>
        </div>
        </>
    );
};

export default LeagueDetails;