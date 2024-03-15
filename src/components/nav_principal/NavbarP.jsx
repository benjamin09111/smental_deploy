import React from 'react';

const NavbarP = () => {
  return (
    <div style={{height: "10vh"}} className="justify-between py-6 lg:px-64 px-12 bg-black text-white lg:flex hidden">
      <div className="flex gap-2 items-center">
        <b className="text-2xl">Salud Mental</b>
        <p className="underline">Términos y condiciones</p>
      </div>
      <div className="flex items-center">
      <p className='text-center text-xs'>© Derechos reservados 2024</p>
      </div>
    </div>
  )
}

export default NavbarP
