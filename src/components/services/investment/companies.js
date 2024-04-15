import {Container} from "components"

const Companies = ({translation}) => {
  const {
    companies,
    subtitle1,
    smPoint1,
    smPoint2,
    smPoint3,
    smPoint4,
    smPoint5,
    turn,
  }=translation
  return(
    <Container   imageSrc={"/companies.png"}  imageOrder={1} divOrder={2}>
    <div>
        <h1>
      <li  className="text-3xl " style={{listStyleType:"square"}}>
      {companies}
    </ li>
        </h1>
        <p  className="my-4 text-gray-400 text-md" >{subtitle1}</p>
       
        <div  className="my-6 text-gray-400 text-md" >
        
        <ul >
        <li > <span style={{color:"#FFC761"}}>- {smPoint1}</span> </li>
        <li > <span style={{color:"#FFC761"}}>- {smPoint2}</span> </li>
        <li > <span style={{color:"#FFC761"}}>- {smPoint3}</span> </li>
        <li > <span style={{color:"#FFC761"}}>- {smPoint4}</span> </li>
        <li > <span style={{color:"#FFC761"}}>- {smPoint5}</span> </li>
        </ul>
         </div>
   
        <p  className="my-6 text-gray-400 text-md" >
        {turn} 
        </p>
    </div>
  </Container>    
)
};

export default Companies;
