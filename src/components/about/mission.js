"use client"
import Image from "next/image"
import {Container} from 'components'

const Mission = ({translation}) => {

  return (
    <Container imageOrder={2} divOrder={1} imageSrc={"/mission.png"}>
          <div  className="flex flex-col md:justify-center">
        <h1 className="relative  text-5xl "  style={{color:"#fbc460"}}>
            {translation.ourMission}
        </h1>
        <p className=" mt-5 text-white">
       {translation.mission}
        </p>    
        </div>

    </Container>  
)};

export default Mission;
