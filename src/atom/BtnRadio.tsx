import { PropsWithChildren, useEffect, useState } from "react";

type propstype = PropsWithChildren<{
  decoration: string;
  element: number;
}>;

export default function BtnRadio({ decoration, element }: propstype) {
  const [vue, setvue] = useState(["vue", "normal", "normal", "normal"]);
  
useEffect(()=>{
  switch (element) {
    case 0:
      setvue(["vue", "normal", "normal", "normal"]);
      break;
    case 1:
      setvue(["normal", "vue", "normal", "normal"]);
      break;
    case 2:
      setvue(["normal", "normal", "vue", "normal"]);
      break;
    case 3:
      setvue(["normal", "normal", "normal", "vue"]);
  }
},[element])



  

  return (
    <div className={decoration}>
      <div className={vue[0]}></div>
      <div className={vue[1]}></div>
      <div className={vue[2]}></div>
      <div className={vue[3]}></div>
    </div>
  );
}
