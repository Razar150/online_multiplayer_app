import React from "react";
// import GamesApiFetch from "./GamesApiFetch";
// import PlayerApiFetch from "./PlayerApiFetch";
import GameRouter from "./GameRouter";


function GameMultiplayer(){

    
    return (
        <>
            <div>Multiplayer Games</div>
            {/* <GamesApiFetch/>
            <PlayerApiFetch/> */}
            <GameRouter/>
        </>
    )
}

export default GameMultiplayer;