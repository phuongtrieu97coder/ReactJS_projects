import React, {useState,memo} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
import Page1_Blockcode1 from "./test2.js";
import Page2_Blockcode1 from "./test3.js";
import Page3_Blockcode1 from "./test4.js";
import Car_img1 from "./image/car/car_wallpaper1.jpg";
import Car_img2 from "./image/car/car_wallpaper2.jpg";
import "./test1.scss";

/* 

In this project, I want to make a navbar at the top of the page to routing Page1 and Page2 webpages 
in order to present the content of them inside the main page

In this project, I practice to write Class Component, Function Component, this.state object,
, props, BrowserRouter, Routes, Route
Outlet, Link, useState, memo, React Form, React Form handle data, Hooks,
import external image media files,
 dropdown menu from Bootstrap, Grid of CSS, 
shouldComponentUpdate(), componentDidMount(),
    getSnapshotBeforeUpdate(prevProps,prevState),
    componentDidUpdate(), static getDerivedStateFromProps(props,state)
secured rendering component
sass @use
sass @forward
sass @function
sass @mixin
sass @include
sass $variable

*/


function Blockcode1(){
    return (
        <div>
            <nav className="nav fixed-top bg-dark">
                  <Link to="/" id="home_butt" title="home_butt" name="home_butt" type="button"
                  className="btn nav-link text-warning w3-hover-blue w3-hover-text-white">
                      <i className="fa fa-home"></i> HOME
                  </Link>
{/*
Home button using <Link> syntax. I want to make sure a content will be appeared 
when I click home button
*/}

                  <span className="dropdown bg-dark">
                 
                       <a  id="menu_butt" title="menu_butt" 
                        name="menu_butt" type="button"
                        data-toggle="dropdown"
                        className="btn nav-link dropdown-toggle nav-link 
                        text-success w3-hover-blue 
                        w3-hover-text-white">
                            <i className="fa fa-bars"></i>Menu
                        </a>
{
/* 
Menu button to open a dropdown menu contains 2 buttons as Page1, Page2
*/
}

                        <span id="dropdownmenu1" className="dropdown-menu" >
                        <Link to="/Page1_blockcode1" id="page1_butt" title="page1_butt" 
                        name="page1_butt" type="button" target="_self"
                        className="btn dropdown-item nav-link text-info w3-hover-blue 
                        w3-hover-text-white">
                            <i className="fa fa-globe"></i> Page1
                        </Link>


                        <Link to="/Page2_blockcode1" id="page2_butt" title="page2_butt" 
                        name="page2_butt" type="button" target="_self"
                        className="btn dropdown-item nav-link w3-text-purple w3-hover-blue
                         w3-hover-text-white">
                            <i className="fa fa-globe"></i> Page2
                        </Link>


{/*

Dropdown menu

*/}
                        </span>
                  </span>
            </nav>


            <br/><br/>

              <Outlet/>
{/*
<Outlet/> will output the content routing from different pages
*/}

        </div>
    )
}

class Blockcode2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Intro1:"Hello", // value to output below the navbar for the block of component that
//is used to routing inside this page when click "home" button
            carimg1:Car_img1, // value is the variable import into this page that represent a car image
// import Car_img1 from "./image/car/car_wallpaper1.jpg";
            carimg2:Car_img2
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    //I want to make sure component can be updated


    componentDidMount(){
        setTimeout(()=>{this.setState({Intro1:"Welcome to this Car Webpage!!!"})},6000);
    }
    // I want the "Intro1" property inside  this.state object change into "Welcome to this Car Webpage!!!"
    // after 6 second since the user open this webpage

    getSnapshotBeforeUpdate(prevProps,prevState){
           console.log(`Before being updated, Intro1 was ${prevState.Intro1}`);
    }
    // I want to know "Before being updated, Intro1 was Hello" in the console.log


    componentDidUpdate(){
        console.log(`After being updated, Intro1 was ${this.state.Intro1}`);
    }
    // I want to know "After being updated, Intro1 was Welcome to this Car Webpage!!!" in the console.log

    render(){
        return(
            <article>

                <br/><br/>

                <h1 className="w3-content">{this.state.Intro1}</h1><br/>
{/* 
"Hello" will appear first, and will turned to "Welcome to this Car Webpage!!!" after 6 second
*/}
                <img src={this.state.carimg1} alt="car_image1" width="100%" height="400px"/>
                <img src={this.state.carimg2} alt="car_image2" width="100%" height="400px"/>
{
    /*
   Output 2 images 
    */
}

            </article>


        )
    }
}

function Blockcode3(){
    return (
        <section>
{/*
Syntax for routing
*/}
            <BrowserRouter>
            
                 <Routes>

                        <Route path="/" element={<Blockcode1/>}>
                              <Route index element={<Blockcode2/>}/>
                              <Route path="Page1_blockcode1" element={<Page1_Blockcode1 spclid = "dfte35yu"/>}/>
{/*
Render Page1_Blockcode1 component from "test2.js" with props spclid="dfte35yu" that is required to be called 
to render a component contains a form from test2.js                           
*/}
                              <Route path="Page2_blockcode1" element={<Page2_Blockcode1/>}/>
                              <Route path="*" element={<Page3_Blockcode1/>}/>
                        </Route>


                 </Routes>
            
            
            </BrowserRouter>
        </section>
    )
}
ReactDOM.render(<Blockcode3/>,document.querySelectorAll("#block1")[0]);

