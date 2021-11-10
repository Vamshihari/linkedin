import React, { useState } from "react";
import "../App.css";
import Control from "../controller/control";

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	
	const submitDetails = () => {
		const body = { email, password };
		console.log(body);
		let url = "http://localhost:1109/user";

		const success = (res) => {
			console.log("Success", res);
			alert("User created successfully")
		};
		const failure = (err) => {
			console.log("Error", err);
		};
		Control.sendRequest(
			url,
			"post",
			body,
			false,
			null,
			success,
			failure
		);
	};
    return (
        <>
        <div class="set">

      <div id="main-header">
         <div class="header-title">
            <h1><center>Linked <span class="text-primary">in</span></center></h1>
         </div>
         <div class="header-text">Make The Most Of Your Professional Life</div>
      </div>

      <section class="main-section">
         <form class="my-form">
            <div class="form-group">
               <label for="email-input">Email</label>
               <input type="email" id="email-input" onChange={(event)=>setEmail(event.target.value)} required/>
            </div>
            <div class="form-group">
               <label for="email-input">Password (6 or more characters)</label>
               <input type="password" id="password-input" onChange={(event)=>setPassword(event.target.value)} required/>
            </div>
            <div class="helper-text">
               <small>
                  By Clicking Agree and Join, You Agree to the LinkedIn
                  <span class="text-primary">
                     <a href="/">User Agreement,</a>
                     <a href="/">Privacy,Policy,</a>
                     and
                     <a href="/">Cookie Policy.</a>
                  </span>
               </small>
            </div>
            <div class="form-group">
               <input type="submit" value="Agree and Join" class="submit-btn" onClick={()=>submitDetails()} />
            </div>
            <p class="sign-in-text">
               Already on LinkedIn? <a href="/">Sign In</a>
            </p>
         </form>
      </section>

      </div>
      </>
    
   
    );
}


export default Register;