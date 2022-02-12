import React from "react";
import { useState, useEffect } from "react";
import { parseJwt } from "../utils/utils";
import { getAllDecks } from "../services/deckService";
import { getCurrentUserProfile } from "../services/loggedInUserProfile";
import ProfilePicTemp from "../Images/UserTempWhite.svg"
import EditButton from "../Images/editicon.svg"

const Profile = () => {
    const token = localStorage.getItem("user")
    const [currentUsers, setCurrentUsers] = useState([])
    const [decks, setDecks] = useState([])


    useEffect(() => {
        async function getDecks() {
          
            if (token) {
                const decodedToken = parseJwt(token)
                const userId = decodedToken.id
                if (decks.length < 1) {
                    const response = await getAllDecks(userId);
                    setDecks(response);
                  }
            }
        }
    
        getDecks();
      }, [decks.length]);

    console.log(decks.length)

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
        <div className="ProfileWrapper">
            <div className="ProfileBoxCont">
                <div className="ProfileBox">
                    <img className="editIconProfile" src={EditButton}></img>
                    <div className="ProfilePictureBox">
                        <img className="ProfilePicture" alt="Profile" src={ProfilePicTemp}/>
                    </div>
                    <h2 className="ProfileFirstName">{currentUsers.map((item) => item.firstName)}</h2>
                    <h4 className="UserBioDesc">{currentUsers.map((item) => item.bio)}</h4>
                </div>
            </div>
            <div className="LowerProfileBoxCont">
                <div className="LowerProfileBox">
                     <h3 className="amountOfDecks">{decks.length}</h3> 
                     <h5 className="decksTitle">Decks</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile;