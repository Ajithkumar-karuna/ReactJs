import React from "react";

import Rcp from './rcb-img.png';
import Csk from './csk-img.png';
import './task3.css'
  export function Superover(){
    return(
       <>
       <body>
         <div className="overbg">
            <div className="container overbg text-center">
            <div class="card overbg">
              <div class="card-body overbg">
            <h1 class="card-title text-center text-light pt-3">Super Over League</h1>
            <div className="mt-3">
                <img src={Rcp}   className="rcp-img ak"></img>  
                <img src={Csk}   className="rcp-img ak"></img>
               </div>
  </div>
  
</div></div></div>
       </body>
       </>
    );
}
