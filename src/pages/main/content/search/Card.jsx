import img from "/user.webp";

const Card = ({ nombre, apellido1, apellido2, edad, universidad, ubicacion, descripcion, sexo, numero, email, publicaciones, imagen }) => {
    return (
        <div className='flex flex-col lg:w-[20rem]'>
            <div className="bg-gray-900 p-2 rounded-tl rounded-tr">
                <h1 className='text-xl font-bold'>{nombre} {apellido1} {apellido2}</h1>
                <p className='text-lg text-gray-100'>{edad} años</p>
            </div>
            <img src={imagen == "" ? img : img} alt="user" className="w-full" />
            <div className="p-2 bg-gray-900">
            <h2 className="text-lg underline font-semibold">Descripción</h2>
                <p className="text-gray-200"><b className="font-normal italic">
                    {
                        descripcion.length > 100 ? `${descripcion}...` : descripcion
                    }
                </b></p>
                {
                    descripcion.length > 100 && (
                        <button className="text-gray-500 italic">Leer más</button>
                    )
                }
            </div>
            <div className="bg-gray-900 p-2 rounded-tl rounded-tr">
                <div><b>Estudió en</b>: {universidad}</div>
                <div><b>Ubicación</b>: {ubicacion}</div>
                <h3 className="text-lg mt-4 underline font-semibold">Contacto</h3>
                <div><b>Email</b>: {email}</div>
                <div><b>Teléfono</b>: {numero}</div>
            </div>

        </div>
    )
}

export default Card
