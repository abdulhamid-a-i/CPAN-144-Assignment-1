import React from "react";
import {Game} from "../types";
import { useState } from "react";

type GameCardProps = {
    game: Game;
};

export default function GameCard({game}: GameCardProps){
    const[showContent, setShowContent] = useState(false);

    function onEnter(e) {
        e.target.style.border = '3px double goldenrod';
       
    }

    function onExit(e) {
        e.target.style.border = 'none';
    }

    const toggleContent = () => {
        setShowContent(!showContent);
    };
    return (
        <div>
            <section style={{
            display:'flex',
            flexDirection:'column',
            width:'300px'
            
        }}>
            <button 
            onMouseEnter={onEnter}
            onMouseLeave={onExit}
            style={{
                textAlign:'center',
                marginBottom:'0px',
                background:"cornflowerblue"
            }} onClick={toggleContent}>
                {showContent ? 'Hide':'Show'}
            </button>
           { showContent && ( 
            <div style={{
            width:300,
            height:400,
            border:'1px solid cornflowerblue'
        }}>
                <img style={{
                    height: 300,
                width: 300}}
                src={game.poster_path}
                alt={game.title}/>

                <div>Title: {game.title}</div>
                <div>Relase Date: {game.release_date}</div>
                <div>Average Rating: {game.vote_average}/10</div>
            </div>
            
            
           )}
           </section>
           
        </div>
    )
}