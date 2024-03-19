import React from 'react'

const Usuario = ({ id, numero, username, email, anonimo, cantidad_publicaciones, psicologos_seguidos }) => {
    return (
        <div className='flex flex-col gap-5'>
            <div>
                <div><b>Nombre de usuario</b>: {username} </div>
                <button>Cambiar</button>
            </div>

            <div>
                <div><b>Numero de recuperación</b>: {numero} </div>
                <button>Cambiar</button>
            </div>

            <div><b>Correo electrónico para iniciar sesión</b>: {email} </div>

            <div>
                <div><b>Perfil en anónimo: </b>: {
                    anonimo ? "Sí" : "No"
                }</div>
                <button>Cambiar</button>
            </div>

            <div><b>Cantidad de publicaciones</b>: {cantidad_publicaciones} </div>

            <div><b>Cantidad de psicólogos seguidos</b>: {psicologos_seguidos} </div>

            <button>Ver y gestionar psícologos seguidos</button>

            <button>Cambio de contraseña</button>
        </div>
    )
}

export default Usuario
