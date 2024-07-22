import Logo from "@/components/Logo";
import React from "react";

export default function page() {
  return (
    <div>
      <Logo logoType="derechEmuna" firstLine={"הנבל ,14 אפרת | טל: 0504723445 "}/>
      <Logo logoType="onlyText" firstLine='שו"ת הרב אפרתי'/>
      <Logo logoType="bookLogo" />
      <Logo logoType="bookLogo"  firstLine='שו"ת הרב אפרתי'  secondLine={true}/>
      <Logo logoType="bookLogo" firstLine="שו'ת הרב אפרתי"  secondLine={true} thirdLine={true}/>

    </div>
  );
}
  
