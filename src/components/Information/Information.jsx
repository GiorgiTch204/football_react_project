import React from "react";
import Kvara from "../IMGS/kvara.jpg";
import Mikautadze from "../IMGS/mikautadze.png";
import Mamarda from "../IMGS/mamarda.jpg";
import Kashia from "../IMGS/kashia.jpg";
import Davita from "../IMGS/davita.jpeg";

import "../Information/Information.css";
export default function Information(){

    const players = [
    { id: 1, name: "Kvara", country: "Georgian Player", img: Kvara },
    { id: 2, name: "Mikautadze", country: "Georgian Player", img: Mikautadze },
    { id: 3, name: "Mamarda", country: "Georgian Player", img: Mamarda },
    { id: 4, name: "Davita", country: "Georgian Player", img: Davita },
    { id: 5, name:"Kahia", country: "Georgian Player", img: Kashia},
    
  ]; 

    return(
        <main className="information">
            <h2 className="section-title">Top Players</h2>

            <div className="players-grid">
                {players.map((player) => (
                    <article className="player-card" key={player.id}>
                        <img src={player.img} alt={player.name} />
                        <h4>{player.name}</h4>
                        <p>{player.country}</p>
                    </article>
                ))}
            </div>
        </main>
    )
}