import {useState} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Aside from "../../components/aside/Aside";
import Content from "../main/content/Content";

const Main = () => {
    //todo el contenido de la app
    const [state, setState] = useState("home");
    return (
        <div className='flex flex-col'>
            <div>
                <Navbar state={state} setState={setState} ></Navbar>
            </div>
            <main className='flex w-full'>
                <Aside setState={setState}/>
                <Content state={state} />
            </main>
            <div className="lg:hidden">
                <Footer setState={setState} />
            </div>
        </div>
        
    )
}

export default Main