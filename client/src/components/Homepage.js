import React from "react";
import {getAllDecks} from "../services/deckService";

const Homepage = ({decks}) => {

    return (
        <>
            {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)}
            <button onClick={getAllDecks}>Add</button>
        </>
    )
}

export default Homepage;