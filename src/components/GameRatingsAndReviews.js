const GameRatingsAndReviews = ({ ratingsAndReviews }) => {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <ul>
          {ratingsAndReviews.map(review => (
            <li key={review.id}>
              <strong>{review.username}</strong> rated the game {review.rating}/5 and said: {review.review}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GameRatingsAndReviews