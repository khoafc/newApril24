// Import the functions you need from the SDKs you need
import React from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
  const history = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        console.log(profilePic)
        const name = result.user.displayName;
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("nameuser", name);
        console.log(result);
        history("/profile");
        let Admin = async () => {
          let formField = new FormData();
          formField.append("email", email);
          formField.append("action", "add-admin");
          await axios({
            method: "POST",
            url: "/api/user/create/",
            data: formField,
          }).then(() => {});
        };
        Admin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container dark">
        <div className="about-us-style">
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
