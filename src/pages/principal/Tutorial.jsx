import React, { useState } from 'react'
import Animation from "../../Animation";

const Tutorial = () => {
    const [state, setState] = useState("uno");
    return (
        <div style={{minHeight: "100vh"}} className='bg-gradient-secondary text-white flex justify-center items-center lg:px-96'>
            <div className='flex items-center justify-center px-32'>
            {
                state === "uno" && (
                    <Animation duration={1.3}>
                        <div className='flex flex-col gap-6 px-6 lg:px-0'>
                            <h1 className='text-4xl text-center font-bold text-gradient'>Bienvenido a Salud Mental</h1>
                            <div>Una aplicación en la que puedes <b>desahogarte</b>, entrar a un espacio <b>seguro</b> y encontrar <b>profesionales</b> confiables en el área personalizados para ti.</div>
                            <button className='bg-gradient-primary rounded text-white py-3 w-full' type='button' onClick={()=>setState("dos")}>Siguiente</button>
                        </div>
                    </Animation>
                )
            }
            {
                state === "dos" && (
                    <Animation duration={1.3}>
                        <div className='flex flex-col gap-6 px-6 lg:px-0'>
                            <h1 className='text-4xl text-center font-bold text-gradient'>A tener en cuenta</h1>
                            <div>En esta aplicación nos interesa la <b>privacidad</b> y un ambiente <b>sano</b> y <b>seguro</b>. No se aceptan insultos o comentarios negativos. Te pedimos que nos ayudes reportando este tipo de escenarios. </div>
                            <div>En esta red puedes <b>publicar</b> y escribir tus experiencias, los usuarios pueden leerte y comentar, dando sus opiniones y comentarios positivos. Todo es de manera <b>anónima</b>.</div>
                            <button className='bg-gradient-primary rounded text-white py-3 w-full' type='button' onClick={()=>setState("tres")}>Siguiente</button>
                        </div>
                    </Animation>
                )
            }
            {
                state === "tres" && (
                    <Animation duration={1.3}>
                    <div className='flex flex-col gap-6 px-6 lg:px-0'>
                        <h1 className='text-4xl text-center font-bold text-gradient'>Gracias por tu preferencia</h1>
                        <p>Gracias por elegir nuestro servicio y formar parte de esta comunidad de apoyo y libertad. Confiamos en que nos ayudarás a lograr un buen ambiente y ayudar a muchas otras personas que pueden empatizar con tu vida o situación. ¡Empezemos!</p>
                        <button className='bg-gradient-primary rounded text-white py-3 w-full' type='button' onClick={()=>{
                            localStorage.setItem("tutorial", true);
                            window.location.href = "/";
                        }}>Comenzar</button>
                    </div>
                </Animation>
                )
            }
            </div>
        </div>
    )
}

export default Tutorial