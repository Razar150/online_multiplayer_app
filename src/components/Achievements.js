import { useState } from "react";

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
  
    // Fetch achievements data from API or other source
    // useEffect(() => {
    //   fetchAchievementsData().then(data => setAchievements(data));
    // }, []);
  
    return (
      <div>
        <h2>Achievements</h2>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Achievements;