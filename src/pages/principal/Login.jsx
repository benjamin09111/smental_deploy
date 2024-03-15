import { useState } from 'react'

const Login = ({ setState }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    const [emailP, setEmailP] = useState("");
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
            <button className='w-full mt-4 py-2 bg-third-custom hover:bg-third-custom/80' type='button' onClick={signin}>Iniciar sesión</button>
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
            <div>Al ingresar a la aplicación, estás aceptando los <b className='underline text-secondary-custom cursor-pointer'>términos y condiciones</b>.</div>
            <div className=''>
                Si quieres registrarte como psicólogo, puedes enviar tu email <b className='text-secondary-custom cursor-pointer' onClick={() => setOpen(!open)}>aquí</b>.
            </div>
            {
                open && (
                    <>

                        <div className='flex flex-col gap-3'>
                            <input type="text" className='px-2 py-1 text-black/80 bg-white/90 focus:outline-none' placeholder='Tu correo electrónico'
                                value={emailP} onChange={(e) => setEmailP(e.target.value)} />
                            <button type='button' className='bg-secondary-custom px-2 py-1 hover:bg-secondary-custom/90'>Enviar registro</button>
                        </div>
                        <p className='underline text-xs'>Recibirás un correo con la información del registro de psicólogo, además de las instrucciones.</p>
                    </>
                )
            }
            <p className='text-center text-xs mt-12'>© Derechos reservados 2024</p>
        </div>
    )
}

export default Login