import {useEffect, useState} from 'react'
import HashtagInput from "./HashtagInput";

const Psicologo = ({publicacion, setPublicacion, hashtag, setHashtag}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="text-4xl text-gradient font-bold">
        Crear post de psicólogo
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
      <div className='mt-12'>
        <HashtagInput hashtag={hashtag} setHashtag={setHashtag} />
      </div>
        <div>
            <p>Agregar URL de la imagen del post</p>
            <input
          type="text"
          name="imagen"
          className="input"
          placeholder="URL imagen"
          value={publicacion.imagen}
          onChange={(e) =>
            setPublicacion({ ...publicacion, imagen: e.target.value })
          }
        />
        </div>
    </div>
  )
}

export default Psicologo
