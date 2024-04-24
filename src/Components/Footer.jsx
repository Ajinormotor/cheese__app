import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <section className=" bg-white mb-0"    id="footer">

    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 p-7">

    
      <div className="logo">
  <h1 className="text-2xl items-center flex "><i className="ri-heart-pulse-fill  text-[35px]"></i> Che<span className="text-green-400">ese</span></h1>

  <p className="opacity-90">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quod dicta <br  /> cupiditate unde.
     A distinctio pariatur, aliquam voluptate dolorem eligendi 
   </p>
</div>

<div className="footer__box">
  <h1 className="text-xl font-semibold">Useful Links</h1>
  <ul  className="p-2  opacity-75">
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> Home</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> About Us</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> Services</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> Terms of service</Link></li>

  </ul>
</div>
      

      
<div className="footer__box">
  <h1 className="text-xl font-semibold">Company</h1>
  <ul className="p-2  opacity-75">
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> Office</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> Victoporia Street, London, United Kingdom</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i>(001) 2222 3434</Link></li>
    <li><Link to="#"><i className="ri-arrow-right-fill"></i> contact@ajinolab.com</Link></li>

  </ul>
</div>

<div className="footer__box">
  <h1  className="text-xl font-semibold pb-4">Join Our Newsletter</h1>
  <p  className="opacity-90 pb-4">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
  <div className="border-2 border-grey rounded-[10px]"><span className="flex items-end justify-end"><button  className="rounded-xl bg-blue-500 text-white px-4 py-3 "> Subscribe</button></span></div>
</div>
      

    </div>

    <hr className="bg-black p-0.5 max-w-full"/>
    <p className="text-center pb-4"><i className="ri-copyright-line"></i> Copyright</p>

   </section>
  )
}

export default Footer