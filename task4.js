import React from "react";
import './task4.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 export function Socialbuttons(){
    return(
        <>
       <div className="Socialbuttons-bg">
      
           <div className="btn-cent">
            <h1 className="heading text-white text-center" >Social Buttons</h1>
            <div className=" container d-flex justify-content-center">
                <button  className="btn btn-warning text-white ml-2">like</button>
                <button className="btn btn-light ml-2 ">commend</button>
                <button className="btn btn-primary text-white ml-2 ">share</button>
           
           </div>
          </div>
       </div>
        
        </>
    );
}
