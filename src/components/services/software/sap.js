import {Container} from "components"

const SAP = ({translation}) => {
  const{
    sap,
    subtitle1,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    smPoint3,
    smPoint3Description,
    overAll,
  }=translation
return (
  <Container   imageSrc={"/desktop.png"}  imageOrder={1} divOrder={2}>
    <div>
        <h1>
      <li  className="text-3xl " style={{listStyleType:"square"}}>
      {sap}
        </li>
        </h1>
        <p style={{color:"#FFC761"}} className="my-4 text-md" >{subtitle1}</p>
       
        <div  className="my-6 text-gray-400 text-md" >
    
        <ul >
        <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span> {smPoint1Description}</li>
          <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
          <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
        </ul>
         </div>
        <p  className="my-6 text-gray-400 text-md" >
        {overAll}
         </p>
     
    </div>
  </Container>
)
};

export default SAP;
