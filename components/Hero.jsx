import {HERO_CONTENT} from "D:/react-portfolio/vite-project/react-portfolio-assets-kevin/constants"
import profilepic from "D:/react-portfolio/vite-project/react-portfolio-assets-kevin/assets/shashank.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x:-100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition:{duration: 0.5,delay}
  }
})

const Hero = () => {
  return (
   <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1
       variants={container(0)}
       initial="hidden"
animate="visible"
className="pb-16 text-6xl lg:text-8xl font-thin tracking-tighter lg:mt-16">Shashank saini</motion.h1>
        <motion.span  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
     <motion.p   variants={container(0)}
       initial="hidden"
animate="visible"
className="my-2 lg:h-full max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
     </div>
   </div>
   <div className="w-full lg:w-1/2 lg:p-8">
   <div className="flex justify-center">
    <img src={profilepic} />
   </div>
   </div>
   </div>
   </div>
  )
}

export default Hero
// bg gradient to r deifnes a horizontal linear gradient that goes from left to right
// Hi there!, myself Shashank i am  an aspiring MERN stack developer, building scalable web applications with modern technologies.With 1 year of hands-on experience.I have honed my skills in  front-end-technologies like React Js,javascript and  database like mongoDB and working on backend technologies like node Js ,express Js.Through my past 1 year experience i have built a potential to contribute my skills and exposure in any firm i am working with and uplifitng the frameworks of it.
