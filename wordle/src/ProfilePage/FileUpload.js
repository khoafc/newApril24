import React, { Component } from "react";
import axios from "axios";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
    this.state = {
      fileName: "",
      fileContent: "",
      comment: "",
    };
  }

  fileExtension = "";
  fileUploadAction = () => this.inputReference.current.click();

  handleFileChange = (e) => {
    localStorage.setItem("content", "");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let fileExtension = file.name.split(".").pop();
      // console.log(fileExtension)
      let comp = "";
      if (fileExtension == "") {
        comp = "";
      } else if (fileExtension === "txt") {
        comp = "The file uploaded successfully!!";
      } else if (fileExtension !== "txt") {
        comp = "Cannot upload the file";
      }
      console.log(comp);

      this.setState({
        fileName: file.name,
        fileContent: reader.result,
        comment: comp,
      });
      const content = this.state.fileContent;
      localStorage.setItem("content", content);
    };

    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };
  handleSubmit = () => {
    const namename = localStorage.getItem("email");
    const content = localStorage.getItem("content");
    console.log("KHOA");
    console.log(content);
    console.log("KHOA");

    if (content != null) {
      let CreateNote = async () => {
        let formField = new FormData();
        formField.append("content", content);
        formField.append("name", namename);
        formField.append("action", "create-post");
        await axios({
          method: "POST",
          url: "/api/product/create/",
          data: formField,
        }).then(() => {
         
            alert("Uploaded the file sucessfully");
          }
        );
      };
      CreateNote();
    }
    else{
      alert("Nothing uploaded");
    }
  };

  render() {
    return (
      <div>
        <h1> Optional-Upload your own word</h1>
        <input type="file" onChange={this.handleFileChange}></input>
        <br />
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
