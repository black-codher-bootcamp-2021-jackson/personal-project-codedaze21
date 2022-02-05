import React from "react";

const UserHomepage = ({decks}) => {

    return (
        <>
            {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)}
        </>
    )
}

export default UserHomepage;