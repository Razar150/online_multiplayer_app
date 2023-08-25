import { useState,useEffect } from "react";

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

  
    
    // useEffect(() => {
    //   fetchLeaderboardData().then(data => setLeaderboardData(data));
    // }, []);
  
    return (
      <div>
        <h2>Leaderboards</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((playerData, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{playerData.name}</td>
                <td>{playerData.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default Leaderboard;