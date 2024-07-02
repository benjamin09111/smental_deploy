import React, { useState, useEffect } from 'react';

const Publicaciones = ({ tipo }) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comentarios, setComentarios] = useState({}); // Estado para almacenar los comentarios por publicación

  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/get_publications");
        const data = await res.json();

        if (!res.ok) {
          setMessage("Error al obtener publicaciones de usuario.");
        } else {
          setPublicaciones(data.reverse());
          console.log(data[0]);
        }
      } catch (error) {
        setMessage("Error al obtener publicaciones de usuario.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const handleComentarioChange = (id, value) => {
    setComentarios(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePublicarComentario = async (publicacionId) => {
    try {
      const today = new Date();
      const nuevo_comentario = {
        nombre: localStorage.getItem("nombre"),
        descripcion: comentarios[publicacionId] || '',
        fecha: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        autor_id: localStorage.getItem("id"),
        publicacion_id: publicacionId
      };
      console.log(nuevo_comentario);
      const res = await fetch('http://localhost:3000/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevo_comentario)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage2("Comentario publicado.");
        setComentarios(prev => ({ ...prev, [publicacionId]: '' })); // Limpiar el comentario después de publicarlo
        // Opcionalmente, actualizar la lista de publicaciones para incluir el nuevo comentario
        setPublicaciones(prev => prev.map(pub => pub.id === publicacionId ? { ...pub, comments: [...pub.comments, data], comentarios: pub.comentarios + 1 } : pub));
      } else {
        setMessage2("Error al publicar comentario.");
      }
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };

  const [search, setSearch] = useState("");
  return (
    <div className='flex items-start w-full xl:pr-6 xl:py-8'>
      <section className='flex flex-col lg:pl-12 lg:w-2/3'>
        <div className='flex flex-col gap-6 px-4 lg:px-0 py-6'>
          <h1 className='text-gradient text-3xl font-bold'>Conoce y comparte las experiencias usuarios</h1>
        </div>
        {loading && <span className='icon-[eos-icons--loading] text-3xl text-blue-500'></span>}
        <div>{message}</div>
        {publicaciones.length > 0 && search === "" ? (
          publicaciones.map((publicacion, index) => (
            <div key={index} className='flex flex-col px-3 pb-6 contenedor_publicacion'>
              <div className='flex justify-between items-center pt-2 pb-1'>
                <div className='flex items-center gap-6'>
                  <div className='flex items-center gap-2'>
                    <span className="icon-[solar--user-speak-bold] text-lg bg-gradient-primary"></span>
                    <b className='font-normal text-gray-100'>{publicacion.nombre}</b>
                  </div>
                </div>
                <div>
                  <span className="icon-[material-symbols--report] text-xl text-red-300 cursor-pointer hover:text-red-600"></span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-xl font-semibold'>{publicacion.titulo}</div>
                <div className='text-lg text-gray-400 font-semibold'>Temática: {publicacion.tematica}</div>
                <p className='text-gray-300 font-semibold'>{publicacion.descripcion}</p>
                <b className='font-normal text-gray-500'>{publicacion.fecha}</b>
              </div>

              <div className='flex items-center gap-3 '>
                <div className='flex items-center mt-3 gap-2 p-2 rounded bg-gray-800 w-fit'>
                  <span className="icon-[fluent--comment-16-regular] text-2xl"></span>
                  <b>{publicacion.comentarios}</b>
                </div>

                <div className='flex items-center gap-2 flex-wrap w-full pt-3'>
                  <input
                    type="text"
                    className='input_coment'
                    placeholder='Apoya con tu comentario'
                    value={comentarios[publicacion.id] || ''}
                    onChange={(e) => handleComentarioChange(publicacion.id, e.target.value)}
                  />
                  <button
                    className='hover:text-secondary-custom text-gray-300'
                    onClick={() => handlePublicarComentario(publicacion.id)}
                  >
                    Publicar
                  </button>
                </div>
              </div>
              <div>{message2}</div>
              <div className='flex flex-col gap-1 my-3'>
                {publicacion.comentarios > 0 && publicacion.comments.map(comment => (
                  <div className='rounded py-1 px-2 bg-gray-800 text-white' key={comment._id}>
                    <div className='flex gap-3 items-center'><b className='text-xl text-gray-200'>{comment.nombre}</b>
                      <a className='text-gray-300'>ha comentado el {comment.fecha}</a></div>
                    <p>{comment.descripcion}</p>
                  </div>
                ))}
              </div>

              {tipo === "admin" && (
                <button type='button' className='px-3 py-1 mt-2 text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer lg:w-1/3'>
                  Obtener información de usuario
                </button>
              )}
            </div>
          ))
        ) : (
          publicaciones.map((publicacion, index) => {
            if (publicacion.hashtag.includes(search)) {
              return (
                <div key={index} className='flex flex-col px-3 pb-6 contenedor_publicacion'>
                  <div className='flex justify-between items-center pt-2 pb-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-2'>
                        <span className="icon-[solar--user-speak-bold] text-lg bg-gradient-primary"></span>
                        <b className='font-normal text-gray-100'>{publicacion.nombre}</b>
                      </div>
                    </div>
                    <div>
                      <span className="icon-[material-symbols--report] text-xl text-red-300 cursor-pointer hover:text-red-600"></span>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <div className='text-xl font-semibold'>{publicacion.titulo}</div>
                    <div className='text-lg text-gray-400 font-semibold'>Temática: {publicacion.hashtag}</div>
                    <p className='text-gray-300 font-semibold'>{publicacion.contenido}</p>
                    <b className='font-normal text-gray-500'>{publicacion.fecha}</b>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <div className='flex items-center mt-3 gap-2 p-2 rounded bg-gray-800 w-fit'>
                      <span className="icon-[fluent--comment-16-regular] text-2xl"></span>
                      <b>{publicacion.comentarios}</b>
                    </div>

                    <div className='flex items-center gap-2 flex-wrap w-full pt-3'>
                      <input
                        type="text"
                        className='input_coment'
                        placeholder='Apoya con tu comentario'
                        value={comentarios[publicacion.id] || ''}
                        onChange={(e) => handleComentarioChange(publicacion.id, e.target.value)}
                      />
                      <button
                        className='hover:text-secondary-custom text-gray-300'
                        onClick={() => handlePublicarComentario(publicacion.id)}
                      >
                        Publicar
                      </button>
                    </div>
                  </div>

                  {publicacion.comentarios > 0 && publicacion.comments.map(comment => (
                    <div className='rounded py-1 px-2 bg-gray-800 text-white' key={comment._id}>
                      <p>{comment.nombre}</p>
                      <p>{comment.descripcion}</p>
                      <p>Fecha: {comment.fecha}</p>
                    </div>
                  ))}

                  {tipo === "admin" && (
                    <button type='button' className='px-3 py-1 mt-2 text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer lg:w-1/3'>
                      Obtener información de usuario
                    </button>
                  )}
                </div>
              );
            }
            return null;
          })
        )}
      </section>
      <section className='w-1/3 py-6 lg:px-24 relative shadow hidden lg:block'>
        <div className='flex items-center gap-3 fixed w-1/2 bg-gray-950 pt-6 pb-2 top-[10vh]'>
          <span class="icon-[ic--outline-search] text-2xl"></span>
          <input
            type="text"
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='lg:w-1/3 focus:outline-none rounded bg-transparent px-2 py-2'
            style={{ border: "1px solid gray" }}
            placeholder='Buscar por temática...'
          />
        </div>
        <div className='py-3 my-12 px-6 rounded bg-gray-900 flex flex-col gap-2'>
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

export default Publicaciones;
