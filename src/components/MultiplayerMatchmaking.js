import React, { useState } from 'react';

// Multiplayer matchmaking and lobby creation component
const MultiplayerMatchmaking = () => {
  const [lobbyName, setLobbyName] = useState('');
  const [players, setPlayers] = useState([]);

  const handleCreateLobby = () => {
    if (lobbyName.trim() !== '') {
      setPlayers(['Player1', 'Player2', 'Player3']); // Mocking players joining the lobby
    }
  };

  return (
    <div>
      <h2>Multiplayer</h2>
      <input
        type="text"
        value={lobbyName}
        onChange={e => setLobbyName(e.target.value)}
        placeholder="Enter lobby name"
      />
      <button onClick={handleCreateLobby}>Create Lobby</button>

      <h3>Lobby Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultiplayerMatchmaking;