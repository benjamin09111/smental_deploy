import { useState, useEffect } from 'react';
import PrincipalPage from "./pages/principal/Principal";
import Main from "./pages/main/Main";
import Loading from "./Loading";
import NavP from './components/nav_principal/NavbarP';
import Tutorial from "./pages/principal/Tutorial";

function App() {
  const [logeado, setLogeado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [terminos, setTerminos] = useState(false);

  const [tutorial, setTutorial] = useState(false);

  useEffect(()=> {
    setLoading(true);
    const token = localStorage.getItem("token");
    const tutorial_dado = localStorage.getItem("tutorial");
    if(tutorial_dado){
      setTutorial(true);
    }
    if(token){
      setLogeado(true);
    }
    setLoading(false);
  }, [])

  return (
    <>
      {logeado ? (<Main />) : (
      <>
      
      {
        tutorial ? (<>
        <NavP open={open} terminos={terminos} setTerminos={setTerminos} setOpen={setOpen} /><PrincipalPage terminos={terminos} setTerminos={setTerminos} open={open} setOpen={setOpen} />
        </>) : (<Tutorial setTutorial={setTutorial} />)
      }
      </>
      )}
      {loading && <Loading msg="Verificando sesión" />}
    </>
  )
}

export default App
