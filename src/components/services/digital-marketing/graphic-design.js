import {Container} from "components";

const GraphicDesign = ({translation}) => {
  const{
    graphicDesign,
    subtitle1,
    subtitle2,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    smPoint3,
    smPoint3Description,
    stopStruggle,
  }=translation
  
  return (
    <Container 
    divOrder={1}
    imageOrder={2}
    background={"#1f2124"}
    imageSrc={"/graphic-design.png"} >
    <div className="py-4">
      <h1>
      <li  className="text-3xl " style={{listStyleType:"square"}}>
      {graphicDesign}
      </li>
      </h1>
        <p  className="my-6 text-gray-400 text-md" >
       {subtitle1}
         </p>
        <div  className="my-3 text-gray-400 text-md" >
          {subtitle2}
          <ul >
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span> {smPoint1Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
          </ul>
           </div>
        <p  className="my-6 text-gray-400 text-md" >
        {stopStruggle}     
        </p>
  
    </div>
  </Container>
)};

export default GraphicDesign;
