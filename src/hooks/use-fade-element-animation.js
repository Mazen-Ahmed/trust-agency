import { useInView } from "framer-motion";

const useFadeElementAnimation = (ref) => {
    const isInView=useInView(ref,{once:true})


  const element = {
    opacity: isInView ?1 : 0,
    transition: "2s",
  };

  return {element};
};

export default useFadeElementAnimation;

