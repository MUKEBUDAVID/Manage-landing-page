// import React from 'react'

import GetButon from "./GetButon";

export default function Avis() {





  return (
    <section className="avis">
      <h2 className="titre">  What they’ve said</h2>






<div className="scroll">


<ul  >

    
        <li>
            <img src="/src/assets/avatar-anisha.png" alt="avatar"  className="avatar" />
            <p className="nom">Anisha Li</p>

            <p className="message">
“Manage has supercharged our team’s workflow. The ability to maintain 
vword-wrap: break-word;word-wrap: break-word;isibility on larger milestones at all times keeps everyone motivated.”

            </p>

        </li>





        <li>
            <img src="/src/assets/avatar-ali.png" alt="avatar"  className="avatar" />
            <p className="nom">Ali Bravo</p>

            <p className="message">
            “We have been able to cancel so many other subscriptions since using 
Manage. There is no more cross-channel confusion and everyone is much 
more focused.”
            </p>

        </li>




        <li>
            <img src="/src/assets/avatar-richard.png" alt="avatar"  className="avatar" />
            <p className="nom">Richard Watts</p>

            <p className="message">
            “Manage allows us to provide structure and process. It keeps us organized 
and focused. I can’t stop recommending them to everyone I talk to!”

            </p>

        </li>

        
        

        <li>
            <img src="/src/assets/avatar-shanai.png" alt="avatar"  className="avatar" />
            <p className="nom">Shanai Gough</p>

            <p className="message">

            “Their software allows us to track, manage and collaborate on our projects 
from anywhere. It keeps the whole team in-sync without being intrusive.”

            </p>

        </li>


        </ul>



    </div> 


  <GetButon decoration="avisBtn"/>        


    </section>
  )
}
