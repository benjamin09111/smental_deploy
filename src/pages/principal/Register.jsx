import { useState } from 'react';
import Overlay from "./Overlay";

const Register = ({ setState }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);

    const [data, setData] = useState({
        username: "",
        password: "",
        name: "",
        country: "",
        age: 0,
        email: "",
    });

    const signup = async () => {
        setLoading(true);
        console.log(data);
        try{
            const response = await fetch('http://localhost:3000/registeruser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            setMessage(result.message);
            setLoading(false);

            setState("login");
            //setMessage("Cuenta registrada. Por favor, inicie sesión.");
            return;

        }catch(err){
            console.log(err)
            setLoading(false);
            setMessage("Error de servidor. Vuelva a intentar más tarde.");
            return;
        }
    }

    return (
        <div className='flex flex-col gap-3 text-white text-lg'>
            <h2 className='text-4xl text-center font-bold'>REGISTER</h2>
            <div className='flex gap-10'>
            <span className="icon-[mdi--user] text-2xl  bg-gradient-primary"></span>
                <input type="text" name='correo' placeholder="Usuario" className='input'
                    value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
            </div>
            <div className='flex gap-10'>
                <span className="icon-[mdi--password] text-2xl  bg-gradient-primary"></span>
                <input type="password" placeholder="Contraseña" name='password' className='input'
                    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[mdi--user] text-2xl  bg-gradient-primary"></span>
                    <input type="text" name='nombre' className='input' placeholder="Nombre" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
                {
                    data.name.length > 0 && <p className='text-xs text-center underline'>Este nombre se verá en la aplicación. Se recomienda no utilizar un nombre real.</p>
                }
            </div>
            <div className='flex gap-10'>
                <span className="icon-[ic--sharp-email] text-2xl  bg-gradient-primary"></span>
                <input type="email" name='email' placeholder="Correo" className='input'
                    value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[foundation--page] text-2xl bg-gradient-primary"></span>
                    <input type="number" name='age' className='input' placeholder="Edad" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[mingcute--phone-fill] text-2xl bg-gradient-primary"></span>
                    <input type="text" name='phone' className='input' placeholder="Incluye código del país " value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[mdi--world] text-2xl bg-gradient-primary"></span>
                    <input type="text" name='country' className='input' placeholder="País " value={data.country} onChange={(e) => setData({ ...data, country: e.target.value })} />
                </div>
            </div>
            
            <button className='w-full bg-gradient-primary mt-4 py-2' type='button' onClick={signup}>Registrarse</button>
            <div className='text-center'>¿Ya tienes una cuenta? <b className='cursor-pointer' onClick={() => setState("login")}>inicia sesión.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text'>
                        <span className="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            {abrir && (<Overlay setAbrir={setAbrir} />)}
        </div>
    )
}

export default Register