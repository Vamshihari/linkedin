import React from 'react';

const Register = () => {
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
               <input type="email" id="email-input" />
            </div>
            <div class="form-group">
               <label for="email-input">Password (6 or more characters)</label>
               <input type="password" id="password-input" />
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
               <input type="submit" value="Agree and Join" class="submit-btn" />
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
