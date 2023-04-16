import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "./../../firebase.init";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="btn-container">
      {user ? (
        <button onClick={handleGoogleSignOut} className="login-btn2">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="login-btn2">
          Go to Login
        </button>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
