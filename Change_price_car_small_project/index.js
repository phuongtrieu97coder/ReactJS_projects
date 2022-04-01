import React from "react";
import ReactDOM from "react-dom";
import "./test1.scss";


function Func0(props){
    return <b id="intro1">{props.intro} <br/></b>
}
function Func1(){
    var intro_arr = [
        {id:1,intro:"Welcome to this webpage"},
        {id:2,intro:"This is project1"},
        {id:3,intro:"Content is about Car"}
    ];
    return <div>{intro_arr.map(val=><Func0 key={val.id} intro={val.intro}/>)}</div>
}
class Car_content1 {
    constructor(model,brand){
        this.model = model;
        this.brand = brand;
    }

}
class Car_content1_child1 extends Car_content1{
    constructor(model,brand,price,car_img1){
        super(model,brand);
        this.price = price;
        this.car_img1 = car_img1;
    }
    method1(){
        return <Func1/>
    }
    method2(){
        return `
        This is model: ${this.model}, brand: ${this.brand}.
        `;
    }
}

var Car_content1_child1_obj = 
new Car_content1_child1("Pagani-3366","Pagani","$15,489,367","https://images.hgmsites.net/med/pagani-huayra-lultimo--image-via-prestige-imports-miami_100664363_m.jpg");



class Car_info extends React.Component{
    constructor(props){
        super(props);
        this.state = Car_content1_child1_obj;
    }
    Change_car_image = () =>{
        this.setState({car_img1:"https://robbreport.com/wp-content/uploads/2021/08/2010_Pagani_Zonda_R_Evolution10.jpg?w=1000"})
    }
    Change_price = () => {
        this.setState({price:"$20,369,258"})
    }
    static getDerivedStateFromProps(props,state){
        return {model:props.model}
    }
    Car_info_method1 = () =>{
        return  <>{Car_content1_child1_obj.method2()}</>;
    }
    render(){
        return(
            <div>
              



                <table id="table1">
                   <tbody>
                    <tr>
                        <td id="table1_intro">
                        {Car_content1_child1_obj.method1()}<br/>

                        <h1 id="car_model_name_intro">{Car_content1_child1_obj.model}</h1>
                        </td>


                        <td>
                            
                <img src={this.state.car_img1}
                alt="car_img1" width="100%" height="300px"/> <br/>
                        </td>


                    </tr>
                    <tr>
                        <td style={{padding:"10px 20px"}}>
                        <this.Car_info_method1/><br/>

<b>Total price: {this.state.price}</b>
                        </td>

                        <td style={{padding:"10px 20px"}}>

                        <button id="butt1" className="butt1 w3-btn w3-ripple w3-green 
                w3-hover-aqua w3-text-white w3-hover-text-white" title="change car-image button"
                name="change_car_image_button" type="button" 
                data-change-car-image-butt="change car-image button data"
                onClick={this.Change_car_image}>Change Car Image</button>



                        <button id="butt2" className="butt2 w3-btn w3-ripple w3-orange 
                w3-hover-aqua w3-text-white w3-hover-text-white" title="change price button"
                name="change_price_button" type="button" 
                data-change-price-butt="change price button data" style={{float:"right"}}
                onClick={this.Change_price}>Change Price</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
             


             



            </div>
        )
    }
}
ReactDOM.render(<Car_info model="Pagani-14456588"/>,document.getElementById("block1"));

