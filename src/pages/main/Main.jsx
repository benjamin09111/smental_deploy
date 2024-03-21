import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Aside from "../../components/aside/Aside";
import Content from "../main/content/Content";
import NavbarHome from '../../components/nav_home/NavbarHome';
import Unauthorized from "../../components/Unauthorized";

const Main = () => {
    const [state, setState] = useState("home");
    const [tipo, setTipo] = useState("usuario");
    const [searchMode, setSearchMode] = useState(false);
    const [autorizado, setAutorizado] = useState(false);

    useEffect(() => {
        const verify = async()=> {
            const token = localStorage.getItem("token");
            if(token){
                try {
                    const response = await fetch('http://localhost:3000/verifyToken', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': localStorage.getItem("token"),
                        }
                    });
        
                    const data = await response.json();
    
                    if(data.isValid !== false) {
                        setAutorizado(true);
                    } 
                } catch (error) {
                    return;
                }
            }else{
                setAutorizado(true);
            }
        }
        verify();
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
        <>
        {
            autorizado ? 
            (
                <div style={{ minHeight: "100vh" }} className='flex flex-col bg-gradient-secondary text-white'>
            <div>
                {searchMode ? <NavbarHome tipo={tipo} /> : <Navbar tipo={tipo} state={state} setState={handleStateChange} />}
            </div>
            <main style={{ paddingTop: "10vh" }} className='flex w-full'>
                <Aside state={state} tipo={tipo} setState={handleStateChange} />
                <Content tipo={tipo} setTipo={setTipo} state={state} />
            </main>
            <div className="lg:hidden">
                <Footer state={state} tipo={tipo} setState={handleStateChange} />
            </div>
        </div>
            ) :
            (
                <Unauthorized />
            )
        }
        </>
    )
}

export default Main;
