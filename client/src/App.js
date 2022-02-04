import React, { useState, useEffect } from "react";
import {getAllDecks} from "./services/deckService";
import Homepage from "./components/Homepage";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

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
    <>
      <Homepage decks={decks}/>
    </>
    // <div>
    //   {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)}
    // </div>
  )

}

export default App;
