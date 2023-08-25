import { useState } from "react";
const CrossPlatform = () => {
    const [platform, setPlatform] = useState('');
  
    const handlePlatformChange = e => {
      setPlatform(e.target.value);
    };
  
    return (
      <div>
        <h2>Cross-Platform Support</h2>
        <select value={platform} onChange={handlePlatformChange}>
          <option value="">Select Platform</option>
          <option value="PC">PC</option>
          <option value="Xbox">Xbox</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>
        <p>Selected Platform: {platform}</p>
      </div>
    );
  };

export default CrossPlatform;