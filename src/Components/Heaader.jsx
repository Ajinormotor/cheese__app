import { useState } from "react"
import { Link } from "react-router-dom"

const nav_link = [
    {
        path: '#',
        display: 'Home',
    },
    {
        path: '#',
        display: 'About',
    },
    {
        path: '#',
        display: 'Team',
    },
    {
        path: '#',
        display: 'Contact',
    },

]

const Heaader = () => {

const [nav, setNav]  = useState(false);


const menuHandler = () => {
   setNav(!nav);
}



  return (
    <div className="container  max-w-full  items-center  overflow-x-hidden shadow-md p-3">

        <div className="flex justify-between items-center w-[100%]">
        {/* LOGO SECTION */}
        <div>
<h1  className="flex  items-center text-white text-[25px]"><i className="ri-heart-pulse-fill  text-[35px]"></i> Che<span className="text-green-400">ese</span></h1>
        </div>



        <div className="md:hidden     relative  text-green-400  text-[20px] cursor-pointer"  onClick={menuHandler}  >
    {nav ?    <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
  
   </div>
       
       

        <div  className=" justify-between gap-7 items-center md:w-[600px]   flex  "  >

            <div className={nav? "menu" : "hide"}>

                
            <ul className="navigation" >
                {
nav_link.map(item=>(
    <li  className="text-[20px] text-black md:text-white  font-[500] md:flex  p-4 gap-3  flex"  key={item}><Link to={item.path}>{item.display}</Link></li>

))
                
                }
            </ul>


            </div>

            <div>
      <button className="bg-green-400 rounded-[10px] text-white px-6 py-2">Sign In </button>
   </div>

        </div>


    





        </div>



    </div>
  )
}

export default Heaader