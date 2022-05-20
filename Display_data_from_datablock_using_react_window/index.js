import React,{useState,useEffect,useCallback,useMemo,memo,useReducer,useRef,createRef,createContext,
    useContext,forwardRef,Suspense,startTransition,lazy} from "react";
    import {createRoot} from "react-dom/client";
    import "./test1.scss";
    import {VariableSizeList as List} from "react-window";
    import useFetch from "./test1.js";
    import Img1 from "./image/company1.jpg";
    import Img2 from "./image/company2.jpg";
    import Img3 from "./image/company3.jpg";
    import Img4 from "./image/logo1.jpg";
    import Img5 from "./image/logo4.jpg";
    import Img6 from "./image/logo6.jpg";
    import Img7 from "./image/wallpaper1.jpg";
    import Img8 from "./image/wallpaper2.jpg";
    import Img9 from "./image/wallpaper3.jpg";
    import Img10 from "./image/outdoor_activities.jpg";
    
    class ErrorBoundaries extends React.Component{
        constructor(props){
            super(props);
            this.state = {error:false};
        }
        shouldComponentUpdate(){
            return true;
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
            if(this.state.error){
                return <h1>There was an error rendering component contents!!!</h1>
            }else{
                return this.props.children;
            }
        }
    }
    var Datablock1 = [
        {
            content:<img src={Img1} alt="image 1" width="100%" height="500px"/>,
        },
        {
            content:<img src={Img2} alt="image 2" width="100%" height="500px"/>
        },
        {
           content:<img src={Img3} alt="image 3" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img4} alt="image 4" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img5} alt="image 5" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img6} alt="image 6" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img7} alt="image 7" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img8} alt="image 8" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img9} alt="image 9" width="100%" height="500px"/>,
        },
        {
           content:<img src={Img10} alt="image 10" width="100%" height="500px"/>,
        }
    ]
    
    var rowHeight = new Array(100)
    .fill(true)
    .map(()=>400+Math.round(Math.random()*50));
    var getItemSize = index => rowHeight[index];
    
    
    var Cell = ({index,style})=>{
      var Txt = Datablock1.map((val,index2)=>{
        return <React.Fragment key={index2}>{val.content}</React.Fragment>
    });;
    //Txt variable will loop through ‘Datablock1’ and return value from ‘content’ properties
        return (
        <div className={index%2?"ImportantData":"NormalData"} style={style}>
               {Txt[index]}
        </div>
       )
    };
    //Notice that if I just render {Txt}, I will see the contents from all the image placed inside ‘Datablock1’ on each table row
    //To fix this problem, I just want to call specific content using ‘Txt[index]’. ‘index’ is the index of ‘Cell’ function. This index will automatedly be increased
    
    
    function Blockcode1(){
       
        return (
            <ErrorBoundaries>
                <Suspense fallback={<h1>Loading...</h1>}>
                       <List className="Table1" itemCount={Datablock1.length} itemSize={getItemSize} 
                       width={1200} height={500}>
                          {Cell}
                       </List>
    
                     
                </Suspense>
            </ErrorBoundaries>
        )
    }
    
    
    var container1 = document.querySelectorAll("#block1")[0],
    root_1 = createRoot(container1);
    root_1.render(<Blockcode1/>);