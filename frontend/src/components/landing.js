import React from 'react';
import "../assests/front.css"

const Landing = () => {
    return (
        
        <div>
            <h1>Welcome to LinkedIn</h1>
            <br>
            </br>
            <p>Make The Most Of Your Professional Life</p>
            

            <a href="/register"><div>
        <input type="submit" value="Register" className="btn"/>
     </div></a>
     <a href="/Login"><div>
         <input type="submit" value="Login" className="button"/>
         </div></a>
         </div>
         


    );
}

export default Landing;
