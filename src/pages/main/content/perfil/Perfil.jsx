import React, { useState, useEffect } from 'react';
import Psicologo from "./Psicologo";
import Usuario from "./Usuario";

const usuario = {
    "id":1,
    "username": "lolerocurado3772",
    "email": "lolcitoelpeorjuego3@gmail.com",
    "anonimo": false,
    "cantidad_publicaciones": 0,
    "psicologos_seguidos": 0,
    "telefono":"123456789"
}

const psicologo = {
    "id":1,
    "nombre": "María",
      "apellido1": "González",
      "apellido2": "López",
      "edad": 23,
      "universidad": "Universidad Nacional",
      "ubicacion": "Madrid, España",
      "sexo": "Femenino",
      "descripcion": "Estudiante de ingeniería informática apasionada por la programación y la inteligencia artificial. Ma texto texto texto texto texto texto texto texteo texto.",
      "publicaciones": 5,
      "email": "mariagonzalez@example.com",
      "numero": "+34 123 456 789",
      "imagen": "",
      "seguidores": 44
}

const Perfil = ({ tipo }) => {
    const [id, setId] = useState("");
    //llenar datos con el useEffect
    //const [psicologo, setPsicologo] = useState({});
    //const [usuario, setUsuario] = useState({});
    return (
        <div>
            <h1 className='text-3xl text-gradient font-bold'>Perfil</h1>
            <p>Información de la cuenta</p>
            {
                tipo === "psicologo" && 
                    <Psicologo
                    id={id}
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
            }
            {
                tipo === "usuario" && 
                <Usuario 
                username={usuario.username}
                email={usuario.email}
                anonimo={usuario.anonimo}
                cantidad_publicaciones={usuario.cantidad_publicaciones}
                psicologos_seguidos={usuario.psicologos_seguidos}
                numero={usuario.numero}
                />
            }
        </div>
    )
}

export default Perfil
