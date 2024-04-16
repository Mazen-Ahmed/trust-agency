import {HeaderTitle,Container} from "components";
import React from "react";

const LegalHeader = ({translation}) => {
  const {
    title,
    establishingCompanies,
    subtitle1,
    subtitle2,
    subtitle3,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    smPoint3,
    smPoint3Description,
    start,
    contact,
  }=translation
  
  return (
    <>
    <HeaderTitle title={title} />
    <Container  imageSrc={"/establishing.png"} fade >
      <div>
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
        {establishingCompanies}
          </li>
          </h1>
          <p  className="my-4 text-md" >{subtitle1}</p>
          <p  className="my-6 text-gray-400 text-md" >{subtitle2} </p>
          <div  className="my-6 text-gray-400 text-md" >
          {subtitle3}
          <ul >
          <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span> {smPoint1Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
          </ul>
           </div>
          <p  className="my-6 text-gray-400 text-md" >
          {start}
           </p>
          <p  className="my-6 text-gray-400 text-md" >
         {contact}
           </p>
      </div>
    </Container>
    </>    
)
};

export default LegalHeader;
