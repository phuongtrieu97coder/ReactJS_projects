import React from "react";
import ReactDOM from "react-dom";

import Wallpaper_img1 from "./image/logo1.jpg";
import Wallpaper_img2 from "./image/logo4.jpg";
import Wallpaper_img3 from "./image/logo6.jpg";


function Wallpaper_block1(){
    var Wallpaper_info = {
        wallpaper1:Wallpaper_img1,
        wallpaper2:Wallpaper_img2,
        wallpaper3:Wallpaper_img3
  }
    return(
        <div id="wallpaper_block1">
            <img className="wallpaper_block1_img" id="wallpaper_block1_img1" title="wallpaper block1 image 1"
            src={Wallpaper_info.wallpaper1} width="100%" height="400px"/>

            <img className="wallpaper_block1_img" id="wallpaper_block1_img2" title="wallpaper block1 image 2"
            src={Wallpaper_info.wallpaper2} width="100%" height="400px"/>

            <img className="wallpaper_block1_img" id="wallpaper_block1_img3" title="wallpaper block1 image 3"
            src={Wallpaper_info.wallpaper3} width="100%" height="400px"/>
        </div>
    )
}
  
     

export default Wallpaper_block1;



