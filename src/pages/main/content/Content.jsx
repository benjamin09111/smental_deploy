import React from 'react'
import Home from "./Home";
import Publicaciones from "./Publicaciones";
import Crear from "./Crear";
import Buscar from "./Buscar";
import ChatBot from "./ChatBot";

const Content = ({ setState, state }) => {
    return (
        <div className='flex pt-24'>
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
        </div>
    )
}

export default Content