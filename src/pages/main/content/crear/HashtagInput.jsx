import React, { useState, useEffect } from 'react';

const HashtagInput = ({ hashtag, setHashtag }) => {
  const [suggestedHashtags, setSuggestedHashtags] = useState([]);
  const [alreadyHashtags, setAlreadyHashtags] = useState([]);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (close && hashtag == "") {
      setClose(false);
    }
  }, [hashtag, close]);

  useEffect(() => {
    // Simular una llamada a la API para obtener los hashtags existentes
    setAlreadyHashtags(["uno", "dos", "tres", "cuatro", "cinco"]);
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setHashtag(inputValue);

    // Filtrar los hashtags existentes que coincidan con la entrada del usuario
    const filteredHashtags = alreadyHashtags.filter(tag => tag.includes(inputValue));
    setSuggestedHashtags(filteredHashtags);
  };

  const handleHashtagSelect = (hashtag) => {
    setHashtag(hashtag);
    setClose(true);
  };

  const handleAddHashtag = () => {
    // Aquí puedes agregar lógica para añadir el hashtag seleccionado a alguna lista, por ejemplo.
  };

  return (
    <div>
      <input
        className='input'
        type="text"
        value={hashtag}
        onChange={handleInputChange}
        placeholder="Ingrese una sola temática"
      />
      {
        (hashtag !== "" && !close) && (
          <>
          <p className='underline mt-4 mb-2'>Temáticas sugeridas</p>
          <ul className='bg-gray-900 text-gray-300 rounded h-32 overflow-y-auto'>
            {suggestedHashtags.length > 0 ? (
              suggestedHashtags.map((hashtag, index) => (
                <li
                  className='cursor-pointer hover:bg-gray-700 pl-4 py-1'
                  key={index}
                  onClick={() => handleHashtagSelect(hashtag)}
                >
                  {hashtag}
                </li>
              ))
            ) : (
              <li className='pl-4 py-1 text-gray-300'>No hay sugerencias</li>
            )}
          </ul>
          </>
        )
      }
    </div>
  );
};

export default HashtagInput;
