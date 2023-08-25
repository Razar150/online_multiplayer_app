import React, { useState } from 'react';
import AddGame from './AddGame';
import { GameContext } from './GameContext';
import ListGames from './ListGames';

const GameDashboard = () => {
    const [ customGames, setCustomGames ] = useState([]); 
    

    const dispatchGameEvent = (actionType, Payload) => {
        switch (actionType) {
            case 'ADD_GAME':
                setCustomGames([...customGames, Payload.newGame]);
                break;
            case 'REMOVE_GAME':
                setCustomGames(customGames.filter(game => game.id !== Payload.gameId));    
                return;
            default:
                break;
    }
};

    return (
        <>
        <div>ListGames</div>
        <div><GameContext.Provider value={{ customGames, dispatchGameEvent  }}>
            <AddGame />
            <ListGames />
            </GameContext.Provider>

        </div>
        </>
    )
    };

export default GameDashboard;