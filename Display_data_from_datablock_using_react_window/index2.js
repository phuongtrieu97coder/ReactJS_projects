import React,{useState,useEffect,Suspense,PureComponent} from "react";
    import {createRoot} from "react-dom/client";
    import "./test2.scss";
    import {FixedSizeList as List} from "react-window";
    
    class ErrorBoundaries extends React.Component{
        constructor(props){
            super(props);
            this.state = {error:false};
        }
        static getDerivedStateFromError(error){
            this.setState({error:true});
            return console.log("Error "+error);
        }
        componentDidCatch(error,errorinfo){
            return console.log(`
            Error: ${error}.
            Error Information: ${errorinfo}.
            `);
        }
        render(){
            if(this.state.error === true){
                return <h1>There was an error rendering your component content!!!</h1>
            }else{
                return this.props.children;
            }
        }
    }
    
    function useFetch(url){
        var [getdata,setData] = useState();
        useEffect(()=>{
            fetch(url)
            .then(val=>val.json())
            .then(data=>setData(data))
        },[getdata])
        return getdata;
    }
    
    
    function Content1(props){
        var externaldata1 = useFetch("./demo_total_random_data.json");
    
        var txt;
       if(externaldata1){
           txt = externaldata1.map((Val,index)=>{
               return <React.Fragment key={index}>
                      <h1>{Val.id} {Val.content1}</h1>
               </React.Fragment>
           })
           return(
               <>
               {txt[props.inx]}
               </>
           ) ;
       }else{
           txt="";
       }
       
    
    }
    
    class Cell1 extends PureComponent{
        constructor(props){
            super(props);
            this.state = {data1:<Content1 inx={this.props.index}/>}
        }
        render(){
            return (
                <div className={this.props.index%2?"ImportantData":"NormalData"} 
                style={this.props.style}>
                              {this.state.data1}  
                </div>
            )
        }
    }
    
    
    function Blockcode1(){
       var  item = useFetch("./demo_total_random_data.json");
       var arr1 = [];
       for(var i in item){
          arr1.push(item);
       }
       
    
        return (
         <ErrorBoundaries>
             <Suspense fallback={<h1>Loading...</h1>}>
                <List className="Table1" itemCount={arr1.length} itemSize={100} width={800} height={500}>
                    {Cell1}
                </List>
             </Suspense>
         </ErrorBoundaries>
        )
    }
    
    
    var container1 = document.getElementById("block1"),
    root1= createRoot(container1);
    root1.render(<Blockcode1/>);