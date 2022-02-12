import React, { useState } from "react";

const SignUp = () => {

    const [username, setUsername] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")


    async function signUpUser(event) {

        event.preventDefault()

        const response = await fetch("http://localhost:8080/api/registerUser", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                firstName,
                emailAddress,
                password
            })
        })

        const data = await response.json()
        console.log(data)
    }

    return(
        <div className="signUpDescWrap">
            <div className="signUpDescContainer">
                <h1 className="createAccountTitle">Lets Get Started!</h1>
                <h3 className="createAccountDesc">Create an account to manage your flashcards</h3>
            </div>
            <div className="signupInputField">
                <form className="signupform" onSubmit={signUpUser}>
                <div className="signUpFormCont">
                    <label><input className="userNameSignupInput" type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
                    <label><input className="firstNameSignupInput" type="text" name="firstName" id="firstName" placeholder="Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/></label>
                    <label><input className="emailSignupInput" type="email" name="emailAddress" placeholder="Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/></label>
                    <label><input className="passwordSignupInput" type="password" id="userPassword" minLength="8" name="password" placeholder="Password (8 characters minimum)" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                </div>
                <div className="signUpTermsCont">
                    <h4 className="signUpTerms">By continuing you agree to our <a className="signUpTermsLink" href="/terms">Terms and Conditions</a> and <a className="signUpPrivacyPolicyLink" href="/privacyPolicy">Privacy Policy</a></h4>
                </div>
                <div className="signUpSubmitCont">
                    <input className="signUpSumbitButton" type="submit" value="Sign Up"/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;