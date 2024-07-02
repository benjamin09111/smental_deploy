import img from "/user.webp";
import { useState, useEffect } from "react";

const Card = ({ nombre, apellido1, apellido_2, edad, universidad, descripcion, sexo, telefono, correo, pais, metodo, region, ciudad, comuna, imagen }) => {

    return (
        <div className='flex flex-col lg:w-[25rem] shadow'>
            <div className="bg-gray-900 p-2 rounded-tl rounded-tr">
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl font-bold'>{nombre} {apellido1} {apellido_2}</h1>
                </div>
                <p className='text-lg text-gray-100'>{edad} años</p>
                <p className='text-lg text-gray-100'>{sexo == "M" ? "Masculino" : "Feminino"}</p>
                <p className='text-lg text-gray-100'>Método: {metodo}</p>
            </div>
            {
                imagen === "" ? <img src={img} alt="No Profile Photo" className="w-full" /> : <img src={imagen} alt="Profile Picture" className="w-full" />
            }
            <div className="p-2 bg-gray-900">
                <h2 className="text-lg underline font-semibold">Descripción</h2>
                <p className="text-gray-200"><b className="font-normal italic">
                    {
                        descripcion.length > 100 ? `${descripcion}...` : descripcion
                    }
                </b></p>
            </div>
            <div className="bg-gray-900 p-2 rounded-tl rounded-tr">
                <div><b>Estudió en</b>: {universidad}</div>
                <div><b>País</b>:{pais}</div>
                <div><b>Ubicación</b>:{region}, {ciudad}, {comuna}</div>
                <h3 className="text-lg mt-4 underline font-semibold">Contacto</h3>
                <div><b>Email</b>: {correo ? correo : "example@gmail.com"}</div>
                <div><b>Teléfono</b>: {telefono}</div>
            </div>

        </div>
    )
}

export default Card
