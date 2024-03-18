import React from 'react'
import HashtagInput from './HashtagInput'

const Usuario = ({publicacion, setPublicacion, hashtag, setHashtag}) => {
  return (
    <div>
      <div className="text-4xl text-gradient font-bold">
        Desahógate o comparte tus experiencias
      </div>
      <div className="flex gap-10">
        <span className="icon-[material-symbols--title] text-2xl  bg-gradient-primary"></span>
        <input
          type="text"
          name="titulo"
          className="input"
          placeholder="Título"
          value={publicacion.titulo}
          onChange={(e) =>
            setPublicacion({ ...publicacion, titulo: e.target.value })
          }
        />
      </div>
      <div className="flex gap-10">
        <span className="icon-[material-symbols--description] text-2xl  bg-gradient-primary"></span>
        <textarea
          type="text"
          name="descripcion"
          className="input resize-none h-16"
          placeholder="Descripción"
          value={publicacion.descripcion}
          onChange={(e) =>
            setPublicacion({ ...publicacion, descripcion: e.target.value })
          }
        ></textarea>
      </div>
      <div  className='mt-12'>
        <HashtagInput hashtag={hashtag} setHashtag={setHashtag} />
      </div>
      <div className="flex gap-5">
        <b>
          En caso de querer publicar de manera anónima, es decir, sin nombre de usuario, ir a perfil y colocar modo anónimo.
        </b>
      </div>
      <button
        className="w-full bg-gradient-primary py-2"
        type="button"
        onClick={() => {}}
      >
        Crear publicación
      </button>
    </div>
  )
}

export default Usuario
