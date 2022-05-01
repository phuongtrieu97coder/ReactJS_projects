import React,{useState,useRef,useEffect,useReducer,useContext,useMemo,useCallback,createContext,memo}
from "react";
import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
import ReactDOM from "react-dom";
import "./test1.scss";
import {User1Content,User2Content,User3Content,User4Content} from "./test1.js";
import {ErrorContent} from "./test2.js";
import Comp1 from "./image/company2.jpg";

 
function Mainpage_Content_Blockcode1(){
/*
This is component contains content of navbar and content for routing
*/

    
function Login_func(passcode){   //use to call when user click login button
    if(passcode === "35365134898665"){ // if this is true, then overlay and login form will appear
        document.getElementById("overlay1").style.display = "block";
        document.getElementById("login_form").style.display = "block";
     
    }
   
}
  
    function Logout_func(passcode){ // use to call when user click logout button
        if(passcode === "35365134898665"){ // if this is true, login button, and 
            //element will id="main_content1" will appear. After that, logout button, login form,
            //and element with id="main_content2" will disappear
            document.getElementById("login_butt").style.display = "block";
            document.getElementById("logout_butt").style.display = "none";
            document.getElementById("login_form").style.display = "none";
            document.getElementById("main_content1").style.display = "block";
            document.getElementById("main_content2").style.display = "none";
        }
    }
    return (
        <div>
            <nav className="nav fixed-top bg-dark">
                 <Link to="/" id="home_butt" title="home_butt" name="home_butt"
                type="button" data-home-butt="home_butt_data" target="_self"
                className="w3-button w3-ripple w3-text-white w3-hover-aqua
                 w3-hover-text-white"  style={{fontSize:"35px"}}>
                     <i className="fa fa-home"></i> HOME
                 </Link>
    {/* if you click home button, then you will see a photo of a company on the main screen
     below nav bar  */}


                 <a id="menu_butt" title="menu_butt" name="menu_butt"
                type="button" data-menu-butt="menu_butt_data" target="_self" href="#"
                className="w3-button w3-ripple w3-hover-blue w3-text-green w3-hover-text-white"
                style={{fontSize:"35px"}}>
                    <i className="fa fa-bars"></i> MENU
                </a>
               
               
                 <a id="about_butt" title="about_butt" name="about_butt"
                type="button" data-about-butt="about_butt_data"
                className="w3-button w3-ripple w3-hover-orange w3-text-aqua
                 w3-hover-text-white" target="_self" href="#"
                style={{fontSize:"35px"}}>
                    <i className="fa fa-info"></i> ABOUT
                </a>
{/* in this program, I specified 'about' and "menu" button to decorate the page. I don't work with them */}


                 <span style={{position:"absolute",right:"0"}}>
                     {/* I want two button inside this block to stay on the right side of this webpage */}

                 <a id="login_butt" title="login_butt" name="login_butt"
                type="button" data-login-butt="login_butt_data"
                className="w3-button w3-ripple w3-hover-blue w3-text-yellow w3-hover-text-white"
                style={{fontSize:"35px"}} onClick={()=>Login_func("35365134898665")}>
                    <i className="fa fa-sign-in"></i> LOGIN
                </a>
        {/* I specified "<a>" element for login button instead of <Link> because I don't want
        this button routing anypage into this webpage.
        When user click this button, I want them declare username and password to login from
        a login form first
        */}

                <Link to="/" id="logout_butt" title="logout_butt" name="logout_butt"
                type="button" data-logout-butt="logout_butt_data"
                className="w3-button w3-ripple w3-hover-gray w3-text-purple w3-hover-text-white"
                style={{fontSize:"35px",display:"none"}} onClick={()=>Logout_func("35365134898665")}>
                    <i className="fa fa-sign-out"></i> LOGOUT
                </Link>
        {/*I use <Link> element for logout button to comeback to the main content of this webpage 
        as fast as possible */}

                 </span>
            </nav>

             <br/><br/><br/>

             <div id="main_content1">

            <Outlet/>
             </div>

             {/* <div id="main_content1">used to display the contents that are being routed by
               home button 
               After any user has logged-in, "main_content1" will disappear and 
               "main_content2" below will display
               */}
        </div>
    )
}



function Mainpage_Content_Blockcode1_Home_Page(){
    // this component contains picture of a company that user will see when they open this webpage
    // and when they click "home" button
    return (
        <div>
            <img src={Comp1} alt="company1" width="100%" height="500px"/>
        </div>
    )
}


function Mainpage_Content(){
   /*
   This component is used to routing different webpage into this page. It also contains "overlay",
   "login_form",and "main_content2" elements
   */

    return (
        <div>


        <BrowserRouter>
            
            <Routes>
                   <Route path="/" element={<Mainpage_Content_Blockcode1/>}>
                        <Route index element={<Mainpage_Content_Blockcode1_Home_Page/>}/>
                        <Route path="*" element={<ErrorContent/>}/>
                   </Route>
            </Routes>
        
        </BrowserRouter>

            <div id="overlay1" onClick={CloseLoginFormFunc}
            style={{display:"none",backgroundColor:"rgba(0, 0, 0, 0.352)",
            position:"fixed",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",zIndex:"2"}}></div>
{/* this div element is used to make an overlay. Overlay is hidden as default and just be displayed
only when user click log-in button. If user click the area around this overlay, then overlay and 
login form will be close. This overlay will be placed behind login form, and in front of the main content */}
           
           <Mainpage_Content_Blockcode2_Login_Form/>
           {/* I call an component contain syntax to make a login form */}


           <div id="main_content2" style={{display:"none"}}>
              
           </div>
{/* "main_content2" is hidden as default, and only be displayed if user has been 
successfully logged-in. The contents inside this element will be different depends on who the user is
. The syntax used to unlock the content of this element is placed inside
 "Mainpage_Content_Blockcode2_Login_Form" component */}


        </div>
    )
}


function Mainpage_Content_Blockcode2_Login_Form(){
    var [fetchuserdata,setTotaldata] = useState();
    //this useState hook will carry data that are fetching from a json file

    useEffect(()=>{  //I want to fetch and get data from demo_total_user_data.json file
        //this file locale in "public" folder

        fetch("./demo_total_user_data.json")
        .then((res)=>res.json())
        .then((data)=>setTotaldata(data))
    },[]);


    var [logindata,setLogindata] = useState({});
    //this useState hook is used to handle username and password input
    
      var HandleLogindata = (event) => {
            var name  = event.target.name;
            var value = event.target.value;
            setLogindata((val)=>({...val,[name]:value}));
      }
      //this function is used to handle username and password input data
      
      var PreventSubmit = (event) => {
        event.preventDefault();
        //First I want this form stop send data to a specific page by post request
        //If I didn't specified this, I wouldn't be able to work with index.html file anymore
        //after I specified username, password and then click log in button


      
        for (let i = 0;i<fetchuserdata.length;i++){ //I want to loop through each element inside
            //array "fetchuserdata" come from data of useState hook after get data successfully
            //from a json file

            if(fetchuserdata[i].name.includes(logindata.username1) == false && 
            fetchuserdata[i].password.includes(logindata.userpassword1) == false){
                //check to see if data from "fetchuserdata" includes both username and password
                // datainput
                //if return false => output "" into the console
                console.log("");
            }else{               
                //if return true =>
                document.getElementById("login_form").style.display = "none";//login form disappears
                document.getElementById("overlay1").style.display = "none";//overlay disappears
                document.getElementById("main_content1").style.display = "none";//main_content1 disappears
                document.getElementById("main_content2").style.display = "block";//main_content2 appears
                document.getElementById("login_butt").style.display = "none";//login button disappears
                document.getElementById("logout_butt").style.display = "block";//logout button appears

                //next, check if username input is any of the condition value below to render
                //and display to precisely content of specific user
                //After that inform user is online on the console
                if(logindata.username1 === "THP"){

                    ReactDOM.render(<User1Content/>, document.getElementById("main_content2"));
                    //User1Content, User2Content, User3Content, User4Content are components
                    //that are imported from "test1.js" file

                    console.log("User THP is online");
                }else if(logindata.username1 === "HKSL"){
                    ReactDOM.render(<User2Content/>, document.getElementById("main_content2"));
                    console.log("User HKSL is online");
                
                }else if(logindata.username1 === "BSR"){
                    ReactDOM.render(<User3Content/>, document.getElementById("main_content2"));
                    console.log("User BSR is online");
                
                }else if(logindata.username1 === "RTG"){
                    ReactDOM.render(<User4Content/>, document.getElementById("main_content2"));
                    console.log("User RTG is online");
                }else{
                    console.log("Cannot load your page!!!");
                }
            }
        }
     
           
           
            
        
      }

      return (
          <div>
             {/* In the form syntax, I'm not specifying any value inside action attribute because I
             don't want this form send data to any page through post request */}
              <form id="login_form" title="login_form" name="login_form" action=""
          method="post" target="_self" encType="multipart/form-data" data-login-form="login_form_data"
          onSubmit={PreventSubmit} style={{display:"none",position:"fixed",top:"50px",left:"300px",zIndex:"3",
          width:"700px",padding:"20px",border:"5px double yellowgreen",backgroundColor:"white",
          fontSize:"35px"}}>

                   <div className="w3-center w3-black w3-padding" style={{position:"relative",top:"0"}}>
                       {/* This block contains user log in title wil an user icon and a close "x"
                       button at the right side of this form. If user click this "x" button, then
                       login form and overlay will disappear */}
                          <h1 className="w3-text-aqua">
                              <i className="fa fa-user"></i> USER LOG-IN
                          </h1>

                          <button id="close_butt" title="close_butt" name="close_butt"
                        type="button" data-close-butt="close_butt_data"
                        className="w3-button w3-ripple w3-transparent w3-hover-red
                        w3-text-white w3-hover-text-white"
                        style={{fontSize:"35px",position:"absolute",right:"0",top:"0"}}
                         onClick={CloseLoginFormFunc}>
                            X
                        </button>
                   </div>


                 

                   <label htmlFor="username_input"><b>Username:</b></label><br/>
                   {/* username input */}
                   <input id="username_input" title="username_input" name="username1" type="text"
                   placeholder="Enter your name..." data-username-input="username_input_data"
                   style={{width:"100%"}} value={logindata.username1 || ""} 
                   onChange={HandleLogindata} required/>


                    <label htmlFor="userpassword_input"><b>Password:</b></label><br/>
                    {/* password input */}
                   <input id="userpassword_input" title="userpassword_input" name="userpassword1" type="password"
                   placeholder="Enter your password..." data-userpassword-input="userpassword_input_data"
                   style={{width:"100%"}} value={logindata.userpassword1 || ""} 
                   onChange={HandleLogindata} required/>

                    <br/><br/>


                   {/* login button inside login form */}
                   <button id="login_butt" title="login_butt" name="login_butt"
                    type="submit" data-login-butt="login_butt_data"
                    className="w3-button w3-block w3-ripple w3-green w3-hover-blue
                     w3-text-white w3-hover-text-white"
                    style={{fontSize:"35px"}}>
                        <i className="fa fa-sign-in"></i> LOGIN
                    </button>
          </form>
          </div>
         
      )
}


function CloseLoginFormFunc(){//function used to call to make login form and overlay disappear
    document.getElementById("login_form").style.display = "none";
    document.getElementById("overlay1").style.display = "none";
}

class Blockcode1 extends React.Component{//this is the main block to render the whole entire content
    //of this webpage through a lot of component above 
    constructor(props){
        super(props);
        this.state = {accessid:""} //I want this.state object to get value from props of this component
    }
    static getDerivedStateFromProps(props,state){
        return {accessid:props.acsid} // accessid will be the value of acsid props from
        // <Blockcode1 acsid=""/>
    }

  
    render(){
        var Unlock_Webcontent; //I want this variable to render a specific component only when
        //this.state.accessif have carry the correct code from props acsid

        if(this.state.accessid === "125798623547"){
            Unlock_Webcontent = <Mainpage_Content/> //Unlock_Webcontent will render content
            //from component <Mainpage_Content/>
        }else{
            Unlock_Webcontent = <ErrorContent/>//Unlock_Webcontent will render content
            //from component <ErrorContent/> that is imported from "test2.js" file
        }
        return (
            <div>
                  {Unlock_Webcontent}
            </div>
        )
    }

}
ReactDOM.render(<Blockcode1 acsid="125798623547"/>,document.getElementById("block1"));
//I render <Blockcode1/> component with acsid props value to get the whole page content display inside
// element has id="block1" from "index.html" file