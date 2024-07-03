import { useState, useEffect } from "react";
import Card from "./search/Card";

const Buscar = () => {
  const [psicologos, setPsicos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    sexo: "",
    edad: "",
    metodo: "",
    pais: "",
    region: "",
    ciudad: "",
    comuna: "",
  });

  useEffect(() => {
    const fetchPsicologos = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/get_psicologos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPsicos(data.reverse());
      } catch (error) {
        console.log('Fail!');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPsicologos();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredPsicologos = psicologos.filter((psicologo) => {
    return Object.keys(filters).every((filterType) => {
      if (filters[filterType] === "") {
        return true;
      }
      return psicologo[filterType] === filters[filterType];
    });
  });

  const filterOptions = {
    sexo: ["Masculino", "Femenino"],
    metodo: ["Online", "Presencial", "Presencial y en línea"],
    pais: ["Chile"],
    region: [
      "Arica y Parinacota",
      "Tarapacá",
      "Antofagasta",
      "Atacama",
      "Coquimbo",
      "Valparaíso",
      "Región Metropolitana",
      "Libertador General Bernardo O'Higgins",
      "Maule",
      "Ñuble",
      "Biobío",
      "Araucanía",
      "Los Ríos",
      "Los Lagos",
      "Aysén del General Carlos Ibáñez del Campo",
      "Magallanes y de la Antártica Chilena"
    ],
    ciudad: [
      "Santiago",
      "Puente Alto",
      "Maipú",
      "La Florida",
      "Las Condes",
      "San Bernardo",
      "Peñalolén",
      "Pudahuel",
      "La Pintana",
      "Ñuñoa",
      "Quilicura",
      "Macul",
      "Providencia",
      "Recoleta",
      "Renca"
    ],
    comuna: [
      "Santiago",
      "Las Condes",
      "Providencia",
      "Ñuñoa",
      "La Florida",
      "Puente Alto",
      "Maipú",
      "Peñalolén",
      "San Bernardo",
      "Quilicura",
      "Macul",
      "Recoleta",
      "La Pintana",
      "Lo Barnechea",
      "Pudahuel"
    ]
  };

  return (
    <div className="flex items-start w-full">
      <section className='flex px-4 lg:px-0 flex-col lg:pl-12 lg:w-2/3'>
        <h1 className="text-3xl text-gradient font-bold mt-6">Encuentra de forma rápida psicólogos profesionales y confiables según tus preferencias.</h1>
        <div className="flex gap-3 flex-col pb-6 lg:pb-0">
          <p className="text-gray-300 text-lg mt-2">Búsqueda filtrada</p>
          <div className="flex gap-3 flex-wrap">
            {Object.keys(filterOptions).map((filterType) => (
              <div key={filterType} className="flex flex-col text-black">
                <b className="text-white">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</b>
                <select
                  value={filters[filterType]}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded"
                >
                  <option value="">Selecciona una opción</option>
                  {filterOptions[filterType].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
        {loading && (<span className="text-3xl text-blue-500 icon-[eos-icons--loading]"></span>)}
        <div className="flex flex-wrap gap-6">
          {filteredPsicologos.map((psicologo, index) => (
            <Card
              key={index}
              nombre={psicologo.nombre}
              apellido1={psicologo.apellido1}
              apellido_2={psicologo.apellido_2}
              edad={psicologo.edad}
              universidad={psicologo.universidad}
              sexo={psicologo.sexo}
              descripcion={psicologo.descripcion}
              correo={psicologo.correo}
              telefono={psicologo.telefono}
              pais={psicologo.pais}
              metodo={psicologo.metodo}
              region={psicologo.region}
              ciudad={psicologo.ciudad}
              comuna={psicologo.comuna}
              imagen={psicologo.imagen}
            />
          ))}
        </div>
      </section>
      <section className='w-1/3 py-6 lg:px-24 shadow hidden lg:block'>
        <div className='py-3 px-6 rounded bg-gray-900 flex flex-col gap-2'>
          <h2 className='text-2xl'>Temáticas más buscadas en las publicaciones de usuarios</h2>
          <b>#Soledad</b>
          <b>#Depresión</b>
          <b>#Tristeza</b>
          <b>#Esperanza</b>
        </div>
      </section>
    </div>
  )
}

export default Buscar;
