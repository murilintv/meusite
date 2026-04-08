'use client'
import { ToastContext } from "@/context/ToastContext";
import { IconArrowForwardUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";


export default function Main() {
    const { ativarToast } = useContext(ToastContext)
    return (
        <div className="min-h-screen py-10 bg-gray-950 flex justify-center">
            <main className="md:w-4/6 w-full min-h-screen md:flex-row flex flex-col gap-5">
                <div className="md:w-3/4 md:px-0 px-5 flex flex-col items-center gap-10 bg-gray-950 rounded-t-2xl">
                    <div className="h-[140px] w-full relative">
                        <Image src="/banner.jpg" alt="banner" fill className="absolute object-cover rounded-t-2xl"></Image>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-black">Bem-vindo(a) ao nosso servidor!</h1>
                        <h3 className="text-gray-300/80">Aqui você encontra muito mais do que um simples servidor de Minecraft. Nosso objetivo é oferecer uma experiência divertida, justa e bem estruturada, onde cada jogador possa evoluir, competir e se divertir ao máximo.
                            Contamos com sistemas exclusivos, eventos frequentes, uma comunidade ativa e uma equipe sempre pronta para ajudar.
                            Explore nossos produtos na loja e fortaleça sua jornada dentro do servidor. Seu apoio nos ajuda a manter tudo online, atualizado e cada vez melhor!
                        </h3>
                        <h2 className="mt-8 font-black">Nosso servidor oferece:</h2>
                        <ul className="list-disc list-inside text-gray-300/80">
                            <li>BedWars – Estratégia, trabalho em equipe e combates intensos</li>
                            <li>SkyWars – Partidas rápidas, skill e reflexo</li>
                            <li>The Bridge – Velocidade, PvP e muita adrenalina</li>
                            <li>HG (Hunger Games) – Clássico, sobrevivência e competição</li>
                            <li>Eventos especiais e minigames rotativos</li>
                            <li>Mapas exclusivos e bem otimizados</li>
                            <li>Sistema de ranks e recompensas</li>
                            <li>Comunidade ativa e equipe dedicada</li>
                            <li>Atualizações frequentes e experiência equilibrada</li>
                            <li>Explore nossa loja, evolua no servidor e faça parte dessa jornada cheia de diversão!</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 flex justify-between w-full px-3 py-3 rounded-2xl items-center">
                        <div>Veja mais postagens no nosso blog.</div>
                        <div className="">
                            <Link href={'/blog'} className="bg-orange-400 md:p-2 p-1 px-1 rounded-lg flex items-center gap-2 cursor-pointer font-bold text-xs md:text-lg hover:bg-amber-800 transition-all duration-300">
                                <IconArrowForwardUp />
                                Visitar Blog
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <div className="flex flex-col h-50 px-2 md:px-0">
                        <div className="bg-gray-900 h-15 flex justify-center items-center rounded-t-2xl">
                            <span className="font-bold text-2xl">NOSSO IP</span>
                        </div>
                        <div className="bg-gray-900/60 h-34 flex flex-col items-center rounded-b-2xl px-2 gap-3 py-2">
                            <span className="font-bold text-1xl">Junte-se aos outros</span>
                            <span className="font-bold text-1xl">jogadores!</span>
                            <div className="bg-white px-10 py-1.5 rounded-2xl transition-all duration-900 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                                <button
                                    className="text-gray-800 font-black cursor-pointer"
                                    onClick={() => {
                                        ativarToast("Copiado para área de transferência")
                                        navigator.clipboard.writeText("MURILO.GG")
                                    }}
                                >
                                    MURILO.GG
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-50 px-2 md:px-0">
                        <div className="bg-gray-900 h-15 flex justify-center items-center rounded-t-2xl">
                            <span className="font-bold text-2xl">SOCIAL</span>
                        </div>
                        <div className="bg-gray-900/60 h-20  flex justify-center items-center rounded-b-2xl gap-5 py-2 px-2">
                            <Link href={'https://www.youtube.com/'} className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"><Image src='/yt.png' width={60} height={60} alt="yt" /></Link>
                            <Link href={'https://www.instagram.com/'} className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"><Image src='/inst.png' width={60} height={60} alt="instagram" /></Link>
                            <Link href={'https://discord.com/'} className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"><Image src='/dc.png' width={60} height={60} alt="discord" /></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}