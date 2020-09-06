import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css'

function SignUp() {
  return (
    <div>
    <div className="brand-logo">
      Your Brand Logo Here
    </div>
    <div className="form-wrap">
      <div className="tabs-content">
        <div id="signup-tab-content" className="active">
          <div>
            <div className="signup">Sign Up</div>
            <div className="create">Create Your Account</div>
            <div className="top">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
          </div>
          <div className="logos">
            <img src="../../public/fb.png" className="logo" />
            <img src="../../public/google.png" className="logo" />
          </div>
          <div className="padding-line">
            <div className="line-sep">
              <span className="line-sep2">
                or 
              </span>
            </div>
          </div>
          <form className="signup-form" action method="post">
            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="First Name" />
            <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Last Name" />
            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email Address" />
            <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
            <div className="help-text">
              <p>By clicking signing up, you agree to our <a href="#">Terms of Use</a> and our <a>Privacy Policy</a></p>
            </div>{/*.help-text*/}
            <input type="submit" className="button" defaultValue="Sign Up" />
          </form>{/*.login-form*/}
        </div>{/*.signup-tab-content*/}
      </div>{/*.tabs-content*/}
    </div>{/*.form-wrap*/}
  </div>
  );
}

export default SignUp;

