import {Container, HeaderTitle} from "components";

const InvestmentHeader = ({translation}) => {
  const { 
    financialConsulting,
    subtitle1,
    smPoint1,
    smPoint1Description,
    smPoint2,
    smPoint2Description,
    title
  }=translation

  return(
    <>
    <HeaderTitle title={title} />
    <Container  imageSrc={"/investment.png"} fade >
      <div>
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
            {financialConsulting}
          </li>
          </h1>
          <p  className="my-4 text-md" >{subtitle1}</p>
          
          <div  className="my-6 text-gray-400 text-md" >
          <ul >
            <li className="inline-block my-6"> <span style={{color:"#FFC761"}}>- {smPoint1}</span>{smPoint1Description}</li>
            <li className="inline-block my-6"> <span style={{color:"#FFC761"}}>- {smPoint2}</span>  {smPoint2Description}</li>
          </ul>
           </div>

      </div>
    </Container>
    </>    
)
};

export default InvestmentHeader;
