import { useState } from "react";
import Wave from "react-wavify";
import Login from "./Login";
import Register from "./Register";
import Animation from "../../Animation";
import NavbarP from "../../components/nav_principal/NavbarP";

const Principal = () => {
    const [state, setState] = useState("login");
    //pagina que se ve al no estar logeado, get started
    return (
        <>
            <NavbarP />
            <div style={{ minHeight: "90vh" }} className="relative back flex flex-col">
                <div className="flex flex-col lg:flex-row pt-12 px-8 lg:px-36 xl:gap-64">
                    <Animation duration={0.5}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold text-white">Bienvenido a <b className="text-blue-400 font-bold">Salud Mental</b></h1>
                            <p className="font-semibold underline text-white text-lg text-right">Tu espacio seguro.</p>
                            <p className="text-white mt-2">Un espacio libre y seguro para compartir y expresar tus emociones. Comparte con la comunidad y encuentra lo que necesitas.</p>
                            <button type="button" className="w-full xl:w-full back2 px-4 py-2 rounded text-white font-bold my-6">Ver presentación de la app</button>
                        </div>
                    </Animation>
                    <div className="flex flex-col justify-center items-center w-full lg:pt-0 pt-12">
                        {state === "login" && <Animation duration={1}>
                            <Login setState={setState} /></Animation>}
                        {state === "register" && <Animation duration={1}>
                            <Register setState={setState} /></Animation>}
                    </div>
                </div>

                {/*animación de una wave
                <div className="md:hidden">

                    <Wave
                        fill="#fff"
                        paused={false}
                        options={
                            {
                                height: 30,
                                amplitude: 30,
                                speed: 0.15,
                                points: 2
                            }
                        }
                    />
                </div>*/}
                <div className='flex justify-center py-4 text-white lg:hidden text-center text-xs'>© Derechos reservados 2024</div>
            </div>
        </>

    )
}

export default Principal