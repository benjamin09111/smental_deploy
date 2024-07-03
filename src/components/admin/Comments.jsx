import {useState, useEffect} from 'react'

const Comments = () => {
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

useEffect(()=>{
  const obtenerReportes = async()=> {
    const res = await fetch("http://localhost:3000/get_comments");

    if(!res.ok){
      setMessage("Error de servidor.");
      setLoading(false);
      return;
    }

    const data = await res.json();

    const limitedData = data.slice(0, 5).reverse();

    setReportes(limitedData);
    setLoading(false);
    setMessage("");
  }

  obtenerReportes();
}, [])

  return (
    <div className='flex flex-col gap-3 min-h-[100vh]'>
    {loading && <span className="icon-[eos-icons--loading] text-3xl text-blue-500"></span>}
      <div className='text-red-500'>{message}</div>
      {
        reportes.length > 0 ? reportes.map((comentario, index)=>{
          return(
            <div key={index} className='flex flex-col gap-2 bg-gray-800 rounded p-2'>
              <p>{comentario.descripcion}</p>
              <p>Fecha: {comentario.fecha}</p>
              <p>Nombre: {comentario.nombre}</p>
            </div>
          )
        }) : (<b>No existen comentarios hechos por usuarios.</b>)
      }
    </div>
  )
}

export default Comments