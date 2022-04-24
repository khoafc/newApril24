import React from "react";
import axios from "axios";

function ClearData() {
  let clear = () => {
    const namename = localStorage.getItem("email");
    console.log(namename);
    let clearAllData = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clearAllData");
      await axios({
        method: "POST",
        url: "/api/user/cleardata/",
        data: formField,
      }).then((response) => {
        alert(response.data);
      });
    };
    clearAllData();
  };

  return (
    <div className="app-style">
      <button onClick={clear}>Clear Data</button>
    </div>
  );
}

export default ClearData;
