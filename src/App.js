import "./App.css";
import { useState } from "react";
import { encoder, decoder } from "./components/script.js";

function App() {
  const [file, setFile] = useState(undefined);
  const acceptFile = () => {
    let inputElement = document.getElementById("input-element");
    inputElement.click();
  };
  const handleOnChangeInput = (event) => {
    const files = event.target.files;
    if (files && files.length) {
      console.log(files[0].name);
      alert(`Choosen file is ${files[0].name}`);
      setFile(files[0]);
    }
  };
  const handleEncoder = () => {
    encoder(file);
  };
  const handleDecoder = () => {
    decoder(file);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
          <h2>📜 File Encoder And Decoder</h2>
        </div>
      </div>
      <div className="body-container">
        <div className="display-container">
          <div className="display-container-1" id="tree-display"></div>
          <div className="display-container-2" id="info"></div>
        </div>
        <div className="button-container">
          <div className="button-container-1" onClick={handleEncoder}>
            <p>Encode</p>
          </div>
          <div className="button-container-2">
            <input
              type="file"
              accept=".txt"
              id="input-element"
              onChange={handleOnChangeInput}
            />
            <button className="file-input-button" onClick={acceptFile}>
              <img
                src="./txt.svg"
                alt="Choose File Here"
                className="input-txt-logo"
              />
              <p className="tooltip-text">Choose File Here!</p>
            </button>
          </div>
          <div className="button-container-3" onClick={handleDecoder}>
            <p>Decode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
