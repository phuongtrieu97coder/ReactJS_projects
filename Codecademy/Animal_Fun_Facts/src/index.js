import React,{useState,useEffect,useCallback,useMemo,
useReducer,useContext,createContext,useRed,createRef,
forwardRef,lazy,Suspense,Component,PureComponent,memo,
startTransition}
from "react";
import {BrowserRouter,Routes,Route,Outlet,Link}
from "react-router-dom";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import "./style1.scss";
import PropTypes from "prop-types";
import $ from "jquery";
import {animals} from "./test1.js";
import ocean  from  "./image/ocean.jpg";


const title = "Click an animal for a fun fact";

const background = (
  <img className="background" src={ocean} alt="ocean" />
);

let images = [animals["dolphin"], animals["lobster"], animals["starfish"]];

let displayFact = (event) => {
   $("#fact").html(event.target.alt).slideToggle(2000);
};

const animalFacts = (
  <div className="w3-center AnimalFactBlock">
    <b id='title'>{title}</b>
      
     <div className="Animal_Fact_Block_Content_Display">
        {background}
            <p id="fact"></p>

            <div className="animals">
            {images.map((img, index) => {
                return (
             
                    <img key={index}  className="animal" src={img.image} alt={img.facts}
                   role="button" onClick={displayFact}/>
                                    
                );
            })}
            </div>
     </div>
  </div>
);

var container1 = document.getElementById("root");
const root_1 = createRoot(container1);
root_1.render(animalFacts);
