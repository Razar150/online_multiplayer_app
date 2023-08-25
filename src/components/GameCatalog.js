import React, { useState } from 'react';

// Game catalog component
const GameCatalog = ({ games, searchQuery, setSearchQuery }) => {
  const [filteredGames, setFilteredGames] = useState(games);

  const handleSearch = e => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = games.filter(game =>
      game.title.toLowerCase().includes(query)
    );
    setFilteredGames(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search games"
      />

      <ul>
        {filteredGames.map(game => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameCatalog;