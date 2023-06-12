import React from "react";
import './task6.css';
import gif from './giphy (1).gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightToBracket,faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";
export function Logindisign(){
    return(
       <>
 <div className="linercolor">
    <div class='pt-5'>
    <div className="container actradious bg-light ">
        <div className="row">       
            <div class="col-12 col-sm-6 mt-5 margintop">
            <img src={gif} class="rounded-circle mx-auto d-block" height={"220px"}></img>
             </div>
            <div class="col-12 col-lg-6 divid">
            <h2 class="pt-5  namelast text-center">Member Login</h2>
            <div class="divform w-75 mr-5 rounded-pill mt-5 rea"> <FontAwesomeIcon icon={faEnvelope} />
            <input type={"email"} placeholder="   Email"  className="out1 butcolor1 namelast w-75 rounded-pill " /> </div><div>
            <div class="divform w-75 mr-5 rounded-pill mt-5 rea"><FontAwesomeIcon icon={faLock} />
             <input type={"password"} placeholder="   Password"  className=" namelast out1 butcolor1 w-75 rounded-pill " /> </div> </div>
            <button className="w-75 mt-5 text-center btn ml-3 rounded-pill  rea butcolor text-light p-2">Login</button>
            <h6 className="mt-5 text-dark  text-center">Forget<span className="text-success"> username/password?</span></h6>
            <h6 className="mt-5 text-success  text-center "> Create your Account  <FontAwesomeIcon icon={faRightToBracket}/></h6>
            </div>
            </div>
        </div>
    </div>
 </div>
       </>
    );
}