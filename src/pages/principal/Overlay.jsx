import { useState } from 'react';

const Overlay = ({ setAbrir }) => {
  const [emailP, setEmailP] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const sendEmailPsicologo = async () => {
    setLoad(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailP }), // Envia el correo del psicólogo en el cuerpo de la solicitud
    };

    const url = 'http://localhost:3000/registerpsicologo'; // Reemplaza esto con la URL de tu backend

    try {
      const response = await fetch(url, options);
      if (response.message === "exito") {
        setLoad(false);
        setMessage("Se ha enviado el correo.");
      } else {
        setLoad(false);
        setMessage("Ha ocurrido un error al intentar enviar el correo.");
      }
    } catch (error) {
      setLoad(false);
      setMessage("Error inesperado. Vuelve a intentar más tarde.");
    }
  }

  return (
    <>
      <div className="bg_overlay"></div>
      <div className="overlay bg-gradient-secondary w-5/6 p-6 lg:w-1/3 rounded-lg flex flex-col justify-center items-center gap-10 text-white">
        <b className="flex absolute right-3 top-1 text-2xl cursor-pointer" onClick={() => setAbrir(false)}>&times;</b>
        <h3 className="font-bold text-gradient text-2xl">REGISTRO DE PSICÓLOGO</h3>
        <p>Simplemente se necesita su correo de contacto, toda la información será enviada junto con las instrucciones.
        </p>
        <input
          className="input"
          type="text"
          placeholder="Correo electrónico"
          name="emailP"
          value={emailP}
          onChange={(e) => setEmailP(e.target.value)}
        />
        <button onClick={sendEmailPsicologo} className="bg-gradient-primary w-full py-2 rounded text-white focus:outline-none">ENVIAR</button>
        {
          load && (<p>Cargando</p>)
        }
        <p className='text-lg text-center'>{message}</p>
      </div>
    </>
  )
}

export default Overlay
