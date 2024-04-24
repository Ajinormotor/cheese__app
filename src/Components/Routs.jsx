import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"


const Routs = () => {
  return (
  <>
  
  <Routes>
<Route path='/'  element={<Home />}  />
  </Routes>
  
  </>
  )
}

export default Routs