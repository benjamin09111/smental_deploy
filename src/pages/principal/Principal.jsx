import { useState } from "react";
import Wave from "react-wavify";
import Login from "./Login";
import Register from "./Register";
import Animation from "../../Animation";
import Terminos from "./Terminos";

const Principal = ({ open, setOpen, terminos, setTerminos }) => {
    const [state, setState] = useState("login");
    //pagina que se ve al no estar logeado, get started
    return (
        <div style={{ minHeight: "100vh" }} className="bg-gradient-secondary pt-[10vh] flex flex-col w-full">
            <div className="flex flex-col lg:flex-row px-6 pt-6 pb-6">
                <div className="one">
                    <Animation duration={1}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold text-gradient">BIENVENIDO A SALUD MENTAL SIN NOMBRE</h1>
                            <p className="font-semibold underline text-white text-lg text-right">Tu espacio seguro.</p>
                            <p className="text-white mt-2">Un espacio libre y seguro para compartir y expresar tus emociones. Comparte con la comunidad y encuentra lo que necesitas.</p>
                            <b type="button" className="cursor-pointer text-gray-400 font-semibold hover:text-gray-300 text-left" onClick={() => {
                                localStorage.removeItem("tutorial");
                                window.location.reload();
                            }}>VER PRESENTACIÓN DE LA APP</b>
                            <b type="button" className="text-gray-400 cursor-pointer font-semibold hover:text-gray-300 text-left">CONTACTARSE CON EL SOPORTE</b>
                            <b type="button" onClick={() => setOpen(true)} className="text-gray-400 cursor-pointer font-semibold hover:text-gray-300 text-left">¿CÓMO SER PSICÓLOGO DE LA APP?</b>
                        </div>
                    </Animation>
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:pt-0 pt-12 two pb-12 lg:pb-0">
                    {state === "login" && <Animation duration={0.5}>
                        <Login open={open} setOpen={setOpen} setState={setState} /></Animation>}
                    {state === "register" && <Animation duration={0.5}>
                        <Register open={open} setOpen={setOpen} setState={setState} /></Animation>}
                </div>
            </div>

            {terminos && (<Terminos setTerminos={setTerminos} />)}

            <div className="absolute bottom-0 w-full olas">
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

export default Principal