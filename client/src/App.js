import React, { useState, useEffect } from "react";
import {getAllDecks} from "./services/deckService";

import {BrowserRouter as Router} from 'react-router-dom';
import '../../client/src/App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import NavBarAfterSignIn from "./components/NavbarAfterSignIn"
import LoginScreen from "./components/LoginScreen";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from './components/Dashboard'
import UserProfile from "./components/UserProfile";
import Profile from "./components/Profile";
// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {

  // const helpers = require('./utils/helpers');

  const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedIn(foundUser);
    }
  }, []);

  // const isLoggedIn = window.localStorage.getItem("user") === 'token';

  return (
    <Router>
      {loggedIn ? <NavBarAfterSignIn /> : <NavBar />}
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    // <div>
 
    // {userloggedIn ? <NavBarAfterSignIn /> : <NavBar />}
    // </div>
  )

}

export default App;
