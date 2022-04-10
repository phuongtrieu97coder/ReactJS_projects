import { Outlet, Link } from "react-router-dom";

function Navbar_top_block(){
    return(
           
     <div>

    <nav className="w3-top w3-bar w3-black">

    <Link to="/" id="butt1" title="butt1" name="butt1" type="button" 
        className="w3-button w3-ripple w3-bar-item w3-hover-aqua w3-hover-text-white
        w3-text-yellow" target="_self">
   Car_page
    </Link>
        
    <Link to="/Wallpaper_block1" id="butt2" title="butt2" name="butt2" type="button" 
        className="w3-button w3-ripple w3-bar-item w3-hover-aqua w3-hover-text-white
        w3-text-green" target="_self">
        Wallpaper_page
    </Link>
       
    </nav>
     <Outlet/>



     </div>

    )
}

export default Navbar_top_block;