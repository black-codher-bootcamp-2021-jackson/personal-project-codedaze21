import React from "react";
import SearchIcon from "../Images/Search.svg"
import { getAllDecks } from "../services/deckService";
import { getCurrentUserProfile } from "../services/loggedInUserProfile";
import { useState, useEffect } from "react";
import { parseJwt } from "../utils/utils";
// import DeckFolderImgYellow from "../Images/DeckFolderYellow.svg"
// import DeckFolderImgBlue from "../Images/DeckFolderBlue.svg"
// import DeckFolderImgPink from "../Images/DeckFolderPink.svg"
import EditIcon from "../Images/editicon.svg"
import AddIcon from "../Images/addicon.svg"
import Deck from "./Deck";
// remember to change Keanu to user.name
const Dashboard = ({name, numberOfDecks}) => {
    const [decks, setDecks] = useState([])
    const token = localStorage.getItem("user")
    const [currentUsers, setCurrentUsers] = useState([])

    useEffect(() => {
        async function getDecks() {
          
            if (token) {
                const decodedToken = parseJwt(token)
                const userId = decodedToken.id
                if (decks.length < 1) {
                    const response = await getAllDecks(userId);
                    console.log(response)
                    setDecks(response);
                  }
            }

          
        }
    
        getDecks();
      }, [decks.length]);
    //   console.log(decks[0])

      useEffect(() => {
        async function getCurrentUsers() {
          
            if (token) {
                const decodedToken = parseJwt(token)
                const userId = decodedToken.id
                // const userFirstName = defcodedToken.firstName
                
                if (currentUsers.id === userId.id) {
                    const response = await getCurrentUserProfile(userId);
                    console.log(response)
                    setCurrentUsers(response);
                    // console.log(userId)
                  }
            }

          
        }
    
        getCurrentUsers();
      }, [currentUsers.length]);
    //   check if this mapping for Current User's first name is correct
      console.log([currentUsers.map((item) => item.firstName)]) 

    return(
        <div className="dashboardwrap">
            <div className="upperDashboardCont">
                <div className="dashboardWelcomeCont">
                    {/* add users firstName here instead of string*/}
                    <h2 className="welcomeUser">Hello {currentUsers.map((item) => item.firstName)}</h2>
                    <h5 className="welcometo">Welcome to BrainSync</h5> 
                    
                </div>
                <div className="searchBarCont">
                    <form className="searchForm">
                        <label className="searchLabel">
                            {/* add value keyword to input tag */}
                            <input className="searchInput" placeholder="Search Decks" type="search"></input>
                        </label>
                        <div className="searchButtonCont">
                            <button src={SearchIcon} className="searchSubmitButton" type="submit" ><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="DecksTitleCont">
                    <h2 className="DecksTitleYour">Your</h2>
                    <h2 className="DecksTitle">Decks</h2>
                    <img className="editIcon"src={EditIcon} alt="Edit Button"></img>
                    <img className="addIcon" src={AddIcon} alt="Add Icon"></img>
                    {/* add a links to icons */}
            </div>
            <div className="DeckListWrap">
                <div className="DeckList">
                    {decks.map ((deck, index) => <Deck key={index} name={deck.deckName} numberOfCards={deck.cardsInDeck.length}/>)}
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;