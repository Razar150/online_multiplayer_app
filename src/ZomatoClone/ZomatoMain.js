import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import User from "./User";
import Home from "./Home";

const  ZomatoMain = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        < Routes>
          <Route path="/users"element={<User />} / >
          <Route path="/" element={<Home />} />
        </ Routes>
      </div>
    </Router>
  );
};

export default ZomatoMain;
