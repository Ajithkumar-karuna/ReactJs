
import React from "react";

// 
import { Link } from "react-router-dom";
export  function Menu(){
    return(
        <>
     {/* <nav class="navbar navbar-expand-lg navbar-dark bg-info text-dark sticky-top">
  <a class="navbar-brand" href="Home1">portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <div class="navbar-nav">
    <Link to='/Menu' className=" nav-link active">Home</Link>
          <Link to='/Congrats' className="nav-link active">congrats</Link>
           <Link to='/Superover' className="nav-link active">Super over</Link>
            <Link to='/Socialbuttons' className="nav-link active">Social Button</Link>
             <Link to='/Notification' className="nav-link active">Notification</Link>
             <Link to='/Logindisign' className="nav-link active">Login</Link>
             <Link to='/Technologycard' className="nav-link active">Techcard</Link>
             <Link to='/Act' className="nav-link active">Hook</Link>
            
    </div>
  </div>
</nav> */}



     <nav class="navbar navbar-expand-lg navbar-dark bg-info text-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav text-dark">
      <Link to='/Menu' className=" nav-link active">Home</Link>
          <Link to='/Congrats' className="nav-link active">congrats</Link>
           <Link to='/Superover' className="nav-link active">Super over</Link>
            <Link to='/Socialbuttons' className="nav-link active">Social Button</Link>
             <Link to='/Notification' className="nav-link active">Notification</Link>
             <Link to='/Logindisign' className="nav-link active">Login</Link>
             <Link to='/Technologycard' className="nav-link active">Techcard</Link>
             <Link to='/Act' className="nav-link active">Hook</Link>
            
      </div>
    </div>
  </div>
</nav> 

   
        
        </>
    );
}
