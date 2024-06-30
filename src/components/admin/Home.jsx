import {useState} from 'react'
import Posts from "./Posts";
import Comments from "./Comments";
import Reports from "./Reports";
import Psico from "./Psico";

const Home = () => {
    const [state, setState] = useState("posts");
    return (
        <div className='h-[100vh] bg-gray-950 text-white pt-24'>
            <div className='justify-center items-center flex text-3xl font-semibold mb-6'>
                Administrador
            </div>
            <nav className='flex flex-wrap w-full gap-6 justify-center items-center mb-12'>
                <a className='cursor-pointer p-2 rounded shadow bg-white text-black' onClick={()=>setState("posts")}>Posts</a>
                <a className='cursor-pointer p-2 rounded shadow bg-white text-black' onClick={()=>setState("comments")}>Comments</a>
                <a className='cursor-pointer p-2 rounded shadow bg-white text-black' onClick={()=>setState("reports")}>Reports</a>
                <a className='cursor-pointer p-2 rounded shadow bg-white text-black' onClick={()=>setState("psico")}>Crear psicólogo</a>
            </nav>
            <div className='flex justify-center items-center'>
                {
                    state === "posts" && <Posts />
                }
                {
                    state === "comments" && <Comments />
                }
                {
                    state === "reports" && <Reports />
                }{
                    state === "psico" && <Psico />
                }
            </div>
        </div>
    )
}

export default Home