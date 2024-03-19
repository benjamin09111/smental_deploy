import img from "/user.webp";

const Psicologo = ({id, seguidores, nombre, apellido1, apellido2, edad, universidad, ubicacion, descripcion, sexo, numero, email, publicaciones, imagen }) => {
  return (
    <div className="flex flex-col gap-5">
        <p> {nombre} {apellido1} {apellido2} </p>
        <div>Seguidores: {seguidores} </div>

        <img src={imagen === "" ? img : img} alt="Foto de perfil" />

        <div>
            <div><b>Edad</b>: {edad} </div>
            <button>Cambiar</button>
        </div>

        <div>
            <b>Descripción</b>
            <div>{descripcion}</div>
            <button>Cambiar</button>
        </div>

        <div>
            <b>Universidad</b>: {universidad}
        </div>

        <div>
        <div>
            <b>Ubicación</b>: {ubicacion}
        </div>
        <button>Cambiar</button>
        </div>

        <div>
        <div>
            <b>Email</b>: {email}
        </div>
        <button>Cambiar</button>
        </div>

        <div>
        <div>
            <b>Número</b>: {numero}
        </div>
        <button>Cambiar</button>
        </div>

        <div><B>Cantidad de publicaciones</B>: {publicaciones} </div>
      
    </div>
  )
}

export default Psicologo
