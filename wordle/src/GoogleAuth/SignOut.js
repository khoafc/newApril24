// Import the functions you need from the SDKs you need
import { useNavigate } from "react-router-dom";
import React from "react";
import { auth } from "./Firebase";
import "../ProfilePage/UserProfilePage.scss";

function SignOut() {
  const history = useNavigate();
  let photoURL = localStorage.getItem("profilePic");
  let nameUser = localStorage.getItem("nameuser");
  console.log(photoURL)

  const signOutGoogle = () => {
    auth.signOut().then((result) => {
      console.log(result);
      localStorage.clear();
      history("/");
    });
  };

  return (
    <div className="card-top-left">
      {/* <img src={AccountImg} className="account-img" /> */}
      {/* <h1 className="title2">{username}</h1> */}
      <div >
        <h1 className="title4">{nameUser}</h1>
      </div>
      <div className="">
        <img src={photoURL} className="account-img" />
      </div>
      <div className="signout">
        <button className="sign-out" onClick={signOutGoogle}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SignOut;
