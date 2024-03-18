import React from 'react'
import Home from "./Home";
import Publicaciones from "./Publicaciones";
import Crear from "./Crear";
import Buscar from "./Buscar";
import ChatBot from "./ChatBot";
import Terminos from './Terminos';
import Mas from './Mas';

const Content = ({ setState, state }) => {
    return (
        <div className='flex flex-col relative w-full lg:px-64 px-6'>
            <div className='flex pt-6 px-6 lg:px-64'>
            {
                state === "home" && (<Home />)
            }
            {
                state === "publicaciones" && (<Publicaciones />)
            }
            {
                state === "crear" && (<Crear />)
            }
            {
                state === "buscar" && (<Buscar />)
            }
            {
                state === "chat" && (<ChatBot />)
            }
            {
                state === "terminos" && (<Terminos />)
            }
            {
                state === "mas" && (<Mas />)
            }
            </div>
        </div>
    )
}

export default Content