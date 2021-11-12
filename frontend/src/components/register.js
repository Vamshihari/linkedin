import React, { useState } from "react";
//import { set } from "react-hook-form";
import "../App.css";
import Control from "../controller/control";

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const [validatemsg, setValidateMsg] = useState("");

  const validateEmail = (email) => {
   // eslint-disable-next-line no-useless-escape
   let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
   if (email.match(regexEmail)) {
     return true;
   } else {
     setValidateMsg("enter the valid mailid");
     return false;
   }
 };
 const isUpper = (pswd) => {
   let format = /[A-Z]/;
   if (format.test(pswd)) {
     return true;
   } else {
     return false;
   }
 };
 const isLower = (pswd) => {
   let format = /[a-z]/;
   if (format.test(pswd)) {
     return true;
   } else {
     return false;
   }
 };
 const specialTest = (pswd) => {
   // eslint-disable-next-line no-useless-escape
   let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if (format.test(pswd)) {
     return true;
   } else {
     return false;
   }
 };
 const isNumber = (pswd) => {
   let hasNumber = /\d/;
   if (hasNumber.test(pswd)) {
     return true;
   } else {
     return false;
   }
 };
 const validate = (password) => {
   // let pswd=this.state.password
   let length = password.length;

   if (
     length >= 8 &&
     isUpper(password) &&
     isLower(password) &&
     specialTest(password) &&
     isNumber(password)
   ) {
     // console.log("Strong password")
     setValidateMsg("strong password");
     return true;
   } else {
     // console.log("Please enter a valid password")
     setValidateMsg("Please enter a valid password");
     return false;
   }
   //  setValidateMsg("")
 };
 // TODO remove this once
 // eslint-disable-next-line no-unused-vars
 const submitDetails = () => {
    console.log("come")
   if (validateEmail(email) && validate(password)) {
     const body = { email, password, name, surname, occupation, phonenumber };
     console.log(body);
     let url = "http://localhost:1109/register";
   //   console.log("working");

     const success = (res) => {
       console.log("Success", res);
       alert("User created successfully");
     };
     const failure = (err) => {
       console.log("Error", err);
     };
     Control.sendRequest(url, "post", body, false, null, success, failure);
   }
 };

 /**
  * Handler for managing registrationPageNumber
  */
//  const registrationPageNumberHandler = () => {

//    // validate all the data and show errors, we
//    // ???
    
//    // if no errors are there then only set the registration to page 2 
//     setregistrationPageNumber();
//  };

  // to maintain the state of page number of registration user is looking at
  const [registrationPageNumber, setregistrationPageNumber] = useState(true);

  return (
    <>
      <div className="set">
        {
          // checking for page number
          registrationPageNumber  ? (
            <>
              <div id="main-header">
                <div className="header-title">
                  <h1>
                    <center>
                      Linked <span className="text-primary">in</span>
                    </center>
                  </h1>
                </div>
                <div className="header-text">
                  Make The Most Of Your Professional Life
                </div>
              </div>

              <section className="main-section">
                <form className="my-form">
                  <div className="form-group">
                    <label for="email-input">Email</label>
                    <input
                      type="email"
                      id="email-input"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="password-input">
                      Password (6 or more characters)
                    </label>
                    <p>{validatemsg}</p>
                    <input
                      type="password"
                      id="password-input"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="helper-text">
                    <small>
                      By Clicking Agree and Join, You Agree to the LinkedIn
                      <span className="text-primary">
                        <a href=".">
                          User Agreement,Privacy,Policy,and Cookie Policy.
                        </a>
                      </span>
                    </small>
                  </div>
                  <div class="form-group">
                    
                      <button  type="submit" value="Next" class="submit-btn" onClick={() =>setregistrationPageNumber(false)}/>
                  
                  </div>
                  <p className="sign-in-text">
                    Already on LinkedIn? <a href=".">Sign In</a>
                  </p>
                </form>
              </section>
             
            </>
          ) : (
            <>
              <div id="main-header">
                <div className="header-title">
                  <h1>
                    <center>
                      Linked <span className="text-primary">in</span>
                    </center>
                  </h1>
                </div>
                <div className="header-text">
                  Make The Most Of Your Professional Life
                </div>
              </div>

              <section className="main-section">
                <form className="my-form">
                  <div className="form-group">
                    <label for="name-input">Name</label>
                    <input
                      type="name"
                      id="name-input"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="surname-input">Surname</label>
                    <input
                      type="surname"
                      id="surname-input"
                      value={surname}
                      onChange={(event) => setSurname(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="occupation-input">Occupation</label>
                    <input
                      type="occupation"
                      id="occupation-input"
                      value={occupation}
                      onChange={(event) => setOccupation(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="phone number-input">phone number</label>
                    <input
                      type="phone number"
                      id="phone number-input"
                      value={phonenumber}
                      onChange={(event) => setPhonenumber(event.target.value)}
                      required
                    />
                  </div>
                  <div className="helper-text">
                    <small>
                      By Clicking Agree and Join, You Agree to the LinkedIn
                      <span className="text-primary">
                        <a href=".">User Agreement,</a>
                        <a href=".">Privacy,Policy,</a>
                        and
                        <a href=".">Cookie Policy.</a>
                      </span>
                    </small>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="Agree and Join"
                      className="btn"
                      onClick={()=>submitDetails()}
                    /></div>
                    {/* </div> <button onClick={()=>submitDe>Back</button>
                  </div> */}
                  <p className="sign-in-text">
                    Already on LinkedIn? <a href=".">Sign In</a>
                  </p>
                </form>
              </section>
            </>
          )
        }
      </div>
    </>
  );
};

export default Register;
