import React from "react";
import './Registration.css';
function Registration()
{
    return(
        <div>

<div class="form-wrap">
  <form>
    <h1>Please Sign Up !</h1>
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Username"/>
    <input type="email" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <input type="password" placeholder="Confirm Password"/>
    <button type="submit">Sign Up</button>
  </form>
</div>
            
        </div>
    )
}
export default Registration;