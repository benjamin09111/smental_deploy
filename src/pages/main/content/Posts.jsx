import { useState } from "react";
import PPosts from "./posts/PPosts";
import General from "./posts/General";
import posts from "../../../json/posts";

const Posts = () => {
  const [show, setShow] = useState("psicologos");
  return (
    <div className="flex items-start w-full lg:pl-28">
      <section className='flex flex-col lg:w-2/3 py-6'>
        <div className="flex px-4 lg:px-0 flex-col gap-6 pb-6">
          <h1 className="text-3xl text-primary-custom font-bold">Descubre información profesional</h1>
          <p className="text-black text-xl">Te invitamos a leer las publicaciones de nuestros profesionales. Además, puedes informarte más sobre temas relacionados con la psicología y salud mental, según tus preferencias utiliza los botones de abajo.</p>
          <div className="flex w-full lg:flex-row">
            <button className={`px-3 py-2 w-1/2 bg-fourth-custom cursor-pointer ${show === "psicologos" ? "bg-fourth-custom" : "bg-gradient-secondary"}`} onClick={() => setShow("psicologos")}>Por psicólogos</button>
            <button className={`px-3 py-2 w-1/2 bg-fourth-custom cursor-pointer ${show === "general" ? "bg-fourth-custom" : "bg-gradient-secondary"}`} onClick={() => setShow("general")}>Artículos</button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {
            show === "psicologos" ?
              (
                <PPosts/>
              ) :
              (
                <General posts={posts} />
              )
          }
        </div>

      </section>
    </div>
  )
}

export default Posts
