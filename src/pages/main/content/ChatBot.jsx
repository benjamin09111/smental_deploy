import React, { useState } from 'react';

const ChatBot = () => {
  const [envio, setEnvio] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);
  const [historial, setHistorial] = useState([]);

  const send = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: envio }),
      });

      if (!response.ok) {
        throw new Error('No se pudo completar la solicitud al servidor');
      }

      const data = await response.json();
      const nuevaConversacion = {
        pregunta: envio,
        respuesta: data.response,
      };
      setHistorial([...historial, nuevaConversacion]);
      setRespuesta(data.response);
      setLoading(false);
    } catch (error) {
      console.error('Error al enviar la pregunta:', error);
      setRespuesta('Error al enviar la pregunta');
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-6 p-4'>
      <h1 className='text-3xl text-gradient font-bold'>Habla con nuestro amigo Yasuo</h1>
      <div className='rounded p-6 bg-gray-800 flex flex-col gap-3'>
        {historial.map((chat, index) => (
          <div key={index}>
            <b>Pregunta:</b> {chat.pregunta}
            <br />
            <b>Respuesta:</b> {chat.respuesta}
          </div>
        ))}
      </div>
      <label htmlFor='inputPregunta'>Pregunta:</label>
      <input
        id='inputPregunta'
        className='input w-1/2'
        type='text'
        value={envio}
        onChange={(e) => setEnvio(e.target.value)}
      />
      {loading && <span className='icon-[eos-icons--bubble-loading] text-2xl bg-gradient-primary m-2'></span>}
      {!loading && <button onClick={send} className='bg-gray-900 rounded lg:w-1/2 px-2 py-1 text-white'>Consultar</button>}
    </div>
  );
};

export default ChatBot;
