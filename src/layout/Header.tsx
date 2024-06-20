import { MouseEvent, useState } from "react";


export default function Header() {
const [mobileImg,setmobileImg]=useState("/src/assets/icon-hamburger.svg");
const [visibility,setvisibility]=useState("invisible");

const handleclick=(e:MouseEvent)=>{
 e.preventDefault;
 e.stopPropagation;

if (mobileImg=="/src/assets/icon-hamburger.svg") {
  setmobileImg("/src/assets/icon-close.svg")  
  setvisibility("visible")
}else{
  setmobileImg("/src/assets/icon-hamburger.svg")
  setvisibility("invisible")
} 

}


  return (
  <header>
<img src="/src/assets/logo.svg" alt="logo du site web"  className="logo" title="logo du site web" />

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


<button type="button">Get Started</button>
  </header>
  
    )
}
