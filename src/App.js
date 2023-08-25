import React from 'react';
import { useState } from 'react';
import Usermanagement from './components/Usermanagement';
import Registration from './components/Registration';
import Login from './components/Login';
import MultiplayerMatchmaking from './components/MultiplayerMatchmaking';
import GameSession from './components/GameSession';
import ChatAndVoice from './components/ChatAndVoice';
import Leaderboard from './components/Leaderboard';
import Achievements from './components/Achievements';
import CrossPlatform from './components/CrossPlatfoem';
import GameCatalog from './components/GameCatalog';


const App = () => {
  // Sample game data
  const games = [
    { id: 1, title: 'Game 1' },
    { id: 2, title: 'Game 2' },
    { id: 3, title: 'Game 3' },
  ];

  // const categories = [
  //   { id: 1, name: 'Action' },
  //   { id: 2, name: 'Adventure' },
  //   { id: 3, name: 'Puzzle' },
  // ];

  // const ratingsAndReviews = [
  //   { id: 1, username: 'User1', rating: 4, review: 'Great game!' },
  //   { id: 2, username: 'User2', rating: 3, review: 'Decent game.' },
  //   { id: 3, username: 'User3', rating: 5, review: 'Awesome game!' },
  // ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // const handleSelectCategory = categoryId => {
  //   setSelectedCategory(categoryId);
  // };

  return (
    <div className="App">
      
      <h1>Online Multiplayer Game Platform</h1>
      <Usermanagement />
      <Registration />
      <Login />
      <MultiplayerMatchmaking />
      <GameSession />
      <ChatAndVoice />
      <Leaderboard />
      <Achievements />
      <CrossPlatform />

      <GameCatalog games={games} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* <FeaturedGames games={games} /> */}

      {/* <GameCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <GameRatingsAndReviews ratingsAndReviews={ratingsAndReviews} /> */}
    </div>
  );
};


export default App;
