import React, { useState } from "react";
import "../App.css";
import Control from "../controller/control";

const Register = () => {
   	const submitDetails = () => {
		const body = { email, password };
		console.log(body);
		let url = "http://localhost:1109/register";
      console.log("working");

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
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	

    return (
        <>
        <div className="set">

      <div id="main-header">
         <div className="header-title">
            <h1><center>Linked <span className="text-primary">in</span></center></h1>
         </div>
         <div className="header-text">Make The Most Of Your Professional Life</div>
      </div>

      <section className="main-section">
         <form className="my-form">
            <div className="form-group">
               <label for="email-input">Email</label>
               <input type="email" id="email-input" onChange={(event)=>setEmail(event.target.value)} required/>
            </div>
            <div className="form-group">
               <label for="password-input">Password (6 or more characters)</label>
               <input type="password" id="password-input" onChange={(event)=>setPassword(event.target.value)} required/>
            </div>
            <div className="helper-text">
               <small>
                  By Clicking Agree and Join, You Agree to the LinkedIn
                  <span className="text-primary">
                     <a href="/">User Agreement,</a>
                     <a href="/">Privacy,Policy,</a>
                     and
                     <a href="/">Cookie Policy.</a>
                  </span>
               </small>
            </div>
            <div className="form-group">
               <input  value="Agree and Join" className="btn" onClick={()=>submitDetails()} />
            </div>
            <p className="sign-in-text">
               Already on LinkedIn? <a href=".">Sign In</a>
            </p>
         </form>
      </section>

      </div>
      </>
    
   
    );
}


export default Register;