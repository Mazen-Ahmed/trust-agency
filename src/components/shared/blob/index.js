"use client"


const Blob = ({width=200,height=400 ,position}) => {
  return (
  <div 
    style={{
        filter:" blur(70px)",
        position:"absolute",
        width,
        height,
        opacity:2,
        borderRadius: "38% 62% 50% 50% / 68% 53% 47% 32% ",
        backgroundImage:"  linear-gradient(200deg,#FF7A00,#5b2f24,#755467  60%,#000F30 20%)",
        ...position
    }}
  />
)};

export default Blob;
