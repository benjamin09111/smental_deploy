import Template from "./Template";
import { useState, useEffect } from "react";

const PPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getting = async() => {
      setLoading(true);
      try {
        const res = await fetch("https://smental-backend.onrender.com/get-posts");

        if (!res.ok){
          setMessage("No se han podido obtener los artículos.");
          return;
        }

        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log("Error:", e);
      } finally {
        setLoading(false);
      }
    }

    getting();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center">{loading && <span className="icon-[eos-icons--loading] text-3xl text-blue-500"></span>}</div>
    <div className="text-red-500">{message}</div>
      {
        posts.length > 0 && posts.map((post, index) => {
            return (
              <Template index={index} titulo={post.titulo} fecha={post.fecha} hashtag={post.tematica} descripcion={post.descripcion} autor={post.autor} imagen={post.imagen} tipo={"psicologo"} link={""} />
            )
        })
      }
    </>
  )
}

export default PPosts;
