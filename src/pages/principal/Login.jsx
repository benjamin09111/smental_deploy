import { useState } from 'react';
import Overlay from "./Overlay";
import Terminos from "./Terminos";

//usuario: type = US373_USER$%7FEV
//psicologo: type = P_USER8492#$2ASE_392AKSMG

const Login = ({ open, setOpen, setState }) => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [abrir, setAbrir] = useState(false);
    const [terminos, setTerminos] = useState(false);

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");

    const signin = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo, contrasena })
            });

            const data = await response.json();
            const message = data.message;

            if(message == "error credenciales") {
                setMessage("Error de credenciales");
                setLoading(false);
                return;

            }
            if (message == "Error en la consulta GET"){
                setMessage("Error de servidor. Contactar más tarde o al soporte.");
                setLoading(false);
                return;
            }

            const type = data.tipo;
            const token = data.token;
            const usuario_id = data.resultado.usuario_id;
            const psicologo_id = data.psicologo_id;
            const edad = data.resultado.edad;
            const email = data.resultado.correo;
            const nombre = data.resultado.nombre_usuario;

            localStorage.setItem('token', token);
            localStorage.setItem('type', type);
            localStorage.setItem('edad', edad);
            localStorage.setItem('email', email);
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('usuario_id', usuario_id);
            
            if(psicologo_id != null) {
                localStorage.setItem('psicologo_id', psicologo_id);
            }

            setLoading(false);
            window.location.href = "/home";
            return;
        } catch (error) {
            setLoading(false);
            setMessage("Ha ocurrido un error. Vuelva a intentar más tarde.");
            return;
        }
    }

    return (
        <div className='flex flex-col gap-3 pt-12 lg:pt-0 text-white text-lg lg:pl-12'>
            {
                abrir && <Overlay setAbrir={setAbrir} />
            }
            
            {
                terminos && <Terminos setTerminos={setTerminos} />
            }
            <h2 className='text-4xl text-center font-bold'>LOGIN</h2>
            <div className='flex gap-10'>
                <span className="icon-[ic--baseline-email] text-2xl  bg-gradient-primary"></span>
                <input type="text" name='correo' className='input' placeholder="Correo"
                    value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className='flex gap-10'>
                <span className="icon-[mdi--password] text-2xl bg-gradient-primary"></span>
                <input type="password" name='contrasena' className='input' placeholder="Contraseña"
                    value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            </div>
            <button className='w-full bg-gradient-primary mt-4 py-2' type='button' onClick={signin}>INICIAR SESIÓN</button>
            <div className='text-center text-gray-400'>¿No tienes una cuenta? <b className='cursor-pointer text-white' onClick={() => setState("register")}>Regístrate.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text-secondary-custom'>
                        <span className="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            <div className='text-gray-400'>Al ingresar a la aplicación, estás aceptando los <b className='underline text-gradient font-semibold cursor-pointer' onClick={() => setTerminos(true)}>términos y condiciones</b>.</div>
            <div className='text-gray-400'>
                Si quieres registrarte como psicólogo, puedes enviar tu correo <b className='cursor-pointer text-gradient font-semibold' onClick={() => setAbrir(!abrir)}>aquí</b>.
            </div>
            {open && (<Overlay setOpen={setOpen} />)}
        </div>
    )
}

export default Login