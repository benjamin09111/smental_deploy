import React, { useState } from 'react';

const Psico = () => {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        apellido_2: '',
        calificacion: 0,
        universidad: '',
        descripcion: '',
        sexo: '',
        edad: 0,
        telefono: '',
        region: '',
        ciudad: '',
        comuna: '',
        pais: '',
        metodo: '',
        imagen: '',
        correo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/create_psicologo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log(response.message);
                setMessage("Error!");
                throw new Error('Error al crear psicólogo');
            }

            const result = await response.json();
            setMessage("Psicólogo creado.");
            //Reiniciar el formulario
            setFormData({
                nombre: '',
                apellido: '',
                apellido_2: '',
                calificacion: 0,
                universidad: '',
                descripcion: '',
                sexo: '',
                edad: 0,
                telefono: '',
                region: '',
                ciudad: '',
                comuna: '',
                pais: '',
                metodo: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Crear Psicólogo</h2>
            <form className='flex flex-col gap-3 text-black' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="apellido_2"
                    placeholder="Segundo Apellido"
                    value={formData.apellido_2}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="universidad"
                    placeholder="Universidad"
                    value={formData.universidad}
                    onChange={handleChange}
                />
                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={formData.descripcion}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="sexo"
                    placeholder="Sexo (F / M)"
                    value={formData.sexo}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={formData.edad}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="region"
                    placeholder="Región"
                    value={formData.region}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="comuna"
                    placeholder="Comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="pais"
                    placeholder="País"
                    value={formData.pais}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="metodo"
                    placeholder="Método"
                    value={formData.metodo}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    value={formData.correo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imagen"
                    placeholder="Imagen URL"
                    value={formData.imagen}
                    onChange={handleChange}
                />
                <button className='bg-blue-950 text-white rounded' type="submit">Crear Psicólogo</button>
                <p className='text-red-400'>{message}</p>
            </form>
        </div>
    );
};

export default Psico;
