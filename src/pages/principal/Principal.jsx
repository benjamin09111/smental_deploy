import { useState, useEffect } from "react";
import Wave from "react-wavify";
import Login from "./Login";
import Register from "./Register";
import Animation from "../../Animation";
import Terminos from "./Terminos";
import Overlay from "./Overlay";

const Principal = ({ terminos, setTerminos }) => {
    const [state, setState] = useState("login");
    //pagina que se ve al no estar logeado, get started
    const [abrir, setAbrir] = useState(false);

    useEffect(()=>{
        const tutorial = localStorage.getItem("tutorial");
        const token = localStorage.getItem("token");
        if(!tutorial){
            window.location.href = "/intro";
        }else if(token){
            window.location.href = "/home";
        }
    }, [])

    return (
        <div style={{ minHeight: "100vh" }} className="bg-white text-xl text-black pt-8 lg:pt-[10vh] flex flex-col w-full">
            {
                abrir && <Overlay setAbrir={setAbrir} />
            }
            
            <div className="flex flex-col lg:flex-row px-6 lg:px-16 xl:px-16 2xl:px-44 lg:py-2 md:py-0 lg:gap-36 justify-between">
                <div className="one ">
                    <Animation duration={1}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold text-primary-custom">RED S-MENTAL</h1>
                            <p className="text-black mt-2">Un espacio libre y seguro para compartir y expresar tus emociones. Comparte con la comunidad y encuentra lo que necesitas.</p>
                            <b type="button" className="cursor-pointer text-gray-400 font-semibold hover:text-gray-300 text-left" onClick={() => {
                                localStorage.removeItem("tutorial");
                                window.location.reload();
                            }}>VER PRESENTACIÓN DE LA APP</b>
                            {
                                //<b type="button" className="text-gray-400 cursor-pointer font-semibold hover:text-gray-300 text-left">CONTACTARSE CON EL SOPORTE</b>
                            }
                            {
                                //<b type="button" className="text-gray-400 cursor-pointer font-semibold hover:text-gray-300 text-left" onClick={()=>setAbrir(!abrir)}>¿CÓMO SER PSICÓLOGO DE LA APP?</b>
                            }
                        </div>
                    </Animation>
                </div>
                <div className="flex flex-col w-full lg:pt-0 two pb-12 lg:pb-0 ">
                    {state === "login" && <Animation duration={0.5}>
                        <Login setState={setState} /></Animation>}
                    {state === "register" && <Animation duration={0.5}>
                        <Register setState={setState} /></Animation>}
                </div>
            </div>

            {terminos && (<Terminos setTerminos={setTerminos} />)}

            <div className="absolute hidden lg:block bottom-0 w-full olas">
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#035569"
                        paused={false}
                        options={
                            {
                                height: 70,
                                amplitude: 30,
                                speed: 0.2,
                                points: 6
                            }
                        }
                    />
                </div>
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#C1E8FF"
                        paused={false}
                        options={
                            {
                                height: 70,
                                amplitude: 30,
                                speed: 0.2,
                                points: 7
                            }
                        }
                    />
                </div>
                <div className="absolute bottom-0 w-full">
                    <Wave
                        fill="#035569"
                        paused={false}
                        options={
                            {
                                height: 80,
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