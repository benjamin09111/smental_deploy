import React, { useState, useEffect } from 'react';

const HashtagInput = ({ hashtag, setHashtag }) => {
  const [suggestedHashtags, setSuggestedHashtags] = useState([]);
  const [alreadyHashtags, setAlreadyHashtags] = useState([]);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (close && hashtag === "") {
      setClose(false);
    }
  }, [hashtag, close]);

  useEffect(() => {
    // Simular una llamada a la API para obtener los hashtags existentes
    setAlreadyHashtags(["Depresión", "Tristeza", "Universidad", "Colegio", "Amistad",
      "AmorNoCorrespondido", "Ansiedad", "Autoestima", "Bullying", "Culpabilidad",
      "Decepción", "Desamor", "Desconexión", "Desesperanza", "Divorcio",
      "Duelo", "Estrés", "Familia", "Fracaso", "Infidelidad",
      "Inseguridad", "Miedo", "RelacionesTóxicas", "Rechazo", "Soledad",
      "Superación", "Traición", "Vergüenza", "Violencia", "Confusión", "Duda", "Confesión", "Kpop", "Música", "Padres", "Ayuda", "Amor", "Ansiedad", "Dinero"
  ]);
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

  return (
    <div className='w-full'>
      <div className="flex gap-10 w-full">
        <span className="icon-[icon-park-solid--topic] text-3xl bg-third-custom"></span>
        <input
          className='input w-full lg:w-1/3'
          type="text"
          value={hashtag}
          onChange={handleInputChange}
          placeholder="Ingrese una sola temática"
        />
      </div>
      {(hashtag !== "" && !close) && (
        <>
          <p className='underline mt-4 mb-2'>Temáticas sugeridas</p>
          <ul className='bg-secondary-custom text-gray-900 rounded max-h-36 overflow-y-auto'>
            {suggestedHashtags.length > 0 ? (
              suggestedHashtags.map((hashtag, index) => (
            <>
                <li
                  className='cursor-pointer hover:bg-fourth-custom text-white pl-4'
                  key={index}
                  onClick={() => handleHashtagSelect(hashtag)}
                >
                  {hashtag}
                </li></>
              ))
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default HashtagInput;
