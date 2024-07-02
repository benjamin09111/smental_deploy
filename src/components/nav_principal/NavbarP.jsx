import { useState } from "react";
import Overlay from "../../pages/principal/Overlay";
import Terminos from "../../pages/principal/Terminos";

const NavbarP = ({setOpen, open, terminos, setTerminos}) => {
  const [abrir, setAbrir] = useState(false);
  
  return (
    <div style={{height: "10vh"}} className="justify-between py-6 lg:px-64 px-12 bg-transparent absolute top-0 left-0 w-full text-white lg:flex hidden items-center">
      
      {
        abrir && <Overlay setAbrir={setAbrir} />
      }
      <div className="flex gap-2 items-center">
        <b className="text-xl">Red social orientada a la salud mental</b>
      </div>
      <div className="flex items-center gap-4">
      <p className='text-center text-xs'>© Derechos reservados 2024</p>
      </div>
      {
        terminos && (<Terminos setTerminos={setTerminos} />)
      }
    </div>
  )
}

export default NavbarP
