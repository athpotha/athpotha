import React from 'react';
import firebase from "firebase/app"
import {auth} from "../../../../../Firebase"
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const ChatLogin = () =>{
    const signInWithGoogle= () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((re)=>{
          console.log(re);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      
    return (
      <div id="login-page">
        <div className="login-card">
          <h2>Welcome to Athpotha Chat</h2>

          <div className="login-button google" >
              <button onClick={signInWithGoogle}>Sign in with google</button>   
          </div>

          <br></br><br></br>

          <div className="login-button google">
          onClick={()=>auth.signInWithRedirect(new FirebaseError.auth.FacebookAuthProvider())}
              <button>Sign in with Facebook</button>              
          </div>

          
        </div>
      </div>
    );
}

export default ChatLogin;