import { useState } from "react";
import PPosts from "./posts/PPosts";
import General from "./posts/General";
import posts from "../../../json/posts";

const Posts = () => {
  const [show, setShow] = useState("psicologos");
  return (
    <div className="flex items-start w-full">
      <section className='flex flex-col lg:pl-12 lg:w-2/3 py-6'>
        <div className="flex px-4 lg:px-0 flex-col gap-6 pb-6">
          <h1 className="text-3xl text-gradient font-bold">Descubre información profesional</h1>
          <p>Te invitamos a leer las publicaciones de nuestros profesionales. Además, puedes informarte más sobre temas relacionados con la psicología y salud mental, según tus preferencias utiliza los botones de abajo.</p>
          <div className="flex flex-col lg:flex-row gap-6">
            <button className={`px-3 py-2 rounded bg-gradient-primary cursor-pointer ${show === "psicologos" ? "bg-gradient-primary" : "bg-gradient-secondary"}`} onClick={() => setShow("psicologos")}>Escrita por nuestros psicólogos profesionales</button>
            <button className={`px-3 py-2 rounded bg-gradient-primary cursor-pointer ${show === "general" ? "bg-gradient-primary" : "bg-gradient-secondary"}`} onClick={() => setShow("general")}>Información general</button>
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

      </section>
      <section className='w-1/3 py-6 lg:px-24 shadow hidden lg:block'>
        <div className='py-3 px-6 rounded bg-gray-900 flex flex-col gap-2'>
          <h2 className='text-2xl'>Temáticas más buscadas en los posts profesionales</h2>
          <b>#Soledad</b>
          <b>#Depresión</b>
          <b>#Tristeza</b>
          <b>#Esperanza</b>
        </div>
      </section>
    </div>
  )
}

export default Posts
