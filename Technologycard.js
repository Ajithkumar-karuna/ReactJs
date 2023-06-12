import React from "react";
import './techcard.css';
import com from './images.jpeg';
import com1 from './giphy.gif';
import com2 from './image(2).jpeg';
import com3 from './computer.jpg';
export function Technologycard(){
    return(
       <>
       <body>
<div className="container">
 <div className="row">
<div  className="col-12 ">

<div class="card tech-outline ">
  <div class="card-body">
    <h5 class="card-title  pt-3 text-center display-4">Learn 4.0 Technologies</h5>
    <h4 class="card-text itemm pt-3 text-secondary text-center">Get trained alumni of NTs nd top companies like Amazon,Microsoft, Intel,<br/>Navida Qualcomm etc.Learn directly from professional involived in product<br/> Developement.</h4>
   </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 mt-3 justify-content-center ">
  <div class="col">
    <div class=" h-100 card5 cardtop3 ">
      <div class="card-body">
        <h5 class="card-title">Data Developer</h5>
        <p class="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</p>
        <div  className=" d-flex justify-content-center col-12"><img src={com} class="com1" /></div> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class=" h-100 card5 cardtop4">
      <div class="card-body">
        <h5 class="card-title">NOT Developer</h5>
        <p class="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.structured, and unstructured data.</p>
        <div  className=" d-flex justify-content-center col-12 rounded-circle  "><img src={com1} class="rounded-circle com1" /></div> 
      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 mt-3 justify-content-center ">
  <div class="col">
    <div class=" h-100 card5 cardtop3 ">
      <div class="card-body">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</p>
        <div  className=" d-flex justify-content-center col-12"><img src={com2} class=" com1" /></div> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class=" h-100 card5 cardtop4">
      <div class="card-body">
        <h5 class="card-title">ML engineer</h5>
        <p class="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.structured, and unstructured data.</p>
        <div  className=" d-flex justify-content-center col-12 rounded-circle  "><img src={com3} class="rounded-circle com1" /></div> 
      </div>
    </div>
  </div>
</div>


</div>
</div>
</div>
</body>
       </>
    );
}
