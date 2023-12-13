import { Link } from 'react-router-dom'
import React from 'react';
import './Login.css';
function Login()
{  
    return(
        <div class="new">
        <div class="login">
        {/* <div class="login-triangle"></div> */}
        
        <h2 class="login-header">Log in</h2>
      
        <form class="login-container">
          <p><input type="email" placeholder="Email"/></p>
          <p><input type="password" placeholder="Password"/></p>
          <p><input type="submit" value="Log in"/></p>
          <Link to='/Registration'>Sign up</Link>
        </form>
      </div>
      </div>
    )
}
export default Login;