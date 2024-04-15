"use-client"
import {Container} from "components";

const ContentCreation = ({translation}) => {
    const {
        contentCreation,
        subtitle1,
        subtitle2,
        subtitle3,
        smPoint1,
        smPoint1Description,
        smPoint2,
        smPoint2Description,
        smPoint3,
        smPoint3Description,
        smPoint4,
        smPoint4Description,
        stopStruggle,
    }=translation

  return (

<Container  
    imageSrc={"/content-creation.png"}
 >
      <div>
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
        {contentCreation}
          </li>
          </h1>
          <p  className="my-4 text-gray-400 text-md" >
         {subtitle1}
           </p>
          <p  className="my-4 text-gray-400 text-md" >
         {subtitle2}
         </p>
        <div  className="my-4 text-gray-400 text-md" >
        {subtitle3}
          <ul >
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span> {smPoint1Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint4}</span> {smPoint4Description}</li>
          </ul>
           </div>
          <p  className="my-4 text-gray-400 text-md" >
          {stopStruggle}
           </p>
      </div>
    </Container> 
)};

export default ContentCreation;
