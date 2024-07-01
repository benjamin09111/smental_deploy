import React, { useState } from "react";
import Usuario from "./crear/Usuario";

const Crear = () => {
  
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    autor_id: "",
    imagen: "",
    nombre: localStorage.getItem("nombre")
  });

  const [hashtag, setHashtag] = useState("");

  const create = async () => {
    // obtener la fecha
    const today = new Date();
    const nuevaPublicacion = {
      ...publicacion,
      fecha: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      autor_id: localStorage.getItem("nombre"),
      tematica: hashtag
    };

    try {
      const response = await fetch('http://localhost:3000/create_publication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPublicacion)
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Publicación creada con éxito:", result);
        // Aquí puedes agregar lógica para manejar la respuesta, como redirigir al usuario o mostrar un mensaje de éxito.
      } else {
        console.error('Error al crear la publicación:', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear la publicación:', error);
    }
  };

  return (
    <div className="flex items-start w-full">
      <section className='flex flex-col lg:pl-12 lg:w-2/3 px-4 lg:px-0 pt-6'>
        <Usuario hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        <button
          className="lg:w-1/2 bg-gradient-primary py-2"
          type="button"
          onClick={create}
        >
          Crear
        </button>
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
  );
};

export default Crear;
