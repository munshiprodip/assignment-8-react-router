import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import League from "../League/League";

const Home = () => {
    const [leaguesData, setLeaguesData] = useState([]);
    useEffect(() => {
        const leaguesUrl = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(leaguesUrl)
            .then((res) => res.json())
            .then((data) => (data = data.leagues.slice(0, 15)))
            .then((data) => setLeaguesData(data));
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {leaguesData.map((league, i) => (
                        <League key={i} logo={`image${i}.png`} league={league}></League>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
