import { useState } from 'react';

const PopUpReporte = ({ nombre, setState, userId, publicationId }) => {
    const [descripcion, setDescripcion] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const enviarReporte = async () => {
        if (descripcion == "") {
            setMessage("Debe rellenar los campos.");
            setLoading(false);
            return;
        }
        try {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexed, así que sumamos 1
            const day = String(today.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
            const fecha = `${year}-${month}-${day}`;

            const response = await fetch('http://localhost:3000/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    descripcion: descripcion,
                    fecha: fecha,
                    reportador_id: publicationId, //id publicacion
                    reportado_id: userId // id

                })
            });

            if (response.ok) {
                const result = await response.json();
                setMessage("Reporte generado.");
                setLoading(false);
            } else {
                setMessage("Error al crear publicación.");
                setLoading(false);
                console.error('Error al crear la publicación:', response.statusText);
            }
        } catch (error) {
            setLoading(false);
            setMessage("Error al crear publicación.");
            console.error('Error al crear la publicación:', error);
        }
    }

    return (
        <div className="fixed z-[9999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950 p-12">
            <span className='text-2xl cursor-pointer absolute right-8 top-2' onClick={() => setState(false)}>&times;</span>
            <h3 className='text-xl font-bold'>Reporte</h3>
            <div>Vas a reportar la publicación de <b className='italic'>"{nombre}"</b></div>
            <div>Id publicación: {publicationId}</div>
            <div>User Id: {userId}</div>
            <textarea
                className="w-full h-full p-2 border border-gray-300 rounded input"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Describe tu reporte."
            />
            <button onClick={enviarReporte} className='px-2 py-1 rounded bg-primary-custom text-black text-semibold'>Enviar reporte</button>
            <p className='text-red-500 '>{message}</p>
        {loading && <span className='icon-[eos-icons--loading] text-3xl text-blue-500'></span>}
        </div>
    );
}

export default PopUpReporte;
