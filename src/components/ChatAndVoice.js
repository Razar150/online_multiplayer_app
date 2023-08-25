import { useState } from "react";

const ChatAndVoice = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [voiceEnabled, setVoiceEnabled] = useState(false);
  
    const handleSendMessage = message => {
      setChatMessages(prevMessages => [...prevMessages, message]);
    };
  
    const handleToggleVoice = () => {
      setVoiceEnabled(prevState => !prevState);
    };
  
    return (
      <div>
        <h2>Chat and Voice</h2>
        <div>
          <input type="text" placeholder="Enter message" />
          <button onClick={() => handleSendMessage('New message')}>Send</button>
        </div>
  
        <ul>
          {chatMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
  
        <div>
          <button onClick={handleToggleVoice}>
            {voiceEnabled ? 'Disable Voice' : 'Enable Voice'}
          </button>
          {voiceEnabled && <p>Voice chat is enabled</p>}
        </div>
      </div>
    );
  };

export default ChatAndVoice;



  