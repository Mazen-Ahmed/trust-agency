import {Container} from "components"
const ProvideLegal = () => {
  return (
    <Container 
    divOrder={1}
    imageOrder={2}
    background={"#1f2124"}
    imageSrc={"/provide-legal.png"} >
    <div className="py-4">
        <h1>
      <li  className="text-3xl " style={{listStyleType:"square"}}>
      Providing Legal Advices
              </li>
        </h1>
        <p  className="my-6 text-gray-400 text-md" >
        In a world overflowing with content, high-quality graphic design is essential to grab attention and tell your brand story.
         </p>
        <div  className="my-3 text-gray-400 text-md" >
          Our graphic design services can help you:
          <ul >
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- Develop a unique brand identity:</span> Identify your target audience, define your goals, and develop a content calendar that resonates.</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>- Elevate your online presence:</span>  Engaging posts, eye-catching visuals, and stories that capture attention and drive engagement.</li>
            <li className="inline-block"> <span style={{color:"#FFC761"}}>-Increase brand awareness:</span> Stay active on all your platforms and build a strong online presence.</li>
          </ul>
           </div>
        <p  className="my-6 text-gray-400 text-md" >
        Let our team of skilled graphic designers create visuals that captivate your audience and propel your brand forward.         </p>
  
    </div>
  </Container>  
  )
  
};

export default ProvideLegal;
