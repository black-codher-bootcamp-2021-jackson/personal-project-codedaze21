import React from "react";

const Deck = ({name, numberOfCards}) => {
    
    return(
        <div className="DeckBox" style={{height: "140px", width: "140px"}}>
            <h3 className="deckTitleBox">{name}</h3>
            <h5 className="deckCardsBox">{numberOfCards} Cards</h5>
        </div>

    )
}

export default Deck;