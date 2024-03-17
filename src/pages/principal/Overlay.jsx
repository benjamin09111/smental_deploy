import {useState} from 'react';

const Overlay = ({setOpen}) => {
  const [emailP, setEmailP] = useState("");

  return (
    <>
    <div className="bg_overlay"></div>
    <div className="overlay bg-gradient-secondary w-5/6 p-6 lg:w-1/3 rounded-lg flex flex-col justify-center items-center gap-10 text-white">
      <b className="flex absolute right-3 top-1 text-2xl cursor-pointer" onClick={()=>setOpen(false)}>&times;</b>
      <h3 className="font-bold text-gradient text-2xl">REGISTRO DE PSICÓLOGO</h3>
      <p>Simplemente se necesita su correo de contacto, toda la información será enviada y se verificará como psicólogo en el caso de ser posible.
      </p>
      <input
      className="input"
      type="text"
      placeholder="Correo electrónico"
      name="emailP"
      value={emailP}
      onChange={(e)=>setEmailP(e.target.value)}
      />
      <button className="bg-gradient-primary w-full py-2 rounded text-white focus:outline-none">ENVIAR</button>
    </div>
    </>
  )
}

export default Overlay
