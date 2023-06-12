import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faSquareCheck,faBell,faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
export function Notification(){
    return(
        <>
        <div className="container text-white">
              <div class="row col-12 bg-primary p-4 ml-1 mt-5"><h5> <FontAwesomeIcon icon={faSquareCheck} /> Information Message</h5></div>
              <div class="row col-12 bg-warning col-12  ml-1 p-4 mt-4"> <h5> <FontAwesomeIcon icon={faSquareCheck} /> success Message</h5></div>
              <div class="row col-12 bg-info  p-4 mt-4 ml-1"><h5> <FontAwesomeIcon icon={faBell} /> Warning Message</h5> </div>
              <div class="row col-12 bg-danger p-4 mt-4 ml-1"><h5> <FontAwesomeIcon icon={faCircleExclamation} /> Error Message</h5> </div>
        </div>
        </>
    );
}