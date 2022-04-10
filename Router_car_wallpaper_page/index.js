import React from "react";
import ReactDOM, { render } from "react-dom";
import "./test1.js";
import "./test1.scss";
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar_top_block from "./Navbar_page";
import Car_block1 from "./Car_page";
import Wallpaper_block1 from "./Wallpaper_page";
import Error_page from "./Error_page";


function Blockcode2(){
    return (
       
        


        <BrowserRouter>
        
           <Routes>
               <Route path="/" element={<Navbar_top_block/>}>

                <Route index  element={<Car_block1 cbid="15348484121337955678"/>}/>
                <Route path="Wallpaper_block1" element={<Wallpaper_block1/>}/>
                <Route path="*" element={<Error_page/>}/>

               </Route>
           </Routes>
        
        </BrowserRouter>
       
    )
}
ReactDOM.render(<Blockcode2/>,document.getElementById("block2"));