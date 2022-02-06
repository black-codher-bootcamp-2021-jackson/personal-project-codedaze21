import React from "react";
import getStartedImg from "../Images/getstartedimg.svg"

const LoginScreen = () => {

    return (
        <div className="homepageWrap">
            <div className="imgContainer">
                <img src={getStartedImg} alt="illustration of person signing up" className="getStartedImg"></img>
            </div>
            <div className="welcomeTextContainer">
                <h1 className="welcomeToBrainSync">Welcome to BrainSync</h1>
                <h2 className="studySmarter">Study Smarter.</h2>
                <h2 className="notLonger">Not Longer.</h2>
            </div>
            <div className="getStartedButtonContainer">
                <button className="getStartedButton">Get Started</button>
            </div>
            <div className="getStartedSignInContainer">
                <h4 className="alreadyHaveAccount">Already have an account?</h4>
                <a className="getStartedSignIn" href="">Sign In</a>
            </div>
        </div>
    )
}

export default LoginScreen;

            {/* {decks.map ((deck, index) => <h1 key={index}>{deck.deckName}</h1>)} */}