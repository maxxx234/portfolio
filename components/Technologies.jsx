
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNodejs} from "react-icons/tb"
import { SiMongodb } from "react-icons/si";
import { FaHtml5, } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion}  from "framer-motion"
import { SiRedux } from "react-icons/si";

const iconVariants = (duration) => (
  {
    initial: {y: -10},
    animate: {
      y:[10, -10],
      transition:  {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType : "reverse"
      },
    }
  }
);
const Technologies = () => {
  return (
    
    <div className="border-b border-neutral-800 pb-24 ">
    <h1 className="my-20 text-center text-4xl"> 
    Technologies 
    </h1>  
    <div className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
       <motion.div
       variants={iconVariants(5)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4"
       >
<TbBrandNodejs className="text-7xl text-green-500"/>
          </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
<SiMongodb className="text-7xl text-green-500"/>
          </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<FaHtml5  className="text-7xl text-orange-400"/>
          </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<FaCss3 className="text-7xl text-blue-400"/>
          </motion.div>
        <motion.div 
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
< FaBootstrap className="text-7xl text-purple-400"/>
          </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<RiTailwindCssFill  className="text-7xl text-cyan-400"/>
          </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">

<SiRedux className="text-7xl text-purple-400"/>
          </motion.div>
       
        </div>
        
        
       </div>
  )
 
}
export default Technologies