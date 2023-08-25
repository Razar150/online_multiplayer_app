import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainElearning from './elearning/MainElearning';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElearningRouter from './elearning/ElearningRouter';
import SportsDashboard from './SportsAnalytics/SportsDashboard';
import tailwindex1 from './tailwindexamples/tailwindex1';
import MultiplayerGamePlatform from './OnlineMultiplayer/GameMultiplayer';
import GameRouter from './OnlineMultiplayer/GameRouter';
import ZomatoMain from './ZomatoClone/ZomatoMain';
import GameDashboard from './Gaming/GameDashboard';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from './Bootstrap/Dashboard';
import CmsNav from './Bootstrap/CmsNav';


// import ReactDOM from 'react-dom';
// Adjust the import path as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MainElearning/>
    <ElearningRouter/> */}
    {/* <tailwindex1 /> */}
    {/* <SportsDashboard /> */}
    {/* <GameRouter /> */}
    {/* <ZomatoMain /> */}
    {/* <tailwindex1 /> */}
    {/* <GameDashboard /> */}
    <Dashboard />
    
    

    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
