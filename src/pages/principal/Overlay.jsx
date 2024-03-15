import {useState} from 'react';

const Overlay = ({setOpen}) => {
  const [emailP, setEmailP] = useState("");

  return (
    <>
    <div className="bg_overlay"></div>
    <div className="overlay p-6 w-full lg:w-1/3 rounded-lg flex flex-col justify-center items-center gap-3 text-black">
      <b className="flex absolute right-3 top-1 text-2xl cursor-pointer" onClick={()=>setOpen(false)}>&times;</b>
      <h3 className="font-bold text-blue-500 text-xl">Registro de psicólogo</h3>
      <p>Simplemente se necesita su correo de contacto, toda la información será enviada y se verificará como psicólogo en el caso de ser posible.
      </p>
      <input
      className="border border-blue-600 rounded px-4 py-2"
      type="text"
      placeholder="Correo electrónico"
      name="emailP"
      value={emailP}
      onChange={(e)=>setEmailP(e.target.value)}
      />
      <button className="bg-purple-700 hover:bg-purple-800 w-full py-2 rounded text-white focus:outline-none">Enviar</button>
    </div>
    </>
  )
}

export default Overlay
