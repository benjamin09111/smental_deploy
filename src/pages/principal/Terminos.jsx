const Terminos = ({setTerminos}) => {
    return (
        <>
        <div className="bg_overlay"></div>
        <div className='overlay bg-white text-xl p-6 h-5/6 lg:w-1/2 w-5/6 pt-6 overflow-y-auto rounded-lg flex flex-col gap-10 text-black'>
            <div className='text-3xl cursor-pointer flex w-full justify-end' onClick={()=> setTerminos(false)} >&times;</div>
            <h1 className="text-primary-custom text-4xl font-semibold text-center">Términos y Condiciones de Uso</h1>
            <p>Por favor, lee atentamente los siguientes términos y condiciones antes de utilizar nuestra aplicación de red social de salud mental. Al acceder y utilizar esta aplicación, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor, abstente de utilizar la aplicación.</p>

            <h2>1. Descripción de la Aplicación</h2>
            <p>La aplicación proporciona una plataforma en línea para que los usuarios puedan conectarse, compartir experiencias, brindar apoyo y obtener recursos relacionados con la salud mental. Todos los usuarios son anónimos y se alienta el respeto mutuo y la empatía en todas las interacciones.</p>

            <h2>2. Elegibilidad</h2>
            <p>Para utilizar nuestra aplicación, debes ser mayor de edad según las leyes de tu país de residencia. Al acceder a la aplicación, confirmas que cumples con este requisito.</p>

            <h2>3. Responsabilidad del Usuario</h2>
            <ul>
                <li>Al utilizar la aplicación, aceptas ser respetuoso y amable con los demás usuarios en todo momento.</li>
                <li>No se permite el uso de lenguaje ofensivo, discriminatorio, amenazante o agresivo en la aplicación.</li>
                <li>No se permite la publicación de contenido que promueva el suicidio, la automutilación u otras conductas dañinas para la salud mental.</li>
                <li>Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y no debes compartir tus credenciales con terceros.</li>
                <li>Si experimentas una crisis de salud mental o piensas en hacerte daño a ti mismo o a otros, te recomendamos que busques ayuda profesional inmediatamente.</li>
            </ul>

            <p>Al utilizar esta aplicación, aceptas estos términos y condiciones. ¡Gracias por ser parte de nuestra comunidad!</p>

            <div className='text-2xl cursor-pointer text-center bg-secondary-custom text-black py-3' onClick={()=> setTerminos(false)} >ACEPTAR</div>
        </div>
        </>
    )
}

export default Terminos