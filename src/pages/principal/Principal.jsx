import { useState } from "react";
import Wave from "react-wavify";

const Principal = () => {
    //pagina que se ve al no estar logeado, get started
    return (
        <div className="flex">
            <div>
                Bienvenido a
            </div>
            <div>

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