import { CONTACT } from "../../react-portfolio-assets-kevin/constants"

const Contact = () => {
  return (
   <div className="border-b border-neutral-900pb-20">
    <h1 className="my-10  text-center text-4xl">
       Get in touch
    </h1>
    <div className="text-center tracking-tighter ">
        <p className="my-4 ">{CONTACT.address}</p>
        <p className="my-4 ">{CONTACT.phoneNo}</p>
        <a href="#"  className="my-4 mx-4">{CONTACT.email}</a> <span/> <span/> <span/>
        <a href="#"  className="my-4 space-x-5">{CONTACT.linkedin}</a>
        <a href="#" className="border-b justify-center"><span/> {CONTACT.gitHub}</a>
    </div>
   </div>
  )
}

export default Contact