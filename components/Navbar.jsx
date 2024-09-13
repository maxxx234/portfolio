import logo from "D:/react-portfolio/vite-project/react-portfolio-assets-kevin/assets/shank.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className="mb-20 flex  items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/shashanksaini002/">
    <FaLinkedin/> 
    </a>
    <a href="https://github.com/maxxx234">
    
    <FaGithub/> 
    </a>
    <a href="https://www.instagram.com/shashank._.max/">
    <FaInstagram/>
    </a>
    </div>
   </nav>
  )
}

export default Navbar