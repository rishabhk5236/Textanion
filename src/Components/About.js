import React from "react";

export default function About(props) {

    const darkmodestyle=props.mode==='dark'?{color:'white',backgroundColor:'black',border:'1px solid white'}: {color:'black',backgroundColor:'white'};


  return (
    <div className="container my-3" style={darkmodestyle}>
        <h1 className="text-center">About us</h1>
        
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
