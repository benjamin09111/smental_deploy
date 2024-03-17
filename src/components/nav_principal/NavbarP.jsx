import { useState } from "react";
import Terminos from "../../pages/principal/Terminos";

const NavbarP = ({setOpen, open, terminos, setTerminos}) => {
  return (
    <div style={{height: "10vh"}} className="justify-between py-6 lg:px-64 px-12 bg-transparent absolute top-0 left-0 w-full text-white lg:flex hidden items-center">
      <div className="flex gap-2 items-center">
        <b className="text-2xl">Salud Mental</b>
        <p className="underline cursor-pointer" onClick={()=> setTerminos(!terminos)}>Términos y condiciones</p>
      </div>
      <div className="flex items-center gap-4">
      <button className='px-3 py-2 rounded bg-gradient-primary' onClick={() => setOpen(true)}>Registrarme como psicólogo</button>
      <p className='text-center text-xs'>© Derechos reservados 2024</p>
      </div>
      {
        terminos && (<Terminos setTerminos={setTerminos} />)
      }
    </div>
  )
}

export default NavbarP
