import React, { useState } from 'react'

const Index = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signAdmin = async () => {
        try {
            const response = await fetch('http://localhost:3000/loginadmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            const token = data.token;
            
            localStorage.setItem('token', token);
            window.location.href = "/backend";
            return;
        } catch (error) {
            return;
        }
    }

    return (
        <div className='bg-black h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col gap-3 rounded shadow text-white'>
            <label className='font-bold text-2xl' htmlFor="">Usuario</label>
            <input type="text" name='username' className='input' placeholder="Nombre de usuario"
            value={username} onChange={(e) => setUserName(e.target.value)} />
            <label className='font-bold text-2xl' htmlFor="">Contraseña</label>
            <input type="password" name='password' className='input' placeholder="Contraseña"
            value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='text-center w-1/2 p-2 bg-white/90 text-black' onClick={signAdmin}>Sign In</button>
            </div>
        </div>
    )
}

export default Index