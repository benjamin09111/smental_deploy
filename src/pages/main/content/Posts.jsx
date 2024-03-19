import { useState } from "react";
import PPosts from "./posts/PPosts";
import General from "./posts/General";
import posts from "../../../json/posts";

const Posts = () => {
  const [show, setShow] = useState("psicologos");
  return (
    <div className="py-6 flex flex-col px-6">
      <div className="flex flex-col gap-6 pb-6">
      <h1 className="text-3xl text-gradient font-bold">Descubre información profesional</h1>
      <p>Te invitamos a leer las publicaciones de nuestros profesionales. Además, puedes informarte más sobre temas relacionados con la psicología y salud mental, según tus preferencias utiliza los botones de abajo.</p>
      <div className="flex gap-6">
        <button className={`px-3 py-2 rounded bg-gradient-primary cursor-pointer ${show === "psicologos" ? "bg-gradient-primary" : "bg-gradient-secondary"}`} onClick={()=>setShow("psicologos")}>Escrita por nuestros psicólogos profesionales</button>
        <button className={`px-3 py-2 rounded bg-gradient-primary cursor-pointer ${show === "general" ? "bg-gradient-primary" : "bg-gradient-secondary"}`} onClick={()=>setShow("general")}>Información general</button>
      </div>
      </div>

      <div className="flex flex-col gap-6">
        {
          show === "psicologos" ? 
          (
            <PPosts posts={posts} />
          ) :
          (
            <General posts={posts} />
          )
        }
      </div>

    </div>
  )
}

export default Posts
