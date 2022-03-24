import React from "react";
import ReactDOM from "react-dom";
import {Car1,Car2} from "./test1.js";


function Mclaren_collection(){
    var car1_obj = {
        model:"Mclaren-600LT",
        brand:"Mclaren",
        color:"green"
    }

    var car2_obj = {
        model:"Mclaren-700LT",
        brand:"Mclaren",
        color:"blue"
    }
    return (
        <div>
            <table id="table1">
                <tr>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Info</th>
                </tr>
                <tr>
                    <td>{car1_obj.model}</td>
                    <td>{car1_obj.brand}</td>
                    <td>{car1_obj.color}</td>
                    <td><Car1 obj={car1_obj}/></td>
                </tr>
                <tr>
                    <td>{car2_obj.model}</td>
                    <td>{car2_obj.brand}</td>
                    <td>{car2_obj.color}</td>
                    <td><Car2 obj={car2_obj}/></td>
                </tr>
            </table>
        </div>
    )
}

ReactDOM.render(<Mclaren_collection/>,document.getElementById("block1"));