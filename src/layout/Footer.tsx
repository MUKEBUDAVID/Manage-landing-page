
import { FormEvent,ChangeEvent,useState } from "react";
import isEmailValid from "../util/IsEmailValid";
export default function Footer() {

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");


  


  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   setInputValue(value);

      if (inputValue=="") {
         console.log("befor");
         
        setError("")       
        
        console.log("after");
        
      }



   

};




const  handleSubmitEmail=(e:FormEvent)=>{
  e.preventDefault();
  e.stopPropagation();

if (inputValue!=="") {
  
  if (!isEmailValid(inputValue)) {
    setError("please insert a valid email");
  }else{
    setError("");
  }
  
}

   
  

}









  return (
    <footer>

        <section className="contact">
          <img src="assets/logoFooter.svg" alt="logo" className="logo" />
          
          <div className="sociaux"  >
 <a href="#"><img src="assets/icon-facebook.svg" alt="icon-facebook"/></a>
 <a href="#"><img src="assets/icon-youtube.svg" alt="icon-youtube" /></a>
 <a href="#"><img src="assets/icon-twitter.svg" alt="icon-twitter"/></a>
 <a href="#"><img src="assets/icon-pinterest.svg" alt="icon-pinterest" /></a>
 <a href="#"><img src="assets/icon-instagram.svg" alt="icon-instagram.svg" /></a>
</div>
        </section>
        


<section className="navigation">

<nav>
 <a href="#">Home</a>   
 <a href="#">Pricing</a>   
 <a href="#">Products</a>   
 <a href="#">About Us</a>   
</nav>


<nav>
 <a href="#">Careers</a>   
 <a href="#">Community</a>   
 <a href="#">Privacy Policy</a>   
</nav>

</section>



<section className="newslater">

  <form action="" method="post" onSubmit={handleSubmitEmail}>
  <input type="email" name="email" onChange={handleInputChange} value={inputValue} id="email" placeholder="Updates in your inbox…" />
  <button type="submit">Go</button>
   <span >{error}</span>

  </form>


  <p>Copyright 2020. All Rights Reserved</p>


</section>


<div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io?ref=manage-landing-page-SLXqC6P5" target="_blank">David Mukebu</a>.
  </div>


    </footer>
  )
}
