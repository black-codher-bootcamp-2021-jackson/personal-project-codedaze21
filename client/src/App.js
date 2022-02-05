import React, { useState, useEffect } from "react";
import {getAllDecks} from "./services/deckService";
import UserHomepage from "./components/UserHomepage";
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      
      if (decks.length < 1) {
        const response = await getAllDecks();
        console.log(response)
        setDecks(response);
      }
    }

    getDecks();
  }, [decks]);
  console.log(decks)

  return (
    <Router>
      <NavBar/>
      <UserHomepage decks={decks}/>
    </Router>
    // <div>
    //   {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)}
    // </div>
  )

}

export default App;
