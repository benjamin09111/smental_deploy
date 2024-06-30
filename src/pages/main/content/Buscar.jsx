import { useState, useEffect } from "react";
import Card from "./search/Card";

const Buscar = () => {
  const [psicologos, setPsicos] = useState([]);

  useEffect(() => {
    const fetchPsicologos = async () => {
      try {
        const response = await fetch('http://localhost:3000/get_psicologos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPsicos(data);
      } catch (error) {
        console.log('Fail!');
        console.error('Error fetching data:', error);
      }
    };

    fetchPsicologos();
  }, []);
  return (
    <div className="flex items-start w-full">
      <section className='flex px-4 lg:px-0 flex-col lg:pl-12 lg:w-2/3'>
      <h1 className="text-3xl text-gradient font-bold mt-6">Encuentra de forma rápida psicólogos profesionales y confiables según tus preferencias.</h1>
      <div className="flex gap-3 flex-col pb-6 lg:pb-0">
        <p className="text-gray-300 text-lg mt-2">Búsqueda filtrada</p>
        <div className="flex gap-3 flex-wrap">
        <b>Sexo</b>
        <b>Edad</b>
        <b>Método</b>
        <b>Pais</b>
        <b>Región</b>
        <b>Ciudad</b>
        <b>Comuna</b>
        </div>
      </div>
    <div className="flex flex-wrap gap-6">
    {
      psicologos.map((psicologo)=> (
        <Card
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
        />
      ))
    }
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

export default Buscar