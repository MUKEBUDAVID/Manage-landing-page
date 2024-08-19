// import React from 'react';
import illustration1 from "/assets/bg-tablet-pattern.svg";
import illustration2 from "/assets/illustration-intro.svg";

import GetButon from "../atom/GetButon";

export default function Everyone() {
  return (
    <section className="everyone">
      <div className="left">
        <h1>
        Bring everyone together to build better products.
        </h1> 
        <p>
        Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.
        </p>

        <GetButon decoration="everyoneBtn"/>

      </div>


      <div className="right">
        <img src={illustration1} alt="illustration1"  />
     <img src={illustration2} alt="illustration2"  />

      </div>
    </section>
  )
}
