import { useInView } from "framer-motion";
import {useLocale} from "next-intl"
const useSlideElementAnimation = (ref) => {
  const locale=useLocale()

  const isInView=useInView(ref,{once:true})

  const rightElement = {
    transform: isInView ? "translateX(0)" : "translateX(100%)",
    transition: "1s",
  };

  const leftElement = {
    transform: isInView ? "translateX(0)" : "translateX(-100%)",
    transition: "1s",
  };

  return {
    rightElement:locale==="ar"?leftElement:rightElement, 
    leftElement:locale==="ar"?rightElement:leftElement, 
  };
};

export default useSlideElementAnimation;

