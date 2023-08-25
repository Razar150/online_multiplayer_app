import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Game from './Game';
import GamesApiFetch from './GamesApiFetch';
import PlayerApiFetch from './PlayerApiFetch';
import GameLayout from './GameLayout';

const GameRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GameLayout />}>
                    <Route path="/games" element={<GamesApiFetch />} />
                    <Route path="/players" element={<PlayerApiFetch />} />
                    
                </Route>
            </Routes>
        </Router>
    );
};

export default GameRouter