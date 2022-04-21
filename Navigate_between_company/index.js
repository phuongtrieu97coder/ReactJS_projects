import React,{useMemo,memo,useState,useContext,createContext,useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
import "./test1.scss";
import Page1_Content1 from "./test1.js";
import Page2_Content1 from "./test2.js";
import Page3_Content1 from "./test3.js";
import Carimg1 from "./image/car/pagani_huayra_21.jpg";
import Carimg2 from "./image/car/pagani_huayra_22.jpg";
import Carimg3 from "./image/car/pagani_huayra_lultimo.jpg";
import Carimg4 from "./image/car/pagani_huayra.jpg";
import Carimg5 from "./image/car/pagani_zonda.jpg";
import Carimg6 from "./image/car/pagani_zonda2.jpg";
import Cartheme1 from "./image/car/car_wallpaper2.jpg";
import Cartheme2 from "./image/car/car_wallpaper3.jpg";

/*
In this project, I practice to write useContext, useEffect, BrowserRouter, Routes, Route, Outlet,Link
useMemo, memo

*/
var carinfo = {
    car1:Carimg1,
    car2:Carimg2,
    car3:Carimg3,
    car4:Carimg4,
    car5:Carimg5,
    car6:Carimg6,
    cartheme1:Cartheme1,
    cartheme2:Cartheme2
}

var Context1 = React.createContext(carinfo);



class NavBlock1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainpageid:"4567768983256783546789546896757555678"}
    }
    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){
       console.log(this.state.mainpageid); 
    }
    //ChangeMainPageId method is used to work with <Link> element. If user click any button from
    // the navbar=> mainpageid on this.state will changed randomly into new id value
    //In addition, I also want to know this id from console
    ChangeMainPageId = () => {
        this.setState({mainpageid:Math.floor(Math.random()*100000000000000000000000000000000000)});
        console.log(this.state.mainpageid);

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Before being updated, mainpageid was "+prevState.mainpageid);
    }
    componentDidUpdate(){
        console.log("After being updated, mainpageid is "+this.state.mainpageid);
    }
    render(){
        return (
            <div>
                <nav className="nav fixed-top bg-dark">
                       <Link to="/" id="home_butt" title="home_butt" name="home_butt"
                       type="button" target="_self" className="btn nav-link text-white 
                       w3-hover-aqua w3-hover-text-white" data-home-butt="home_button_data"
                       onClick={this.ChangeMainPageId}>
                           <i className="fa fa-home"></i> TGH_CORP
                        </Link>


                    


                        <Link to="/GHRT_CORP" id="GHRT_CORP_butt" title="GHRT_CORP_butt" name="GHRT_CORP_butt"
                       type="button" target="_self" className="btn nav-link text-warning 
                       w3-hover-aqua w3-hover-text-white" data-ghrt_corp-butt="GHRT_CORP_button_data"
                       onClick={this.ChangeMainPageId}>
                           <i className="fa fa-globe"></i> GHRT_CORP
                        </Link>


                        <Link to="/SIGN_UP" id="SIGN-UP_butt" title="SIGN-UP_butt" name="SIGN-UP_butt"
                       type="button" target="_self" className="btn nav-link w3-text-aqua 
                       w3-hover-aqua w3-hover-text-white" data-sign_up-butt="SIGN-UP_button_data"
                       onClick={this.ChangeMainPageId} style={{position:"absolute",right:0}}>
                           <i className="fa fa-sign-in"></i> SIGN-UP
                        </Link>
                </nav>


                <br/><br/>

                <Outlet/>



            </div>
        )
    }
   
}


function Blockcode1(){
    var [thm,setTHM] = useState(carinfo);  // I use useState() to transfer data faster and avoid
    //specify props repeatedly many times 
    return (
        <Context1.Provider value={thm}>
                <Blockcode1_2 thm={thm}/> {/*thm props will take value from thm in useState() */}
        </Context1.Provider>
    )
}
var Blockcode1_2 = () => {
    var thminfo = useContext(Context1),
    thm1 = thminfo.car1,
    thm2 = thminfo.car2,
    thm3 = thminfo.car3,
    thm4 = thminfo.car4,
    thm5 = thminfo.car5,
    thm6 = thminfo.car6;
    return <Blockcode2 thm1_props={thm1} thm2_props={thm2} thm3_props={thm3}
    thm4_props={thm4} thm5_props={thm5} thm6_props={thm6}
    />
}
var Blockcode2 = memo(({thm1_props,thm2_props,thm3_props,thm4_props,thm5_props,thm6_props}) =>{
     return <Blockcode3 blcd3_props1={thm1_props} blcd3_props2={thm2_props} blcd3_props3={thm3_props}
     blcd3_props4={thm4_props} blcd3_props5={thm5_props} blcd3_props6={thm6_props}
     />
});



function Blockcode3(props){
    var thm = useContext(Context1);  // Here, I specified thm variable to take values from useState()

    console.log(props.blcd3_props1);   //Here, I want to output the values from Context1 that passed
    console.log(props.blcd3_props2);   //through Blockcode1, Blockcode1_2, Blockcode2 on the console

    return (
        <div>
         {/*I want to routing content from different pages */}
          <BrowserRouter>
          
                     <Routes>
                            
                              <Route path="/" element={<NavBlock1/>}>
                                   {/*Now I want to work and display content from other block */}
                                       <Route index element={<Blockcode4/>}/>
        {/*I'm calling blockcode4 because I want to take context from blockcode5.
        When user access this page they will see a !!!Welcome to this Webpage!!! content.
        After that 3 seconds, a new content will appear include 2 new images
        */}
                                       <Route path="SIGN_UP" element={<Page1_Content1 ulckctnd = "wertydfgh456"/>}/>
                                       <Route path="GHRT_CORP" element={<Page2_Content1/>}/>
                                       <Route path="*" element={<Page3_Content1/>}/>
                              </Route>
                     </Routes>
          
          </BrowserRouter>

           
            <br/><br/>


            {/*Now I also want to display images that attached to useState() by calling variable 'thm' */}
            <div id="block1_content1" style={{display:"grid",gridTemplateColumns:"450px 450px 450px"}}>
                 <div>
                       <img src={thm.car1} alt="car1" width="100%" height="500px"/>
                 </div>


                 <div>
                       <img src={thm.car2} alt="car2" width="100%" height="500px"/>
                 </div>



                 <div>
                       <img src={thm.car3} alt="car3" width="100%" height="500px"/>
                 </div>


                 <div>
                       <img src={thm.car4} alt="car4" width="100%" height="500px"/>
                 </div>


                 <div>
                       <img src={thm.car5} alt="car5" width="100%" height="500px"/>
                 </div>



                 <div>
                       <img src={thm.car6} alt="car6" width="100%" height="500px"/>
                 </div>
            </div>
            
        </div>
    )
}
function Blockcode4(){
    var thminfo2 = useContext(Context1);
    var thmnf1 = thminfo2.cartheme1;
    var thmnf2 = thminfo2.cartheme2;
    return useMemo(()=>{
        return <Blockcode5 thmnf1props={thmnf1} thmnf2props={thmnf2}/>
    },[thmnf1,thmnf2])
}





function Blockcode5(){
    // Again, I specified thm variable to take values from useState() 
    var thm = useContext(Context1);


    //Content1 variable will be the content first appear on webpage below two car pictures
    var Content1 =<h1 className="w3-center">!!!Welcome to this Webpage!!!</h1>



    //I specified an useState() to attached Content1 variable to it, and I also want this method
    //work with useEffect() to output something after 3 seconds
    var [Intro1,setIntro1] = useState(Content1);





    //I want a new content appear replace Content1 after 3 seconds
    useEffect(()=>{
       var effect1 = setTimeout(()=>{
            setIntro1((
             <div>
                 <img src={thm.cartheme1} alt="theme_wallpaper1" width="100%" height="500px"/>
                 <img src={thm.cartheme2} alt="theme_wallpaper2" width="100%" height="500px"/>
            </div>
            ))
    
       },3000);
       return ()=>clearTimeout(effect1); //I want the program stop re-rendering this component anymore
        // I also want to reduce memory leaks
    },[]);

    return (
            <div>
                {Intro1}
            </div>
        )
    
}


  
    

ReactDOM.render(<Blockcode1/>,document.getElementById("block1"));