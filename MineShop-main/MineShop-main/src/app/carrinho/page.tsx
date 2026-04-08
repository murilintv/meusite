'use client'
import { IconShoppingCartFilled } from "@tabler/icons-react";
import CarrinhoVazio from "./components/CarrinhoVazio";
import { useContext, useState } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import Carrinho from "./components/Carrinho";
import QrCode from "./components/QrCode";

export default function Loja() {
    const { itens } = useContext(CarrinhoContext)
    const [ativo, setAtivo] = useState(false)
    function calcularValor() {
        let valorTotal = 0
        if (itens.length > 0) {
            itens.map(produto => {
                const preco = +produto.preco.replace(',', '.')
                valorTotal += preco * (produto.quantidade ?? 0)
            })
        }
        const totalFormatado = valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        
        return totalFormatado
    }

    function CalcularValorPix () {
        let valorTotal = 0
        if(itens.length > 0) {
            itens.map(produto => {
                const preco = +produto.preco.replace(',', '.')
                valorTotal += preco * (produto.quantidade ?? 0)
            })
        }
        return valorTotal
    }

    function finalizarCompra() {
        setAtivo(!ativo)
    }
    return (
        <div className="py-10 px-3 md:px-0 bg-gray-950 flex justify-center">
            {ativo && <QrCode finalizarCompra={finalizarCompra} calcularValorPix={CalcularValorPix} calcularValor={calcularValor}/>}
            <main className=" bg-gray-900 rounded-2xl md:w-4/6 w-full flex flex-col border border-gray-600">
                <div className="flex w-full justify-between py-6 md:px-12 px-5 border-b border-gray-700">
                    <div className="flex gap-2 items-center font-bold">
                        <IconShoppingCartFilled size={30} />
                        <span className="hidden md:block">Carrinho</span>
                    </div>
                    <div className="bg-orange-400/50 px-2 py-1 font-bold rounded-sm text-sm">{itens.length > 0 ? `${itens.length} Item no Carrinho` : `Carrinho vazio`}</div>
                </div>
                <div className="flex w-full py-6 justify-center border-b border-gray-700">
                    <div>
                        <span className="font-black text-base md:text-2xl">Resumo do pedido</span>
                    </div>
                </div>
                {itens.length > 0 ? itens.map(produto => {
                    return <Carrinho key={produto.id} id={produto.id} img={produto.img} nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade}/>
                }) : <CarrinhoVazio />}
                <div className="flex md:flex-row flex-col items-center md:items-baseline gap-8 md:gap-0 justify-between px-12 py-10 border-t border-gray-700">
                    <div className="font-bold flex gap-2 items-center">
                        <span className="text-lg">Valor Total:</span>
                        <span className="text-green-400 font-bold text-lg">{calcularValor()}</span>
                    </div>
                    <div>
                        {itens.length > 0 && 
                        <button onClick={() => finalizarCompra()} className="font-bold bg-orange-400 px-3 py-2 rounded-3xl cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            Finalizar Compra
                        </button>}
                    </div>
                </div>
            </main>
        </div>
    )
}