# Select And Display Pizza Selection Option

> In this small project, I’m going to use the ‘useContext’ and ‘map’ method to display pizza image when users select a specific pizza option

![image](https://user-images.githubusercontent.com/82598726/176490266-6715a5d5-7850-4411-a6c0-6a6b2679bfeb.png)

![image](https://user-images.githubusercontent.com/82598726/176490299-ffa8292c-50b9-4f02-b130-89077e212058.png)

![image](https://user-images.githubusercontent.com/82598726/176490325-7fb31567-19a5-41d4-9ac2-b4321d662b2e.png)

![image](https://user-images.githubusercontent.com/82598726/176490349-b08fadc5-5863-4fd0-9241-0ebf622ddb7b.png)


# Syntaxes in 'Index.js' file

```javascript
import React,{useState,useContext,createContext} from "react";
import {createRoot} from "react-dom/client";
import Bell_pepper_pizza from "./image/Bell_pepper_pizza.jpg";
import Sausage_pizza from "./image/sausage_pizza.jpg";
import Pepperoni_pizza from "./image/pepperoni_pizza.jpg";
import Pineapple_pizza from "./image/pineapple_pizza.jpg";    
import {PizzaDisplayImageBlock} from "./test1";

const PizzaImages = [
    {
       pizzaType:"Bell Pepper Pizza",
       pizzaImage:Bell_pepper_pizza,
    },
    {
       pizzaType:"Sausage Pizza",
       pizzaImage:Sausage_pizza,
    },
    {
       pizzaType:"Pepperoni Pizza",
       pizzaImage:Pepperoni_pizza,
    },
    {
       pizzaType:"Pineapple Pizza",
       pizzaImage:Pineapple_pizza,
    }
 ];

export const PizzaDataContext = createContext(PizzaImages);

function Form1_block(props){
    var [pizza_select1,setPizzaSelect]  = useState('Bell Pepper Pizza');
    
    
    
     function Preventsubmit(event){
           event.preventDefault();
     }
    
    
    return (
    <div>
           <form id='form1' title='form1' name='form1' target='_self'
           action='index.html' method='post'   
           encType='multipart/form-data' data-form1='form1 data' style={{width:'600px',
           border:'4px solid green',padding:'20px',fontSize:'30px'}}
           onSubmit={Preventsubmit}>
    
                   <label htmlFor='pizza_select'><b>pizza Selection:</b></label>
    
    
                   <select id='pizza_select' name='pizza_select1' title='pizza_selection' 
                   dataaccountselect='account_selection_data' 
                   style={{width:'100%'}} value={pizza_select1 || ''} 
                   onChange={event=>setPizzaSelect(event.target.value)}>
                   
                   <option value='Bell Pepper Pizza'>Bell Pepper Pizza</option>
                    <option value='Sausage Pizza'>Sausage Pizza</option>
                    <option value='Pepperoni Pizza'>Pepperoni Pizza</option>
                    <option value='Pineapple Pizza'>Pineapple Pizza</option> 
    
                   </select><br/><br/>
                <PizzaDataContext.Provider value={PizzaImages}>

                    <PizzaDisplayImageBlock pizzaSelected={pizza_select1}/>
                </PizzaDataContext.Provider>
                 
    
            </form>
    
     </div>
   )
}

var container1 = document.getElementById("block1"),
root_1 = createRoot(container1);
root_1.render(<Form1_block/>);


```

# Syntaxes in 'test1.js' file

```javascript
import React,{useContext} from "react";
import {PizzaDataContext} from "./index";

export function PizzaDisplayImageBlock(props){
    const PizzaData = useContext(PizzaDataContext);
    return (
        <>
        {PizzaData.map((val,index)=>{
            if(props.pizzaSelected === val.pizzaType){
                return <img src={val.pizzaImage} alt="pizzaImage" key={index} width="100%" height="400px"/>
            }
        })}
        </>
    )
}

```
