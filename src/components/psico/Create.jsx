import { useState } from 'react'

const Create = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({
        titulo: "",
        descripcion: "",
        tematica: "",
        imagen: "",
        fecha: ""
    });

    const createPost = async () => {
        if (post.titulo === "" || post.descripcion === "" || post.tematica === "") {
            setMessage("Complete los campos.");
            return;
        }
        try {
            setLoading(true);
            const today = new Date();
            const nuevoPost = {
                ...post,
                fecha: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
            };

            const response = await fetch('http://localhost:3000/create/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoPost)
            });

            if (response.ok) {
                setMessage("Post creado.");
            } else {
                setMessage("Error al crear publicación.");
            }
        } catch (e) {
            setMessage("Error al crear el post.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='bg-gray-950 text-black flex flex-col justify-center items-center gap-3 p-6 rounded shadow'>
            <input
                type="text"
                name="titulo"
                className="input"
                placeholder="Título"
                value={post.titulo}
                onChange={(e) =>
                    setPost({ ...post, titulo: e.target.value })
                }
            />
            <textarea
                type="text"
                name="descripcion"
                className="input resize-none h-16"
                placeholder="Contenido del post"
                value={post.descripcion}
                onChange={(e) =>
                    setPost({ ...post, descripcion: e.target.value })
                }
            ></textarea>
            <input
                type="text"
                name="tematica"
                className="input"
                placeholder="Temática"
                value={post.tematica}
                onChange={(e) =>
                    setPost({ ...post, tematica: e.target.value })
                }
            />
            <input
                type="text"
                name="imagen"
                className="input"
                placeholder="Imagen URL (opcional)"
                value={post.imagen}
                onChange={(e) =>
                    setPost({ ...post, imagen: e.target.value })
                }
            />
            <button className='py-2 px-4 rounded bg-gray-800 text-white hover:bg-gray-900 w-5/6' onClick={createPost}>Crear Post</button>
            {
                loading && <span className="icon-[eos-icons--loading] text-3xl text-blue-500 mt-2"></span>
            }
            <p className='text-red-500 mt-2'>{message}</p>
        </div>
    )
}

export default Create