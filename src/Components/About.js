import React from "react";
import AboutPng from '../Resources/AboutPng.png';
import '../CSS/About.css';

export default function About(props) {

    const darkmodestyle=props.mode==='dark'?{color:'white',backgroundColor:'black',border:'1px solid white'}: {color:'black',backgroundColor:'white'};


  return (
    <div className="container my-3" style={darkmodestyle}>
        <h1 className="text-center">About us</h1>
        
        <div class="card aboutCard mb-3" style={darkmodestyle}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={AboutPng} class="img-fluid rounded-start aboutCardImg" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">Textanion</h3>
        <p class="card-text">We Provide a number of servcies there in our Application , Here you can - </p>
        <p class="card-text">1. Convert the Case of the Text</p>
        <p class="card-text">2. Extract all Emails from the Text</p>
        <p class="card-text">3. Encode and Decode the Text</p>
        <p class="card-text">4. Copy Text</p>
        <p class="card-text">5. Remove Extra Spaces From the text</p>
        <p class="card-text"><small class="text-body-secondary">One Solution for all your text Related Problems</small></p>
        <p class="card-text my-0"><strong class="text-body-secondary">Made By : Rishabh Kanaujiya</strong></p>
        <p class="card-text my-0"><strong class="text-body-secondary">rishabhk5236@gmail.com</strong></p>
        <a class="card-text my-0" href="https://www.linkedin.com/in/rishabh-kanaujiya-49643a222/" target='_blank'><strong class="text-body-secondary" >Linked In</strong></a>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
