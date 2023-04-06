import { AntCloudOutlined } from "@ant-design/icons";
import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
// import { firebase } from "firebase/app";

import { auth } from "../firebase/firebase.js";
import firebase from "firebase/app";
import "firebase/auth";

function Login() {
  function signInRedirect() {
    return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>
          Welcome to Samvaad Chat <span>📱 </span>{" "}
        </h2>
        <div className="login-button google" onClick={signInRedirect}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
        {/* <div className="login-button facebook">
          <FacebookOutlined /> Sign in with Facebook
        </div> */}
      </div>
    </div>
  );
}

export default Login;
