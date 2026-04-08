'use client'
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { ItemCarrinho } from "@/data/model/Produtos";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useContext } from "react";

export default function Carrinho(props: ItemCarrinho) {
    const { adicionarItem, diminuirItem, removerItem } = useContext(CarrinhoContext)
    const preco = +props.preco.replace(',', '.')
    const quantidade = props.quantidade
    const valorFormatado = preco * quantidade
    return (
        <div className="py-6 md:px-12">
            <div className="flex px-5 flex-col md:flex-row md:justify-between gap-5">
                <div className="flex gap-5 items-center md:w-[250px]">
                    <div>
                        <Image src={props.img} width={80} height={80} alt="foto do produto"></Image>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{props.nome}</span>
                        <span className="text-gray-500 text-sm font-bold">R$ {props.preco} un.</span>
                    </div>
                </div>
                <div className="flex items-center md:justify-center md:w-[250px]">
                    <span className="text-green-400 font-bold">
                        {valorFormatado.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </span>
                </div>
                <div className="flex items-center gap-3 mr-2">
                    <button onClick={() => diminuirItem(props)} className="bg-red-500 p-2 rounded-4xl cursor-pointer hover:bg-red-700 transition-all duration-300"><IconMinus></IconMinus></button>
                    <div className="bg-gray-950 w-9 h-8 items-center flex justify-center">
                        <span>{props.quantidade}</span>
                    </div>
                    <button onClick={() => adicionarItem(props)} className="bg-green-500 p-2 rounded-4xl cursor-pointer hover:bg-green-700 transition-all duration-300"><IconPlus></IconPlus></button>
                    <button className="bg-red-500 p-2 rounded-4xl ml-5 cursor-pointer hover:bg-red-700 transition-all duration-300" onClick={() => removerItem(props)}><IconX></IconX></button>
                </div>
            </div>
        </div>
    )
}