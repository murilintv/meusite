import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-900 min-h py-10 items-center flex flex-col gap-10 justify-center">
            <div className="md:w-4/6 px-2 flex lg:flex-row flex-col md:justify-between gap-10">
                <div className="w-full md:w-[550px] flex flex-col gap-3">
                    <div className="flex items-center gap-5">
                        <Image src="/Murilo.png" width={80} height={80} alt="logo" />
                        <span className="font-bold">MURILO.GG</span>
                    </div>
                    <div className="text-gray-200/80 flex flex-wrap">
                        <span>
                            Se você acredita em nosso objetivo de proporcionar uma melhor experiência de jogo e
                            deseja fazer parte dessa jornada conosco, considere fazer uma doação hoje.
                            Juntos, podemos continuar construindo e fortalecendo esta comunidade incrível.
                        </span>
                    </div>
                </div>
                <div className="flex gap-10 ">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold">Acesse</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href={'/carrinho'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Carrinho</Link>
                            <Link href={'/blog'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Blog</Link>
                            <Link href={'termos'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Termos</Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold">Redes Sociais</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href={'https://discord.com/'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Discord</Link>
                            <Link href={'https://www.tiktok.com/'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Tiktok</Link>
                            <Link href={'https://www.instagram.com/'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Instagram</Link>
                            <Link href={'https://www.youtube.com/'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Youtube</Link>
                            <Link href={'https://x.com/?lang=pt'} className="hover:text-orange-400 transition-all duration-300 text-gray-200/80">Twitter/X</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-top w-full md:w-4/6 border-gray-700"></div>
            <div className="md:w-4/6 w-full flex md:flex-row justify-between md:gap-5 px-2">
                <span className="text-gray-200/80">Todos os direitos reservados - MURILO.GG © {new Date().getFullYear()}</span>
                <Image src="/Murilo.png" width={60} height={40} alt="logo" />
            </div>
        </div>
    )
}