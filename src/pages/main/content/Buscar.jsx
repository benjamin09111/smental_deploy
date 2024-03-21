import psicologos from "../../../json/psicologos";
import Card from "./search/Card";

const Buscar = () => {
  return (
    <div className="flex items-start w-full">
      <section className='flex flex-col lg:pl-12 w-2/3 pt-6'>
      <h1 className="text-3xl text-gradient font-bold mt-6">Encuentra de forma rápida psicólogos profesionales y confiables según tus preferencias.</h1>
      <div className="flex flex-col">
        <p className="text-gray-300 text-lg">Búsqueda filtrada</p>
        <div className="flex gap-3 flex-wrap">
        <b>Sexo</b>
        <b>Universidad</b>
        <b>Ubicación</b>
        <b>Nombre</b>
        </div>
      </div>
    <div className="flex flex-wrap gap-6">
    {
      psicologos.map((psicologo)=> (
        <Card
        nombre={psicologo.nombre}
        apellido1={psicologo.apellido1}
        apellido2={psicologo.apellido2}
        edad={psicologo.edad}
        universidad={psicologo.universidad}
        ubicacion={psicologo.ubicacion}
        sexo={psicologo.sexo}
        descripcion={psicologo.descripcion}
        publicaciones={psicologo.publicaciones}
        email={psicologo.email}
        numero={psicologo.numero}
        seguidores={psicologo.seguidores}
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