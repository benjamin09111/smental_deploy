import { useState } from 'react';
import Overlay from "./Overlay";
import Terminos from "./Terminos";

const Register = ({ open, setOpen, setState }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        nombre: "",
        correo: "",
        contrasena: "",
        edad: "",
        numero_telefono: ""
    });

    const signup = async () => {
        setLoading(true);
        try{
            const response = await fetch('http://localhost:3000/registeruser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if(result.message == "correo nombre") {
                setLoading(false);
                setMessage("El nombre de usuario o el email ya están en uso.");
                return;
            }

            if(result.message == "fallo"){
                setLoading(false);
                setMessage("No se ha podido registrar la cuenta. Vuelva a intentar.");
                return;
            }

            setLoading(false);
            setMessage("Cuenta registrada. Por favor, inicie sesión.");
            return;

        }catch(err){
            setLoading(false);
            setMessage("Error de servidor. Vuelva a intentar más tarde.");
            return;
        }
    }

    return (
        <div className='flex flex-col gap-3 text-white text-lg px-6'>
            <h2 className='text-4xl text-center font-bold'>Crea tu cuenta</h2>
            <div className="underline">Registro de usuario</div>
            <div className='flex gap-10'>
                <span className="icon-[ic--sharp-email] text-2xl  bg-gradient-primary"></span>
                <input type="email" name='correo' placeholder="Correo" className='input'
                    value={data.correo} onChange={(e) => setData({ ...data, correo: e.target.value })} />
            </div>
            <div className='flex gap-10'>
                <span className="icon-[mdi--password] text-2xl  bg-gradient-primary"></span>
                <input type="password" placeholder="Contraseña" name='contrasena' className='input'
                    value={data.contrasena} onChange={(e) => setData({ ...data, contrasena: e.target.value })} />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[mdi--user] text-2xl  bg-gradient-primary"></span>
                    <input type="text" name='nombre' className='input' placeholder="Nombre de usuario" value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} />
                </div>
                <p className='text-xs underline'>Este nombre se verá en la aplicación. Se recomienda no utilizar un nombre real.</p>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[foundation--page] text-2xl bg-gradient-primary"></span>
                    <input type="number" name='edad' className='input' placeholder="Edad del usuario" value={data.edad} onChange={(e) => setData({ ...data, edad: e.target.value })} />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-10'>
                    <span className="icon-[mingcute--phone-fill] text-2xl bg-gradient-primary"></span>
                    <input type="text" name='edad' className='input' placeholder="Incluye código del país sin el + " value={data.numero_telefono} onChange={(e) => setData({ ...data, numero_telefono: e.target.value })} />
                </div>
                <p className='text-xs underline'>Utilizaremos tu número para confirmar tu cuenta.</p>
            </div>
            
            <button className='w-full bg-gradient-primary mt-4 py-2' type='button' onClick={signup}>Registrarse</button>
            <div className='text-center'>¿Ya tienes una cuenta? <b className='cursor-pointer' onClick={() => setState("login")}>inicia sesión.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            <div className="underline">Registro de psicólogo</div>
            <div className=''>
                Si quieres registrarte como psicólogo, puedes enviar tu correo <b className='cursor-pointer text-gradient font-semibold' onClick={() => setOpen(!open)}>aquí</b>.
            </div>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text'>
                        <span className="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            {open && (<Overlay setOpen={setOpen} />)}
        </div>
    )
}

export default Register