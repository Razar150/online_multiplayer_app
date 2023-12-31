import { useContext } from 'react';
import { GameContext } from './GameContext';


const Game = ({ game }) =>{
  const { dispatchGameEvent } = useContext(GameContext)

  const handleRemoveGame = () =>{
    dispatchGameEvent('REMOVE_GAME', { gameId: game.id })
  };
  return(
    <div className='p-4'>
      <h3>{game.name}</h3>
      <p>{game.desc}</p>
      <button className="w-32 rounded-full h-8 bg-gradient-to-r from -sky-500 to-indigo-500" onClick={handleRemoveGame}>Remove Game</button>
    </div>
  );
};

export default Game;
