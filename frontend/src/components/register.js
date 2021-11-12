import React, { useState } from "react";
//import { set } from "react-hook-form";
import "../App.css";
import Control from "../controller/control";

const Register = () => {
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
    if (validateEmail(email) && validate(password)) {
      const body = { email, password };
      console.log(body);
      let url = "http://localhost:1109/register";
      console.log("working");

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatemsg, setValidateMsg] = useState("");

  return (
    <>
      <div className="set">
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
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="helper-text">
              <small>
                By Clicking Agree and Join, You Agree to the LinkedIn
                <span className="text-primary">
                  <a href="/">
                    User Agreement,Privacy,Policy,and Cookie Policy.
                  </a>
                </span>
              </small>
            </div>
            <div class="form-group">
              <a href="/registersecondpage">
                <input type="submit" value="Next" class="submit-btn" />
              </a>
            </div>
            <p className="sign-in-text">
              Already on LinkedIn? <a href=".">Sign In</a>
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
