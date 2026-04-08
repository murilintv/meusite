import Blogs from "@/data/constants/blog"
import CardBlog from "./components/CardBlogs"

export default function Blog() {
    return (
        <div className="min-h py-10 bg-gray-950 flex justify-center">
            <main className="md:w-4/6 w-full px-5 h-min grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {Blogs.map(blog => {
                    return (
                        <CardBlog id={blog.id} titulo={blog.titulo} img={blog.img} conteudo={blog.conteudo} key={blog.id}/>
                    )
                })}
            </main>
        </div>
    )
}