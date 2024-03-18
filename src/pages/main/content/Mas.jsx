import {useState, useEffect} from 'react'
import Usuario from "./paneles/Usuario";
import Psicologo from "./paneles/Psicologo";
import Admin from "./paneles/Admin";

const Mas = ({tipo, setTipo}) => {


  useEffect(()=> {
    const type = localStorage.getItem("type");
    if(type) {
      setTipo(type);
    }
  },[])

  //panel de ajustes: psicólogo, usuario, admin

  return (
    <div className='flex flex-col'>
      {
        tipo === "" && (
          <p>Cargando...</p>
        )
      }
      {
        tipo === "psicologo" && (
          <Psicologo />
        )
      }
      {
        tipo === "usuario" && (
          <Usuario />
        )
      }
      {
        tipo === "admin" && (
          <Admin />
        )
      }
    </div>
  )
}

export default Mas