const FeaturedGames = ({ games }) => {
    return (
      <div>
        <h2>Featured Games</h2>
        <ul>
          {games.map(game => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default FeaturedGames