import { MouseEvent, useState } from "react";
import GetButon from "../atom/GetButon";


export default function Header() {
const [mobileImg,setmobileImg]=useState("assets/icon-hamburger.svg");
const [visibility,setvisibility]=useState("invisible");

const handleclick=(e:MouseEvent)=>{
 e.preventDefault;
 e.stopPropagation;

if (mobileImg=="assets/icon-hamburger.svg") {
  setmobileImg("assets/icon-close.svg")  
  setvisibility("visible")
}else{
  setmobileImg("assets/icon-hamburger.svg")
  setvisibility("invisible")
} 

}


  return (
  <header>

<div className="centre">
    <img src="assets/logo.svg" alt="logo du site web"  className="logo" title="logo du site web" />

{/* hamburger */}
<img onClick={handleclick} src={mobileImg} alt="menu hamburger" className="menu_hamburger"  />

{/* ombre pour mobile */}
<div className="ombre" id={visibility}  ></div>


<nav id={visibility}>
 <a href="#">Pricing</a>
 <a href="#">Product</a>
 <a href="#">About Us</a>
 <a href="#">Careers</a>
 <a href="#">Community</a>
</nav>


<GetButon decoration="heanderBtn"/>

    </div>
  </header>
  
    )
}
