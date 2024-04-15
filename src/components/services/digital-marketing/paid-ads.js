import {Container} from "components"

const PaidAds = ({translation}) => {
  const {
    paidAds,
    subtitle1,
    subtitle2,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    smPoint3,
    smPoint3Description,
    smPoint4,
    smPoint4Description,
    stopWasting,

  }=translation
  return   (
    <Container 
        imageSrc={"/paid-ads.png"}
     >
          <div>
              <h1>
            <li  className="text-3xl " style={{listStyleType:"square"}}>
               {paidAds}
            </li>
              </h1>
            <p  className="my-6 text-gray-400 text-md" >
             {subtitle1}
             </p>
            <div  className="my-4 text-gray-400 text-md" >
              {subtitle2}
              <ul >
                <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint1}</span>{smPoint1Description}</li>
                <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
                <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint3}</span> {smPoint3Description}</li>
                <li className="inline-block"> <span style={{color:"#FFC761"}}>- {smPoint4}</span> {smPoint4Description}</li>
              </ul>
               </div>
             
              <p  className="my-4 text-gray-400 text-md" >
              {stopWasting}
             </p>
          </div>
        </Container> 
        )
};

export default PaidAds;
