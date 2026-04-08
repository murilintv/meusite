import Image from "next/image"
import Link from "next/link"

interface CardBlogProps {
    titulo: string
    conteudo: string
    img: string
    id: number
}


export default function CardBlogs(props: CardBlogProps) {
    return (
        <div className="pb-5 w-full gap-5 flex flex-col border border-gray-600 rounded-2xl bg-gray-900/60 hover:border-orange-400 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex flex-col gap-4">
                <div>
                    <Image src={props.img} alt="bannerBlog" width={500} height={500} className="rounded-t-2xl w-full h-28"/>
                </div>
                <div className="flex justify-center">
                    <span className="font-black text-center">{props.titulo}</span>
                </div>
                <div className="flex text-center text-gray-300/80 px-3">
                    <span className="line-clamp-6 text-center">{props.conteudo}</span>
                </div>
                <div className="flex justify-center">
                    <Link href={`/blog/${props.id}`} className="bg-orange-400 px-15 py-2 rounded-2xl cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">Ler mais</Link>
                </div>
            </div>
        </div>
    )
}