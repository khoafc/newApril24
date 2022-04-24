import React, { useState } from "react";
import Header from "../Components/Header/Header";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
// import { useNavigate } from "react-router-dom";
// import paths from "../Utils/paths";
import SignOut from "../GoogleAuth/SignOut";
import Options from "../WordOption/Options";
import FileUpload from "./FileUpload";

import Track from "./Track";

function ProfilePage() {
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
      <FileUpload />
      <Options />
      <SignOut />
      <Track />
    </div>
  );
}

export default ProfilePage;
