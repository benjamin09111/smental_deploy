import img from "/user.webp";
import { useState, useEffect } from "react";

const Card = ({ nombre, apellido1, apellido_2, edad, universidad, descripcion, sexo, telefono, correo, pais, metodo, region, ciudad, comuna, imagen }) => {

    return (
        <div className='flex flex-col lg:w-[25rem] bg-gray-900'>
            <div className="bg-gray-900 p-2 lg:p-5">
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl font-bold'>{nombre} {apellido1} {apellido_2}</h1>
                </div>
                <p className='text-xl text-gray-100'>{edad} años, {sexo == "M" ? "Masculino" : "Feminino"}</p>
            </div>
            {
                imagen === "" ? <img src={img} alt="No Profile Photo" className="w-full" /> : <img src={imagen} alt="Profile Picture" className="w-full" />
            }
            <div className="p-2 bg-gray-900 text-lg lg:p-5">
                <h2 className="text-xl underline font-semibold">Descripción</h2>
                <p className="text-gray-200"><b className="font-normal italic">
                    {
                        descripcion.length > 100 ? `${descripcion}...` : descripcion
                    }
                </b></p>
            </div>
            <div className="bg-gray-900 p-2 text-lg lg:px-5 lg:pb-5">
                <div><b>Estudió en</b>: {universidad}</div>
                <div><b>País</b>:{pais}</div>
                <div><b>Ubicación</b>:{region}, {ciudad}, {comuna}</div>
                <h3 className="text-xl mt-4 underline font-semibold">Contacto</h3>
                <div><b className="text-xl">Email</b>: {correo ? correo : "example@gmail.com"}</div>
                <div><b className="text-xl">Teléfono</b>: {telefono}</div>
                <p className='text-xl text-gray-100'><b>Método:</b> {metodo}</p>
            </div>

        </div>
    )
}

export default Card
