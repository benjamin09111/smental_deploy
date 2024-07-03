import Template from "./Template";

const General = ({posts}) => {
  return (
    <>
      {
        posts.map((post,index)=>{
            if(post.tipo != "psicologo"){
                return (
                    <Template index={index} titulo={post.titulo} fecha={post.fecha} hashtag={post.hashtag} imagen={post.imagen} descripcion={post.descripcion} autor={post.autor} tipo={"general"} link={post.link} />
                )
            }
        })
      }
    </>
  )
}

export default General
