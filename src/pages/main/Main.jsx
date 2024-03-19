import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Aside from "../../components/aside/Aside";
import Content from "../main/content/Content";
import NavbarHome from '../../components/nav_home/NavbarHome';

const Main = () => {
    const [state, setState] = useState("home");
    const [tipo, setTipo] = useState("usuario");
    const [searchMode, setSearchMode] = useState(false);

    useEffect(() => {
        // Llamada para saber el tipo, hay que cifrar
    }, [])

    const handleStateChange = (newState) => {
        if (newState === "buscar") {
            setSearchMode(true);
        } else {
            setSearchMode(false);
        }
        setState(newState);
    }

    return (
        <div style={{ minHeight: "100vh" }} className='flex flex-col bg-gradient-secondary text-white'>
            <div>
                {searchMode ? <NavbarHome tipo={tipo} /> : <Navbar tipo={tipo} state={state} setState={handleStateChange} />}
            </div>
            <main style={{ paddingTop: "10vh" }} className='flex w-full'>
                <Aside tipo={tipo} setState={handleStateChange} />
                <Content tipo={tipo} setTipo={setTipo} state={state} />
            </main>
            <div className="lg:hidden">
                <Footer tipo={tipo} setState={handleStateChange} />
            </div>
        </div>
    )
}

export default Main;
