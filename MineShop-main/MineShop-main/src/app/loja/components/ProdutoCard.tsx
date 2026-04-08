import { CarrinhoContext } from "@/context/CarrinhoContext";
import { ToastContext } from "@/context/ToastContext";
import {ItemCarrinho} from "@/data/model/Produtos";
import { IconShoppingCartFilled, IconTipJar } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";


export default function ProdutoCard(props: ItemCarrinho) {
    const { adicionarItem, itens } = useContext(CarrinhoContext)
    const {ativarToast} = useContext(ToastContext)
    const produto = props
    return (
        <div className="flex h-min flex-col py-8 gap-5 items-center border border-gray-600 rounded-2xl bg-gray-900/60 hover:border-orange-400 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
            <div>
                <Image src={produto.img} width={180} height={100} alt="vip" />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="font-black">{produto.nome}</span>
                <span className="text-gray-200/80">Por</span>
                <span className="font-black">R$ {produto.preco}</span>
            </div>
            {itens.find(p => p.id == produto.id) ?
                <Link href={'/carrinho'} className="flex font-bold gap-1 items-center rounded-2xl p-2 bg-orange-400 cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                    <IconShoppingCartFilled size={25} />Ir para Carrinho
                </Link> :
                <button onClick={() => {
                    adicionarItem(produto)
                    ativarToast("Item adicionado ao carrinho.")

                }} className="flex font-bold gap-1 items-center rounded-2xl px-5 py-2 bg-orange-400 cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                    <IconTipJar size={25}/> Doar
                </button>}
        </div>
    )
}