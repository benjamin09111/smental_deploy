import { useState } from 'react'

const Register = ({ setState }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [emailP, setEmailP] = useState("");
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
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <span class="icon-[ic--sharp-email] text-2xl"></span>
                    <label htmlFor="email" className='text-gray-100'>Correo electrónico</label>
                </div>
                <input type="text" name='email' className='input'
                    value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <span class="icon-[mdi--password] text-2xl"></span>
                    <label htmlFor="password" className='text-gray-100'>Contraseña</label>
                </div>
                <input type="password" name='password' className='input'
                    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <span class="icon-[mdi--user] text-2xl"></span>
                    <label htmlFor="text" className='text-gray-100'>Nombre de usuario</label>
                </div>
                <p className='text-xs underline'>Este nombre se verá en la aplicación. Se recomienda no utilizar un nombre real.</p>
                <input type="text" name='username' className='input'
                    value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
            </div>
            <button className='w-full mt-4 py-2 bg-third-custom hover:bg-third-custom/80' type='button' onClick={signup}>Registrarse</button>
            <div className='text-center'>¿Ya tienes una cuenta? <b className='cursor-pointer' onClick={() => setState("login")}>inicia sesión.</b></div>
            <p className='text-secondary-custom'>{message}</p>
            {
                loading && (
                    <div className='flex flex-col justify-center items-center gap-3 text-secondary-custom'>
                        <span class="icon-[eos-icons--loading] text-4xl"></span>
                        <b>Cargando</b>
                    </div>
                )
            }
            <div className=''>
                Si quieres registrarte como psicólogo, puedes enviar tu email <b className='text-secondary-custom cursor-pointer' onClick={() => setOpen(!open)}>aquí</b>.
            </div>
            {
                open && (
                    <>

                        <div>
                            <input type="text" className='px-2 py-1 rounded-tl-lg rounded-bl-lg text-black/80 bg-white/90 focus:outline-none'
                                value={emailP} onChange={(e) => setEmailP(e.target.value)} />
                            <button type='button' className='bg-secondary-custom px-2 py-1 rounded-tr-lg rounded-br-lg hover:bg-secondary-custom/90'>Enviar registro</button>
                        </div>
                        <p className='underline text-xs'>Recibirás un correo con la información del registro de psicólogo, además de las instrucciones.</p>
                    </>
                )
            }
            <p className='text-center text-xs mt-12'>© Derechos reservados 2024</p>
        </div>
    )
}

export default Register