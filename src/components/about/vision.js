"use client"
import {Container} from "components"

const Vision = ({translation}) => {

  return (
   
   <Container imageSrc={"/vision.png"}>

    <div className="flex flex-col md:justify-center" >
      
        <h1 className=" text-5xl "  style={{color:"#fbc460"}}>
            {translation.ourVision}
        </h1>
        <p className=" mt-5 text-white">
        {translation.vision}
        </p>
       
    </div>
   </Container>


)};

export default Vision;
