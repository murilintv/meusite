'use client'
import Blogs from "@/data/constants/blog"
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"

interface CardBlogProps {
    id: number
}

export default function CardBlog(props: CardBlogProps) {
    const [Id, setID] = useState(props.id)
    const blog = Blogs.find(blog => blog.id === Id)

    function proximo() {
        setID(Id => Id + 1)
    }
    function anterior() {
        setID(Id => Id - 1)
    }
    return (
        <>
        {blog ? 
            <div className="flex flex-col w-full items-center gap-10">
                <div className="relative w-full h-44">
                    <Image src={blog.img} fill alt="BlogImg" className="object-cover rounded-t-2xl"></Image>
                </div>
                <div>
                    <span className="md:text-3xl text-2xl font-black text-center">{blog.titulo}</span>
                </div>
                <div>
                    <p className="max-w-4xl mx-auto text-center leading-relaxed">{blog.conteudo}</p>
                </div>
                <div className="bg-gray-900 rounded-2xl w-full flex justify-between px-10 items-center">
                    <div className="flex items-center">
                        {Id > 1 ? <button onClick={() => anterior()} className="cursor-pointer flex items-center transition-all duration-900 ease-out hover:scale-105 hover:shadow-2xl hover:text-orange-400"><IconArrowNarrowLeft size={70} stroke={2}/></button>: ''}
                    </div>
                    <div className="flex items-center ">
                        {Id < Blogs.length ? <button onClick={() => proximo()} className="cursor-pointer flex items-center transition-all duration-900 ease-out hover:scale-105 hover:shadow-2xl hover:text-orange-400"><IconArrowNarrowRight size={70} stroke={2}/></button>: ''}
                    </div>
                </div>
            </div>
        : <p>Blog não Econtrado.</p>
        }
        </>
    )
}