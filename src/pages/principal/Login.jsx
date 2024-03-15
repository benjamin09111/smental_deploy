import { useState } from 'react';
import Overlay from "./Overlay";

const Login = ({ setState }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    const [open, setOpen] = useState(false);

    const signin = () => {

    }

    return (
        <div className='flex flex-col gap-3 text-white text-lg px-6'>
            <h2 className='text-4xl text-center font-bold'>Inicia sesión</h2>
            <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
                    <span class="icon-[ic--sharp-email] text-2xl"></span>
                    <label htmlFor="email" className='text-gray-100'>Correo electrónico</label>
                </div>
                <input type="text" name='email' className='input'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
            <span class="icon-[mdi--password] text-2xl"></span>
                <label htmlFor="password" className='text-gray-100'>Contraseña</label>
            </div>
                <input type="password" name='password' className='input'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='w-full mt-4 py-2 back2 hover:bg-gray-800' type='button' onClick={signin}>Iniciar sesión</button>
            <div className='text-center'>¿No tienes una cuenta? <b className='cursor-pointer' onClick={()=>setState("register")}>Regístrate.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text-secondary-custom'>
                        <span class="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            <div>Al ingresar a la aplicación, estás aceptando los <b className='underline text cursor-pointer'>términos y condiciones</b>.</div>
            <div className=''>
                Si quieres registrarte como psicólogo, puedes enviar tu email <b className='text cursor-pointer' onClick={() => setOpen(!open)}>aquí</b>.
            </div>
            {open && (<Overlay setOpen={setOpen} />)}
        </div>
    )
}

export default Login