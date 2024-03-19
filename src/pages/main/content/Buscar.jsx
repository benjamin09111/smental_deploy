import psicologos from "../../../json/psicologos";
import Card from "./search/Card";

const Buscar = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Encuentra de forma rápida psicólogos profesionales y confiables según tus preferencias.</h1>
      <div>
        FILTRAR
      </div>
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
  )
}

export default Buscar