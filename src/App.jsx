import { useState, useEffect } from 'react';
import PrincipalPage from "./pages/principal/Principal";
import Main from "./pages/main/Main";
import Loading from "./Loading";
import NavP from './components/nav_principal/NavbarP';

function App() {
  //variable-funcion_modifica
  const [logeado, setLogeado] = useState(false);
  const [loading, setLoading] = useState(false);

  //se ejecuta cuando se carga por primera vez
  useEffect(()=> {
    setLoading(true);
    const token = localStorage.getItem("token");
    if(token){
      setLogeado(true);
    }
    //verificar el token
    setLoading(false);
  }, [])

  const [state, setState] = useState("");

  return (
    <>
      {logeado ? (<Main />) : (
      <>
      <NavP />
      <PrincipalPage />
      </>
      
      )}
      {loading && <Loading msg="Verificando sesión" />}
    </>
  )
}

export default App
