import React, { useState } from "react";

export default function Textform(props) {

  const [encodetext, setEncodeText] = useState("");
  const [decodetext, setDecodeText] = useState("");
  const [email, setEmail] = useState([]);
  const [text, setText] = useState("");


  const handleUpClicked = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase','success');
  };

  const handleLoClicked = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase','success');
  };

  const handleEncodeBtn = () => {
    setEncodeText(btoa(text));
    props.showAlert('Text Encoded','success');
  };

  const handleDecodeBtn = () => {
    setDecodeText(atob(text));
    props.showAlert('Text Decoded','success');
  };

  const handleClearBtn = () => {
    setText("");
    setEmail("");
    setEncodeText("");
    setDecodeText("");
    props.showAlert('Text cleared','success');
  };



// for extracting email 
function extractEmails(inputString) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const emails = inputString.match(emailRegex) || [];
  return emails;
}

  // handling extracting email button
  function handleEeBtn() {
    
    const emails=extractEmails(text);
   
    if(emails.length===0){
      setEmail(["no email exists"]);
      props.showAlert('No email exists','danger');
    }
    else{
      setEmail(emails);
      props.showAlert('Email Extracted','success');

    }
   
  }

 

  const handleCopytext = () => {
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied','success');
  };

  const handleRemoveSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed','success');
  };

  const ConvertToUpOnChange = (event) => {
    setText(event.target.value);
  };




  return (
    <>
      <div className="container">
        <div className="form-group my-3">
          <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
          <textarea
            className="form-control border border-primary"
            id="textarea"
            rows="7"
            value={text}
            onChange={ConvertToUpOnChange}
            placeholder="Enter the text"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClicked}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClicked}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearBtn}
        >
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleEeBtn}
        >
          Extract email
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleEncodeBtn}
        >
          Encode
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleDecodeBtn}
        >
          Decode
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopytext}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        {/* text summary card */}
        <div className="card">
          <div className="card-header">
            <h3>Your text summary</h3>
          </div>
          <div className="card-body">
            <p className="card-text my-0">
              {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <p className="card-text my-0">
              {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read the text
            </p>
          </div>
        </div>

        {/* Preview card  */}

        <div className="card my-3">
          <div className="card-header">
            <h3>Preview</h3>
          </div>
          <div className="card-body">
            <p className="card-text my-0">{text.length>0?text:'Enter something to preview here'}</p>
          </div>
        </div>

        {/* Extracted email card */}
        <div className="card my-3">
          <div className="card-header">
            <h3>Extracted Email</h3>
          </div>
          <div className="card-body">
            {email.length===0?"":
            email.map((element,index)=>{
              return(
                <p key={element} className="card-text my-0">{index+1}. {element}</p>
              );
            })}
          </div>
        </div>

        {/* Encoded text card */}

        <div className="card my-3">
          <div className="card-header">
            <h3>Encoded Text</h3>
          </div>
          <div className="card-body">
            <p className="card-text my-0">{encodetext}</p>
          </div>
        </div>

        {/* Decoded text card */}
        <div className="card my-3">
          <div className="card-header">
            <h3>Decoded Text</h3>
          </div>
          <div className="card-body">
            <p className="card-text my-0">{decodetext}</p>
          </div>
        </div>
      </div>
    </>
  );
}
