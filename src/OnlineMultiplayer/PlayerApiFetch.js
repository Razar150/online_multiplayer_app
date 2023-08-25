import React, { useEffect, useState } from 'react'

function PlayerApiFetch() {
    const [players, setPlayer] = useState([])
   const fetchPlayer = () => {
        fetch("https://64e5ee1e09e64530d17f4522.mockapi.io/api/v1/players")
        .then (result => result.json())
        .then(
                (resolve) => {setPlayer(resolve)},
                (error) => {console.log("Cannot fetch API")}
        )
    }


    useEffect(() => {
        console.log("Useeffect is called"); 
        fetchPlayer();
    }, [])


  return (
    <>
        <div>PlayerApiFetch</div>
        {players.map(player => <div key = {player.id}>{player.name}</div>)}
    </>
  )
}

export default PlayerApiFetch