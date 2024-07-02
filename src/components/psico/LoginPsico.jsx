import {useState} from 'react'

const LoginPsico = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");

    const signin = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/loginpsicologo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if(!response.ok){
                setMessage("Error de credenciales.");
                setLoading("false");
                return;
            }

            const data = await response.json();
            const message = data.message;
            const token = data.token;

            localStorage.setItem('token', token);

            setLoading(false);
            setMessage(message);
            window.location.href = "/create-post";
            return;
        } catch (error) {
            setLoading(false);
            setMessage("Ha ocurrido un error. Vuelva a intentar más tarde.");
            return;
        }
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-950 px-4 lg:px-12 gap-4'>
       <h2 className='text-2xl lg:text-4xl text-center font-bold text-gray-100'>LOGIN PSICÓLOGO</h2>
            <div className='flex gap-10'>
                <span className="icon-[ic--baseline-email] text-2xl bg-gradient-primary"></span>
                <input type="text" name='username' className='input' placeholder="Nombre de usuario"
                    value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='flex gap-10'>
                <span className="icon-[mdi--password] text-2xl bg-gradient-primary"></span>
                <input type="password" name='password' className='input' placeholder="Contraseña"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className=' w-5/6 lg:w-1/2 bg-gradient-primary mt-4 py-2 text-white hover:bg-gradient-primary/80 text-lg lg:text-xl' type='button' onClick={signin}>INICIAR SESIÓN</button>
            
            <p className='text-secondary-custom'>{message}</p>
            {loading && (
                <div className='flex flex-col justify-center items-center gap-3 text-secondary-custom'>
                    <span className="icon-[eos-icons--loading] text-4xl"></span>
                    <b>Cargando</b>
                </div>
            )}
    </div>
  )
}

export default LoginPsico
