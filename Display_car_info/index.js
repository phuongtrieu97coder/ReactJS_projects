import React from "react";
import ReactDOM from "react-dom";
import "./test1.css";
import ferrari from "./image/car/ferrari_laFerrari_Aperta.jpg";
import pagani from "./image/car/pagani_huayra_bc_roadster_3.jpg";
import lamborghini from "./image/car/lamborghini_aventador2.jpg";


class car_info_class {
    constructor(model,brand){
        this.model = model;
        this.brand = brand;
    }

    intro1(type,price){
        return `This is model: ${this.model}, brand: ${this.brand}.
         Type: ${type}. Price: ${price}`;
    }
}

var call1_car_info_class = new car_info_class("Ferrari-45475675","Ferrari");



var car_obj = {
    model:"Ferrari-45475675",
    brand:"Ferrari",
    car_info_obj:{
        car_info_model:"Ferrari-45475675",
        type:"Luxury",
        price:"$4,125,000"
    }
}

var {model,brand,car_info_obj:{type,price}} = car_obj;


var car2_obj = {
    model2:"Pagani-45475675",
    brand2:"Pagani",
    car_info_obj2:{
        car_info_model2:"Pagani-45475675",
        type2:"Luxury",
        price2:"$8,125,000"
    }
}

var {model2,brand2,car_info_obj2:{type2,price2}} = car2_obj;

var car3_obj = {...car_obj,...car2_obj};


var car4_obj = {
    model:"Lamborghini-45475675",
    brand:"Lamborghini",
    car_info_obj:{
        car_info_model:"Lamborghini-45475675",
        type:"Luxury",
        price:"$5,125,000"
    }
}

var car_info = ["Ferrari","Pagani","Lamborghini"];
var [car1,car2,car3] = car_info;

console.log(car1);
console.log(car2);
console.log(car3);





function car3_obj_intro({model,brand,car_info_obj:{type,price},
model2,brand2,car_info_obj2:{type2,price2}}){

 return ( 
 
   

    <div id="block0">

        <div id="block0">

           <h4>Total car information: {car_info.map((item)=><p>{item}</p>)}</h4>
        </div>

       <div id="block1">

                <div id="block1_1">
                    <img src={ferrari}
                    alt="Ferrari"
                    width="350px" height="350px"/>

                    <p>This is model: {model}, brand: {brand}.<br/> Type: {type}. Price: {price}. </p> <br/>

                </div>
      
       
                    <div id="block1_2">
                        <img src={pagani}
                            alt="Pagani"
                            width="350px" height="350px"/>

                            <p>This is model: {model2}, brand: {brand2}. <br/> Type: {type2}. Price: {price2}</p>
                    </div>



                <div id="block1_3">
                    <img src={lamborghini}
                        alt="Pagani"
                        width="350px" height="350px"/>

                        <p>{call1_car_info_class.intro1.apply(car4_obj,[type,price])}</p>
                </div>
      
        </div>


    </div>


 );
    
}

// 

ReactDOM.render(car3_obj_intro(car3_obj),document.getElementById("root"));


//This is for testing