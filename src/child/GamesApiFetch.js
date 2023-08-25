import React, {useState,useEffect} from "react";
import Game from "./Game";


function GamesApiFetch(){

    const [games, setGames] = useState([]);
    const fetchGames = () => {
        console.log("start fetching")
        fetch("https://64e5ee1e09e64530d17f4522.mockapi.io/api/v1/games")
        .then(result => result.json())
        .then(
            (resolve) => {console.log("Set games");setGames(resolve)},
            (error) => {console.log("Cannot fetch")}
        )
    }

    useEffect(() => {
        console.log("Useeffect is called"); 
        fetchGames();
    }, [])


    return (
        <>
            <div>Games Fetched </div>
            {games.map(game => <Game key={game.id} {...game} />)}
        </>
    )
}

export default GamesApiFetch;