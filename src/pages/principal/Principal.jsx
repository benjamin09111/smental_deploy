import { useState } from "react";
import Wave from "react-wavify";
import Login from "./Login";
import Register from "./Register";

const Principal = () => {
    const [state, setState] = useState("login");
    //pagina que se ve al no estar logeado, get started
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div>
                    Bienvenido a
                </div>
                <div>
                    {state === "login" && <Login setState={setState} />}
                    {state === "register" && <Register setState={setState} />}
                </div>
            </div>

            {/*animación de una wave*/}
            <Wave
                fill="#1277b0"
                paused={false}
                options={
                    {
                        height: 80,
                        amplitude: 40,
                        speed: 0.20,
                        points: 4
                    }
                }
            />
        </div>
    )
}

export default Principal