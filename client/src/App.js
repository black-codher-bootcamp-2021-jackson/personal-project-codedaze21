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
// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {

  const [loggedIn, setLoggedIn] = useState(null)

  const [decks, setDecks] = useState([]);

  // useEffect(() => {
  //   async function getDecks() {
      
  //     if (decks.length < 1) {
  //       const response = await getAllDecks();
  //       console.log(response)
  //       setDecks(response);
  //     }
  //   }

  //   getDecks();
  // }, [decks]);
  // console.log(decks)

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
        <Route path="/" element={<LoginScreen decks={decks}/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
    // <div>
    //   {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)}
    // {userloggedIn ? <NavBarAfterSignIn /> : <NavBar />}
    // </div>
  )

}

export default App;
