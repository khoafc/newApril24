import React, { useState } from "react";
import Header from "../Components/Header/Header";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
// import { useNavigate } from "react-router-dom";
// import paths from "../Utils/paths";
import SignOut from "../GoogleAuth/SignOut";
// import Options from "../WordOption/Options";
import FileUpload from "./FileUpload";
// import ClearData from "./ClearData";
// import { useNavigate } from "react-router-dom";
// import paths from "../Utils/paths";
import Track from "./Track";
import Count from "./Count"
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProfilePage() {
  // let navigate = useNavigate();

  // function goHome() {
  //   navigate(paths.home);
  // }
  /* Hamburger Menu Implementation */
  let [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerOpenHandler = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  let hamburgerMenu = <HamburgerMenu />;
  let hamburgerBlur;
  if (hamburgerOpen) {
    hamburgerMenu = (
      <HamburgerMenu open={hamburgerOpen} close={hamburgerOpenHandler} />
    );
    hamburgerBlur = <HamburgerBlur close={hamburgerOpenHandler} />;
  }

  return (
    <div className="about-us-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      {/* <button className="back-button" onClick={goHome}>
        <ArrowBackIcon style={{ width: "5vw", height: "auto" }} />
      </button> */}
      {/* <br />
      <br />
      <br />
      <br /> */}
      <div className="top-ten">
        <h1 className="account-title">My account</h1>
        <SignOut />
      <div className="left-side">
      <Count/>
      <FileUpload />
      
      </div>
     
      <Track />
      {/* <ClearData/> */}
      {/* <Options /> */}
      {/* <br/>
      <br />
      <br />
      <br />
      <br /> */}
      
     
     
      
      </div>
      
   
    </div>
  );
}

export default ProfilePage;
