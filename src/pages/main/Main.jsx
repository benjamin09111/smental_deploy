import {useState, useEffect} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Aside from "../../components/aside/Aside";
import Content from "../main/content/Content";

const Main = () => {
    //todo el contenido de la app
    const [state, setState] = useState("home");
    const [tipo, setTipo] = useState("usuario");

    useEffect(()=> {
        //llamada para saber el tipo, hay que crifrar
    }, [])
    
    return (
        <div style={{minHeight: "100vh"}} className='flex flex-col bg-gradient-secondary text-white'>
            <div>
                <Navbar tipo={tipo} state={state} setState={setState} ></Navbar>
            </div>
            <main style={{paddingTop: "10vh"}} className='flex w-full'>
                <Aside tipo={tipo} setState={setState}/>
                <Content tipo={tipo} setTipo={setTipo} state={state} />
            </main>
            <div className="lg:hidden">
                <Footer tipo={tipo} setState={setState} />
            </div>
        </div>
        
    )
}

export default Main