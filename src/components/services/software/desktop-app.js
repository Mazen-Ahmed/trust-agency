import {Container} from "components"

const DesktopApp = () => {
  return (
    <Container   imageSrc={"/desktop.png"}  imageOrder={1} divOrder={2}>
      <div>
          <h1>
        <li  className="text-3xl " style={{listStyleType:"square"}}>
        Desktop Application
          </li>
          </h1>
          <p style={{color:"#FFC761"}} className="my-4 text-md" >Unleash Your Brand&apos;s Potential</p>
          <p  className="my-6 text-gray-400 text-md" >
            In today&apos;s competitive market, a strong brand is your secret weapon.
            It&apos;s more than just a logo; it&apos;s the story, the feeling, and the promise that sets you apart.
           </p>
          <div  className="my-6 text-gray-400 text-md" >
          We can help you build a brand that:
          <ul >
            <li> - Resonates with your target audience</li>
            <li>- Clearly communicates your values and mission</li>
            <li> - Creates lasting connections and loyalty</li>
            <li> - Drives sales and growth</li>
          </ul>
           </div>
          <p  className="my-6 text-gray-400 text-md" >
          From crafting a compelling brand identity to developing a consistent visual language, we&apos;ll guide you every step of the way.
           </p>
          <p  className="my-6 text-gray-400 text-md" >
          Ready to unlock the power of branding?!
           </p>
      </div>
    </Container>
)
};

export default DesktopApp;
