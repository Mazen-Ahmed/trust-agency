"use client"
import {Container, HeaderTitle} from "components"


const Header = ({translation}) => {
  const {
    title,
    branding,
    unleash,
    brandingDescription,
    brandingPoint1,
    brandingPoint2,
    brandingPoint3,
    brandingPoint4,
    crafting,
    ready
  }=translation
  
  return(
    <>
    <HeaderTitle title={title} />
    <Container  imageSrc={"/branding.png"} fade >
      <div>
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
            {branding}
          </li>
          </h1>
          <p style={{color:"#FFC761"}} className="my-4 text-md" >{unleash}</p>
          <p  className="my-6 text-gray-400 text-md" >
          {brandingDescription}
           </p>
          <div  className="my-6 text-gray-400 text-md" >
          <ul >
            <li>- {brandingPoint1}</li>
            <li>- {brandingPoint2}</li>
            <li>- {brandingPoint3}</li>
            <li>- {brandingPoint4}</li>
          </ul>
           </div>
          <p  className="my-6 text-gray-400 text-md" >
          {crafting}
           </p>
          <p  className="my-6 text-gray-400 text-md" >
          {ready}
           </p>
      </div>
    </Container>
    </>
  );
};

export default Header;
