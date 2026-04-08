'use client'
import { ToastContext } from "@/context/ToastContext";
import { IconBrandDiscordFilled, IconServer2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
    const {ativarToast} = useContext(ToastContext)
    return (
        <header className="h-80 w-full bg-[url('/foto.jpg')] bg-cover bg-no-repeat bg-center flex justify-center">
            <div className="md:w-4/6 w-full h-80 flex-col flex md:flex-row justify-around md:justify-between items-center">
                <button onClick={() => {
                    ativarToast("Copiado para área de transferência")
                    navigator.clipboard.writeText("MURILO.GG")
                }} 
                className="flex gap-2 items-center md:w-[250px] cursor-pointer self-start md:self-auto ml-5 md:ml-0">
                    <IconServer2 stroke={2} size={50} className="transition-transform duration-800 hover:rotate-360"/>
                    <div className="flex flex-col">
                        <span className="md:text-sm text-xs">Conecte-se já!</span>
                        <span className="md:text-sm text-xs">Clique para jogar.</span>
                    </div>
                </button>
                <div>
                    <Link href={'/'}><Image src="/Murilo.png" width={500} height={500} alt="Logo" className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 cursor-pointer w-[200px] h-[200px] md:w-[250px] md:h-[250px]"></Image></Link>
                </div>
                <Link href={'https://discord.com/'} className="flex gap-2 items-center md:w-[250px] cursor-pointer self-end mr-5 md:mr-0 md:self-auto">
                    <div className="flex flex-col">
                        <span className="md:text-sm text-xs">Acesse o nosso Discord</span>
                        <span className="md:text-sm text-xs">Clique para entrar.</span>
                    </div>
                    <IconBrandDiscordFilled stroke={2} size={50} className="transition-transform duration-800 hover:rotate-360"/>
                </Link>
            </div>
        </header>
    )
}