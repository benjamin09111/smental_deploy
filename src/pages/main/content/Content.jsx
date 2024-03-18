import React from 'react'
import Home from "./Home";
import Publicaciones from "./Publicaciones";
import Crear from "./Crear";
import Buscar from "./Buscar";
import ChatBot from "./ChatBot";
import Wave from "react-wavify";

const Content = ({ setState, state }) => {
    return (
        <div className='flex flex-col relative w-full'>
            <div className='flex pt-24 px-6 lg:px-64'>
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
            <div className="absolute bottom-0 w-full hidden lg:block">
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#40c7e57b"
                        paused={false}
                        options={
                            {
                                height: 30,
                                amplitude: 30,
                                speed: 0.2,
                                points: 6
                            }
                        }
                    />
                </div>
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#9f99f5ae"
                        paused={false}
                        options={
                            {
                                height: 30,
                                amplitude: 30,
                                speed: 0.2,
                                points: 7
                            }
                        }
                    />
                </div>
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#40c7e5e9"
                        paused={false}
                        options={
                            {
                                height: 60,
                                amplitude: 30,
                                speed: 0.2,
                                points: 5
                            }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Content