import React from "react";
import ReactDOM from "react-dom";
import Car_img1 from "./image/car/car_wallpaper1.jpg";
import Car_img2 from "./image/car/car_wallpaper2.jpg";
import Car_img3 from "./image/car/car_wallpaper3.jpg";


class Car_block1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
              car1:Car_img1,
              car2:Car_img2,
              car3:Car_img3,
              car_block1_id:""
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    static getDerivedStateFromProps(props,state){
        return {car_block1_id:props.cbid}
    }
    render(){
        return(
            <div id="car_block1">
                <img className="car_block1_img" id="car_block1_img1" title="car block1 image 1"
                src={this.state.car1} width="100%" height="400px"/>

                <img className="car_block1_img" id="car_block1_img2" title="car block1 image 2"
                src={this.state.car2} width="100%" height="400px"/>

                <img className="car_block1_img" id="car_block1_img3" title="car block1 image 3"
                src={this.state.car3} width="100%" height="400px"/>
            </div>
        )
    }
}

export default Car_block1;

