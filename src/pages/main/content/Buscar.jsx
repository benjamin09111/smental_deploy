import psicologos from "../../../json/psicologos";
import Card from "./search/Card";

const Buscar = () => {
  return (
    <div className="flex px-6 lg:px-0 flex-col gap-4 lg:px-16">
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
    <div className="flex flex-wrap gap-3">
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
        />
      ))
    }
    </div>

    </div>
  )
}

export default Buscar