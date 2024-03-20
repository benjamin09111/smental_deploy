import Perfil from "./perfil/Perfil";
import Publicaciones from "./Publicaciones";
import Crear from "./Crear";
import Buscar from "./Buscar";
import ChatBot from "./ChatBot";
import Terminos from './Terminos';
import Posts from "./Posts";

const Content = ({ setState, state, tipo, setTipo }) => {
    return (
        <div style={{minHeight: "100vh"}} className='flex lg:pl-64 flex-col relative w-full bg-gray-950 pb-24'>
            {
                state === "home" && (<Publicaciones tipo={tipo} />)
            }
            {
                state === "posts" && (<Posts />)
            }
            {
                state === "crear" && (<Crear tipo={tipo} />)
            }
            {
                state === "buscar"  && (<Buscar />)
            }
            {
                state === "chat" && (<ChatBot />)
            }
            {
                state === "terminos" && (<Terminos />)
            }
            {
                state === "perfil" && (<Perfil tipo={tipo} />)
            }
        </div>
    )
}

export default Content