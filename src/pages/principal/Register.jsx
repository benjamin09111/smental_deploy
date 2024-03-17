import { useState } from 'react';
import Overlay from "./Overlay";
import Terminos from "./Terminos";

const Register = ({ open, setOpen, setState }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const signup = () => {

    }

    return (
        <div className='flex flex-col gap-3 text-white text-lg px-6'>
            <h2 className='text-4xl text-center font-bold'>Crea tu cuenta</h2>
            <div className="underline">Registro de usuario</div>
            <div className='flex gap-10'>
                <span class="icon-[ic--sharp-email] text-2xl  bg-gradient-primary"></span>
                <input type="text" name='email' placeholder="Email" className='input'
                    value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div className='flex gap-10'>
                <span class="icon-[mdi--password] text-2xl  bg-gradient-primary"></span>
                <input type="password" placeholder="Contraseña" name='password' className='input'
                    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span class="icon-[mdi--user] text-2xl  bg-gradient-primary"></span>
                    <input type="text" name='username' className='input' placeholder="Nombre de usuario" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                </div>
                <p className='text-xs underline'>Este nombre se verá en la aplicación. Se recomienda no utilizar un nombre real.</p>
            </div>
            
            <button className='w-full bg-gradient-primary mt-4 py-2' type='button' onClick={signup}>Registrarse</button>
            <div className='text-center'>¿Ya tienes una cuenta? <b className='cursor-pointer' onClick={() => setState("login")}>inicia sesión.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            <div className="underline">Registro de psicólogo</div>
            <div className=''>
                Si quieres registrarte como psicólogo, puedes enviar tu email <b className='cursor-pointer text-gradient font-semibold' onClick={() => setOpen(!open)}>aquí</b>.
            </div>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text'>
                        <span class="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            {open && (<Overlay setOpen={setOpen} />)}
        </div>
    )
}

export default Register