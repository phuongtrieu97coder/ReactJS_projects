import React,{useState,useEffect,useReducer,useRef,createRef,lazy,Suspense,startTransition,
    PureComponent,useContext,createContext,useCallback,useMemo,memo} from "react";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import {createRoot} from "react-dom/client";
    import "./test1.scss";
    import {FixedSizeList as List} from "react-window";
    import $ from "jquery";
    import Car1 from "./image/car/bugatti5.jpg";
    import Car2 from "./image/car/bugatti6.jpg";
    import Car3 from "./image/car/bugatti7.jpg";
    import Car4 from "./image/car/bugatti8.jpg";
    import Car5 from "./image/car/bugatti9.jpg";
    import Car6 from "./image/car/mclaren_600LT_green.jpg";
    import Car7 from "./image/car/mclaren_600LT.jpg";
    import Car8 from "./image/car/mclaren_620r.jpg";
    import Car9 from "./image/car/mclaren_720S_GT3X.jpg";
    import Car10 from "./image/car/mclaren_p1_2.jpg";
    
    
    /*
    
    In this project, I want to make a slideshow that show me a only new car image
     each time I click ‘arrow left’ or ‘arrow right’ button. 
     Car image contents inside a block will be moved to the left or right like normal slideshow,
      but in this case, I want to see it only scroll to the left or right a little bit.
    
    In order to do this, I have to use ReactJS, Jquery, React-window, and CSS  
    
    In this project, I got 10 car. If I’m at the place where I can see the first car, 
    then  the left arrow button doesn’t help me slide this contents to the left anymore.
    If I’m at the place where I can see the tenth car, the the right arrow button doesn’t help me
     slide this contents to the right anymore.
    
    */
    
    class ErrorBoundaries extends React.Component{
        constructor(props){
            super(props);
            this.state = {error:false};
        }
        static getDerivedStateFromError(error){
            this.setState({error:true});
            return console.log(`Error: ${error}`);
        }
        componentDidCatch(error,errorinfo){
            return console.log(`
            Error: ${error}.
            Error Information: ${errorinfo}.
            `);
        }
        render(){
            if(this.state.error === true){
                return <h1>There was an error rendering component content!!!</h1>
            }else{
                return this.props.children;
            }
        }
    }
    
    var data1block = [
        {
            Car:<img src={Car1} alt="Car1" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car2} alt="Car2" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car3} alt="Car3" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car4} alt="Car4" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car5} alt="Car5" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car6} alt="Car6" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car7} alt="Car7" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car8} alt="Car8" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car9} alt="Car9" width="100%" height="100%"/>
        },
        {
            Car:<img src={Car10} alt="Car10" width="100%" height="100%"/>
        }
    ]
    
    class Cell extends React.Component{
        render(){
            var output1 = data1block.map((val,index2)=>{
                return <React.Fragment key={index2}>{val.Car}</React.Fragment>
            })
            return (
                <div className={this.props.index%2?"ImportantData":"NormalData"} style={this.props.style}>
                    {output1[this.props.index]}
                   
                </div>
    
             )
        }
    }
      
    
    function Blockcode1(){
        var [scrollposition,setScrollposition] = useState(0);
    // this hook is used to make position number in order to make a variable placed inside .scrollLeft
    //event method
    //I want the content inside 'Table1' block to scroll to the left or right when I click arrow left
    //or right button, so 'scrollposition' will be useful later.
    
        useEffect(()=>{
            $("[id='Contentblockcode1']").css({
                "width":"1280px",
                "background-color":"black",
                "padding":"40px",
                "position":"relative",
                "top":"0",
                "left":"20px"
    
            });
    
            $("[id='arrowLeftbutton']").css({
                "font-size":"80px",
                "position":"absolute",
                "top":"110px",
                "left":"-10px"
            });
    // I want to make sure arrow left and arrow right button place at the left and right side of
    //'Table1' block
            $("[id='arrowRightbutton']").css({
                "font-size":"80px",
                "position":"absolute",
                "top":"110px",
                "right":"-10px"
            });
            $("[class='Table1']").scrollLeft(scrollposition);
            /*
    'Table1' block will automatically scroll to the left with the number preresent pixel that
    is taken from 'scrollposition' hook data
    At the beginning, this hook data is 0
            */
    
            $("[id='blackblock']").css({
                "background-color":"black",
                "width":"1200px",
                "height":"22px",
                "border-bottom":"10px double yellowgreen",
                "position":"absolute",
                "top":"346px"
            })
        });
        var ScrollLeft = ()=>{
                setScrollposition(c=>c-200);
    //the condition below makes sure that 'scrollposition' stop
    //substracting number and stay at number 0 when number reach value 0
                if(scrollposition==0){
                    setScrollposition(0);
                }
        };
        var ScrollRight = ()=>{
            setScrollposition(c=>c+200);
    //the condition below makes sure that 'scrollposition' stop
    //adding number and stay at number 0 when number reach value 1800
            if(scrollposition ==1800){
                setScrollposition(1800);
            }
        };
        console.log(scrollposition);//this syntax helps me know maximum number of 'scrollposition'
        //can reach so that user or me can see the final car image when I scroll the 'Table1' block
        //to the right
        return (
          <ErrorBoundaries>
              <Suspense fallback={<h1>Loading...</h1>}>
                  <div id="Contentblockcode1">
                        <List className="Table1" itemCount={data1block.length} itemSize={300}
                        width={1200} height={330}
                        layout="horizontal">
                            {Cell}
                        </List>
    {/* 
    Notice that I can not place or render any syntax or component inside 'List' component except
    the component or a function that is used to make a Cell. Therefore, I have to place 2 buttons and
    a black block outside 'List' syntax component
    */}
                        <button id="arrowLeftbutton" title="arrowLeftbutton" name="arrowLeftbutton"
                        type="button" className="w3-btn w3-ripple w3-transparent w3-text-green
                        w3-hover-aqua w3-hover-text-white" onClick={ScrollLeft}><i className="fa fa-caret-left"></i></button>
                        <button id="arrowRightbutton" title="arrowRightbutton" name="arrowRightbutton"
                        type="button" className="w3-btn w3-ripple w3-transparent w3-text-green
                        w3-hover-aqua w3-hover-text-white" onClick={ScrollRight}><i className="fa fa-caret-right"></i></button>
    
    {/* 
    when user click arrow left or arrow right button, the content of this table will move to the left
    or move to the right
    'ScrollLeft' or 'ScrollRight' methods will be activated
    */}
    
                         <div id="blackblock"></div>
             {/* 
             blackblock is a block to place in front of the horizontal scroll bar at the bottom of 'Table1' 
             block to hide this bar.
             Normally if user scroll this bar, then the hook data 'scrollposition' won't change number
             which make this table be confused and don't know where exactly the position if user try
             to click 'arrow left' or 'arrow right' button 
             
             */}
    
                  </div>
              </Suspense>
          </ErrorBoundaries>
        )
    }
    
    var container1 = document.getElementById("block1"),
    root_1 = createRoot(container1);
    root_1.render(<Blockcode1/>);