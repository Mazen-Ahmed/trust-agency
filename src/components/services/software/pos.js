import {Container} from "components"

const POS = ({translation}) => {
  const{
    pos,
    subtitle1,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    smPoint3,
    smPoint3Description,
    smPoint4,
    smPoint4Description,
    smPoint5,
    smPoint5Description,
    }=translation
    return (
      <Container 
      divOrder={1}
      imageOrder={2}
      background={"#1f2124"}
      imageSrc={"/sw-quality.png"} >
      <div className="py-4">
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
        {pos}
          </li>
          </h1>
          <p  className="my-6 text-gray-400 text-md" > {subtitle1}  </p>
          <div  className="my-3 text-gray-400 text-md" >
            <ul >
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span> {smPoint1Description}</li>
              <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
              <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
              <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint4}</span> {smPoint4Description}</li>
              <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint5}</span> {smPoint5Description}</li>
            </ul>
             </div>
    
      </div>
    </Container>  
  
    )
  };
export default POS;
