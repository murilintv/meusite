'use client'
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { IconArticleFilled, IconBrandShopee, IconHomeFilled, IconShoppingCartFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

export default function Nav() {
    const {itens} = useContext(CarrinhoContext)
    return (
        <nav className="bg-gray-900 h-18 flex justify-center items-center">
            <div className="md:w-4/6 w-full justify-around h-18 gap-5 flex md:justify-between items-center">
                <div>
                    <ul className="flex md:gap-15 md:gap-8 gap-5">
                        <Link href={'/'} className="flex items-center gap-3 hover:text-orange-400 transition-all duration-300">
                            <IconHomeFilled size={32} />
                            <span className="hidden md:block">Início</span>
                        </Link>
                        <div className="flex gap-2 items-center">
                            <Link href={'/carrinho'} className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300">
                                <div className="flex gap-3 items-center">
                                    <IconShoppingCartFilled size={32} />
                                    <span className="hidden md:block">Carrinho</span>
                                </div>
                            </Link>
                                <div className="bg-orange-400 text-sm rounded-lg flex justify-center items-center text-center px-2">
                                    {itens.length}
                                </div>
                        </div>
                        <Link href={'/blog'} className="flex items-center gap-3 hover:text-orange-400 transition-all duration-300">
                            <IconArticleFilled size={32} />
                            <span className="hidden md:block">Blog</span>
                        </Link>
                    </ul>
                </div>
                <div>
                    <Link href={'/loja'} className="bg-orange-400 md:px-8 px-3 py-3 rounded-lg flex items-center gap-2 cursor-pointer font-bold text-lg hover:bg-amber-700 transition-all duration-300">
                        <IconBrandShopee size={30} />
                        Loja
                    </Link>
                </div>
            </div>
        </nav>
    )
}