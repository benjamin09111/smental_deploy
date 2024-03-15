import { useState } from "react";
import Wave from "react-wavify";
import Login from "./Login";
import Register from "./Register";
import Animation from "../../Animation";

const Principal = () => {
    const [state, setState] = useState("login");
    //pagina que se ve al no estar logeado, get started
    return (
        <div className="relative flex flex-col bg-primary-custom">
            <div className="flex flex-col lg:flex-row pt-2 px-6">
                <Animation duration={0.5}>
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold text-white">Bienvenido a Salud Mental</h1>
                        <p className="font-semibold underline text-white text-lg text-right">Tu espacio seguro.</p>
                        <p className="text-white mt-2">Un espacio libre y seguro para compartir y expresar tus emociones. Comparte con la comunidad y encuentra lo que necesitas.</p>
                        <button type="button" className="bg-secondary-custom px-4 py-2 rounded text-white font-bold my-6">Ver presentación de la app</button>
                    </div>
                </Animation>
                <div className="flex flex-col justify-center items-center">
                    {state === "login" && <Animation duration={1}>
                        <Login setState={setState} /></Animation>}
                    {state === "register" && <Animation duration={1}>
                        <Register setState={setState} /></Animation>}
                </div>
            </div>

            {/*animación de una wave*/}
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
        </div>
    )
}

export default Principal