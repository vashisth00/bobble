import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function SignUp() {
  return (
    <div className="App">
 <div className="form-wrap">
          <div className="tabs">
            <h3 className="signup-tab"><a className="active" href="#signup-tab-content">Sign Up</a></h3>
            <h3 className="login-tab"><a href="#login-tab-content">Login</a></h3>
          </div>{/*.tabs*/}
          <div className="tabs-content">
            <div id="signup-tab-content" className="active">
              <form className="signup-form" action method="post">
                <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" />
                <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" />
                <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                <input type="submit" className="button" defaultValue="Sign Up" />
              </form>{/*.login-form*/}
              <div className="help-text">
                <p>By signing up, you agree to our</p>
                <p><a href="#">Terms of service</a></p>
              </div>{/*.help-text*/}
            </div>{/*.signup-tab-content*/}
            <div id="login-tab-content">
              <form className="login-form" action method="post">
                <input type="text" className="input" id="user_login" autoComplete="off" placeholder="Email or Username" />
                <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                <input type="checkbox" className="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Remember me</label>
                <input type="submit" className="button" defaultValue="Login" />
              </form>{/*.login-form*/}
              <div className="help-text">
                <p><a href="#">Forget your password?</a></p>
              </div>{/*.help-text*/}
            </div>{/*.login-tab-content*/}
          </div>{/*.tabs-content*/}
        </div>
    </div>
  );
}

export default SignUp;

