import React, {useState} from 'react'
import HashtagInput from './HashtagInput'

const Usuario = ({publicacion, setPublicacion, hashtag, setHashtag}) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setPublicacion({ ...publicacion, nombre: "Anónimo" });
    } else {
      setPublicacion({ ...publicacion, nombre: localStorage.getItem("nombre") || "" });
    }
  };
  
  return (
    <div className='flex flex-col gap-6'>
      <div className="text-3xl text-gradient font-bold">
        Desahógate o comparte tus experiencias
      </div>
      <div className="flex gap-10">
        <span className="icon-[material-symbols--title] text-2xl  bg-gradient-primary"></span>
        <input
          type="text"
          name="titulo"
          className="input lg:w-1/3"
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
          className="input lg:w-1/3 resize-none h-16"
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
      <div className="flex my-6 gap-5 lg:w-1/2">
        <input type="checkbox" name='check' checked={isChecked}
        onChange={handleCheckboxChange} />
        <label onClick={handleCheckboxChange} htmlFor="check" className='text-gray-200'>Publicar de manera anónima</label>
      </div>
    </div>
  )
}

export default Usuario
