import { IconShoppingCartFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function CarrinhoVazio() {
    return (
        <div className="bg-gray-900 flex flex-col items-center justify-center gap-5 py-6 border-b border-gray-700">
            <div className="opacity-60">
                <IconShoppingCartFilled size={100} stroke={1} />
            </div>
            <span className="opacity-60 text-sm md:text-base text-center">
                Nenhum produto encontrado no seu carrinho.
            </span>
            <Link href={'/loja'} className="bg-orange-400 px-5 py-1 rounded-2xl cursor-pointer font-bold hover:bg-amber-700 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">Explorar Loja</Link>
        </div>
    )
}