import { useEffect,useState} from "react";
import BtnRadio from "./BtnRadio";
import GetButon from "./GetButon";
import { motion } from "framer-motion";

export default function Avis() {
const[elementVue,setelementVue]=useState({element:0,vue:0});

// for animation scroll X
useEffect(()=>{

const timer = setInterval(() => {
  

if(elementVue.element===3){
  const temp={...elementVue}
  temp.element=0;
  temp.vue=0
  setelementVue({...temp});
} else{
  const temp={...elementVue};

  temp.element+=1 ;
   temp.vue+=100;
   
setelementVue({...temp})
 
}
 


   }, 2000);

 
return () => {
    // setelementVue(0)
    clearInterval(timer);
  } 

})





  return (
    <section className="avis">
      <h2 className="titre">  What they’ve said</h2>


<div className="scroll">

<motion.ul  animate={{x: -elementVue.vue+"vw" }} >

    
        <li>
            <img src="assets/avatar-anisha.png" alt="avatar"  className="avatar" />
            <br />
            <p className="nom">Anisha Li</p>

              <br/>
              
            <p className="message">
“Manage has supercharged our team’s workflow. The ability to maintain 
 on larger milestones at all times keeps everyone motivated.”

            </p>

        </li>





        <li>
            <img src="assets/avatar-ali.png" alt="avatar"  className="avatar" />
            <br />
            <p className="nom">Ali Bravo</p>
            <br/>
            
            <p className="message">
            “We have been able to cancel so many other subscriptions since using 
Manage. There is no more cross-channel confusion and everyone is much 
more focused.”
            </p>

        </li>




        <li>
            <img src="assets/avatar-richard.png" alt="avatar"  className="avatar" />
            <br />
            <p className="nom">Richard Watts</p>
            <br/>
            
            <p className="message">
            “Manage allows us to provide structure and process. It keeps us organized 
and focused. I can’t stop recommending them to everyone I talk to!”

            </p>

        </li>

        
        

        <li>
            <img src="assets/avatar-shanai.png" alt="avatar"  className="avatar" />
            <br />
            <p className="nom">Shanai Gough</p>
            <br/>
           
            <p className="message">

            “Their software allows us to track, manage and collaborate on our projects 
from anywhere. It keeps the whole team in-sync without being intrusive.”

            </p>

        </li>


        </motion.ul>



    </div> 
     

  <BtnRadio decoration="btnRadio" element={elementVue.element} />


  <GetButon decoration="avisBtn"/>        


    </section>
  )
}
