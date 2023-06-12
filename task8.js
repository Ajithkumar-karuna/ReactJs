import React from "react";
import  { useState } from "react";

export function Act(){
    const [Count,setCount]=useState(0)
    // function  Count(){
    //     value(increase)
    // }
   
return(
    <>
    <body class="">
    <div class=" container-fluid ">
        <div class="row  d-flex justify-content-center pt-5">
      <div class="col-12 col-lg-6 col-md-6">
    <div class="card w-100 bg-secondary rounded-3  ">
      <div class="card-body">
      <h1 className="text-center text-light">{Count}</h1>
        <div><button className="btn bg-info rounded-pill w-100 mt-3" onClick={()=>{setCount(Count+2)}} >Add+</button> </div>
        <div> <button className=" btn bg-success rounded-pill mt-3 w-100"onClick={()=>{setCount(Count-2)}}>less-</button> </div>
        <div><button className=" btn bg-warning rounded-pill mt-3 w-100" onClick={()=>{setCount(0)}} >Reset</button></div>
       
      </div>
    </div>
  </div>
        </div>
    </div>
    </body>
    </>
    );

}