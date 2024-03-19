import Template from "./Template";

const General = ({posts}) => {
  return (
    <>
      {
        posts.map((post,index)=>{
            if(post.tipo != "psicologo"){
                return (
                    <Template index={index} titulo={post.titulo} fecha={post.fecha} hashtag={post.hashtag} descripcion={post.descripcion} autor={post.autor} />
                )
            }
        })
      }
    </>
  )
}

export default General
