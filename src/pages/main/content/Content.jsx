import Home from "./Home";
import Publicaciones from "./Publicaciones";
import Crear from "./Crear";
import Buscar from "./Buscar";
import ChatBot from "./ChatBot";
import Terminos from './Terminos';
import Posts from "./Posts";
import Mas from './Mas';

const Content = ({ setState, state, tipo, setTipo }) => {
    return (
        <div className='flex flex-col relative w-full lg:px-64 px-6'>
            <div className='flex pt-6 px-6 lg:px-64'>
            {
                state === "home" && (<Home />)
            }
            {
                state === "publicaciones" && (<Publicaciones tipo={tipo} />)
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
                state === "posts" && (<Posts />)
            }
            {
                state === "terminos" && (<Terminos />)
            }
            {
                state === "mas" && (<Mas tipo={tipo} setTipo={setTipo} />)
            }
            </div>
        </div>
    )
}

export default Content