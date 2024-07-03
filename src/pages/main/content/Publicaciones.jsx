import React, { useState, useEffect } from 'react';
import PopUpReporte from './PopUpReporte';

const Publicaciones = ({ tipo }) => {
  const [popUp, setPopUp] = useState(false);
  const [selectedPublicationName, setSelectedPublicationName] = useState("");
  const [selectedPublicationId, setSelectedPublicationId] = useState("");
  const [publicaciones, setPublicaciones] = useState([]);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comentarios, setComentarios] = useState({}); // Estado para almacenar los comentarios por publicación
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      setMessage("");
      try {
        const res = await fetch("http://localhost:3000/get_publications");
        const data = await res.json();

        if (!res.ok) {
          setMessage("Error al obtener publicaciones de usuario.");
        } else {
          setPublicaciones(data.reverse());
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

  const filteredPublicaciones = search
    ? publicaciones.filter(pub => pub.tematica.toLowerCase().includes(search.toLowerCase()))
    : publicaciones;

  return (
    <div className='flex justify-center lg:justify-start lg:pl-12 items-start w-full'>
      <section className='flex flex-col w-full lg:pl-12 lg:w-2/3 justify-center items-center'>
        <div className='p-4 mt-1'>
        <h1 className='text-primary-custom text-3xl font-bold'>Conoce y comparte las experiencias de usuarios</h1>
        </div>
        
        <div className='lg:hidden justify-center items-center bg-secondary-custom/40 flex rounded w-1/2 lg:1/4 mb-4 mt-4 pl-16 relative'>
        <span className="icon-[ic--baseline-search] text-primary-custom text-3xl absolute top-1 left-1"></span>
          <input
            type="text"
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='lg:hidden outline-none rounded bg-transparent px-2 py-2 text-black'
            placeholder='Buscar por temática...'
          />
        </div>

        <div>{message}</div>
        {filteredPublicaciones.length > 0 ? (
          filteredPublicaciones.map((publicacion, index) => (
            <div key={index} className='flex flex-col px-3 pb-6 w-full border-t-2 border-secondary-custom'>
              <div className='flex justify-between items-center pt-2 pb-1'>
                <div className='flex items-center gap-6'>
                  <div className='flex items-center gap-2'>
                    <span className="icon-[solar--user-speak-bold] text-2xl bg-third-custom relative bottom-[-0.05rem]"></span>
                    <b className='font-semibold text-2xl text-black'>{publicacion.nombre}</b>
                  </div>
                </div>
                <div>
                  {popUp && selectedPublicationName === publicacion.nombre && selectedPublicationId === publicacion.id && (
                    <>
                      <div className='bg-gray-900 opacity-[0.8] fixed top-0 left-0 h-[100vh] w-[100vw] z-[999999]'></div>
                      <PopUpReporte 
                        nombre={selectedPublicationName} 
                        setState={setPopUp} 
                        userId={localStorage.getItem("id")} 
                        publicationId={publicacion.id} 
                      />
                    </>
                  )}
                  <span
                    onClick={() => {
                      setSelectedPublicationName(publicacion.nombre);
                      setSelectedPublicationId(publicacion.id);
                      setPopUp(true);
                    }}
                    className="icon-[material-symbols--report] text-xl text-red-600 cursor-pointer hover:text-red-700"></span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-3xl text-primary-custom font-bold'>{publicacion.titulo} <div className='text-xl text-black font-normal'><b>#</b> {publicacion.tematica}</div></div>
                
                <p className='text-gray-700 text-xl font-semibold'>{publicacion.descripcion}</p>
                <b className='font-normal text-xl text-gray-500'>{publicacion.fecha}</b>
              </div>

              <div className='flex items-center gap-3 '>
                <div className='flex items-center mt-3 gap-2 p-2 rounded text-black w-fit'>
                  <span className="icon-[fluent--comment-16-regular] text-3xl"></span>
                  <b>{publicacion.comentarios}</b>
                </div>

                <div className='flex items-center justify-center lg:items-left gap-2 flex-wrap w-full lg:w-1/2 pt-3 lg:ml-2'>
                  <input
                    type="text"
                    className='input_coment '
                    placeholder='Apoya con tu comentario'
                    value={comentarios[publicacion.id] || ''}
                    onChange={(e) => handleComentarioChange(publicacion.id, e.target.value)}
                  />
                  <button
                    className='hover:text-secondary-custom text-xl text-gray-500'
                    onClick={() => handlePublicarComentario(publicacion.id)}
                  >
                    Publicar
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-1 my-3'>
                {publicacion.comentarios > 0 && publicacion.comments.map(comment => (
                  <div className='rounded py-1 px-2 text-black' key={comment._id}>
                    <div className='flex gap-3 items-center'><b className='text-xl text-gray-800'>{comment.nombre}</b>
                      <a className='text-gray-500'>ha comentado el {comment.fecha}</a></div>
                    <p>{comment.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>No se encontraron publicaciones.</div>
        )}
        {loading && <div className='justify-center items-center flex my-4'>
          <span className='icon-[eos-icons--loading] text-3xl text-secondary-custom'></span></div>}
      </section>
    </div>
  );
};

export default Publicaciones;
