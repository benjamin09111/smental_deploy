import {useState, useEffect} from 'react'

const Reports = () => {
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

useEffect(()=>{
  const obtenerReportes = async()=> {
    const res = await fetch("http://localhost:3000/get_reportes");

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
        reportes.length > 0 ? reportes.map((report, index)=>{
          return(
            <div key={index} className='flex flex-col gap-2 bg-gray-800 rounded p-2'>
              <p>{report.descripcion}</p>
              <b>Reportado el {report.fecha}</b>
            </div>
          )
        }) : (<b>No existen reportes de usuarios.</b>)
      }
    </div>
  )
}

export default Reports