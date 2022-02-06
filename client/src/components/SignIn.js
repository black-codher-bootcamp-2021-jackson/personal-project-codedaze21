import React, { useState } from "react";

const SignIn = () => {

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser(event) {

        event.preventDefault()

        const response = await fetch("http://localhost:8080/api/loginUser", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailAddress,
                password
            })
        })

        const data = await response.json()
        console.log(data)
    }

    return(
        <div className="signInDescWrap">
            <div className="signInDescContainer">
                <h1 className="signInTitle">Lets Sign In!</h1>
                <h3 className="signInDesc">Sign into your account to manage your flashcards</h3>
            </div>
            <form onSubmit={loginUser}>
                <div className="signInInputField">
                    <label><input className="emailSignInInput" type="text" name="emailAddress" placeholder="Email" required={true} value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/></label>
                    <label><input className="passwordSignInInput" type="password" id="userPassword" minLength="8" name="password" placeholder="Password (8 characters minimum)" required={true} value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                </div>
                <div className="signInTermsCont">
                    <h4 className="signInTerms">By continuing you agree to our <a className="signInTermsLink" href="/terms">Terms and Conditions</a> and <a className="signInPrivacyPolicyLink" href="/privacyPolicy">Privacy Policy</a></h4>
                </div>
                <div className="signInSubmitCont">
                    <input className="signInSumbitButton" type="submit" value="Sign In"/>
                </div>
            </form>
        </div>
    )
}

export default SignIn;