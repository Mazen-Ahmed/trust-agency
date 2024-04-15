import {Container} from "components"

const StockMarket = ({translation}) => {
  const{
    stockMarket,
    subtitle1,
    subtitle2,
    smPoint1,
    smPoint2,
    smPoint3,
    smPoint4,
    smPoint5,
    navigate,
  }=translation
  
  return (
    <Container 
    divOrder={1}
    imageOrder={2}
    background={"#1f2124"}
    imageSrc={"/stockmarket.png"} >
    <div className="py-4">
        <h1>
      <li  className="text-3xl " style={{listStyleType:"square"}}>
        {stockMarket}
        </li>
        </h1>
        <p  className="my-6 text-gray-400 text-md" >
        {subtitle1}
         </p>
        <div  className="my-3 text-gray-400 text-md" >
          {subtitle2}
          <ul >
            <li > <span style={{color:"#FFC761"}}>- {smPoint1}</span> </li>
            <li > <span style={{color:"#FFC761"}}>- {smPoint2}</span> </li>
            <li > <span style={{color:"#FFC761"}}>- {smPoint3}</span> </li>
            <li > <span style={{color:"#FFC761"}}>- {smPoint4}</span> </li>
            <li > <span style={{color:"#FFC761"}}>- {smPoint5}</span> </li>
          </ul>
           </div>
        <p  className="my-6 text-gray-400 text-md" >
        {navigate}
         </p>
  
    </div>
  </Container>  

)
};

export default StockMarket;
