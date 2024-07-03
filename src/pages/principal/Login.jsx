import { useState } from 'react';
import Overlay from "./Overlay";
import Terminos from "./Terminos";

const Login = ({ open, setOpen, setState }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [abrir, setAbrir] = useState(false);
    const [terminos, setTerminos] = useState(false);

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");

    const signin = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://smental-backend.onrender.com/loginuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            const message = data.message;
            const token = data.token;
            const id = data.userId;

            console.log(data);

            localStorage.setItem('token', token);
            localStorage.setItem('nombre', username);
            localStorage.setItem('id', id);

            setLoading(false);
            setMessage(message);
            window.location.href = "/home";
            return;
        } catch (error) {
            setLoading(false);
            setMessage("Ha ocurrido un error. Vuelva a intentar más tarde.");
            return;
        }
    }

    return (
        <div className='flex flex-col gap-3 pt-12 lg:pt-0 text-black text-lg lg:pl-12 relative z-[99999]'>
            {abrir && <Overlay setAbrir={setAbrir} />}
            {terminos && <Terminos setTerminos={setTerminos} />}
            <h2 className='text-4xl text-center font-bold'>LOGIN</h2>
            <div className='flex gap-10'>
                <span className="icon-[ic--baseline-email] text-2xl bg-third-custom"></span>
                <input type="text" name='username' className='input w-full' placeholder="Nombre de usuario"
                    value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='flex gap-10'>
                <span className="icon-[mdi--password] text-2xl bg-third-custom"></span>
                <input type="password" name='password' className='input w-full' placeholder="Contraseña"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='w-full bg-third-custom text-white mt-4 py-2' type='button' onClick={signin}>INICIAR SESIÓN</button>
            <div className='text-center text-gray-800'>¿No tienes una cuenta? <b className='cursor-pointer text-black' onClick={() => setState("register")}>Regístrate.</b></div>
            <div className='text-center text-gray-800'>Iniciar sesión como administrador <b className='cursor-pointer text-black' onClick={() => window.location.href = "/admin"}>aquí,</b> o como psicólogo <b className='cursor-pointer text-black' onClick={() => window.location.href = "/psicologo"}>aquí.</b></div>
            
            <p className='text-primary-custom'>{message}</p>
            {loading && (
                <div className='flex flex-col justify-center items-center gap-3 text-secondary-custom'>
                    <span className="icon-[eos-icons--loading] text-4xl"></span>
                    <b>Cargando</b>
                </div>
            )}
            <div className='text-black'>Al ingresar a la aplicación, estás aceptando los <b className='underline text-black font-semibold cursor-pointer' onClick={() => setTerminos(true)}>términos y condiciones</b>.</div>
            {
                /*
<div className='text-black'>
                Si quieres registrarte como psicólogo, puedes enviar tu correo <b className='cursor-pointer text-black font-semibold' onClick={() => setAbrir(!abrir)}>aquí</b>.
            </div>
                */
            }
            {open && (<Overlay setOpen={setOpen} />)}
        </div>
    )
}

export default Login;
