/* eslint-disable react-hooks/set-state-in-effect */
'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { ItemCarrinho } from "@/data/model/Produtos";

interface CarrinhoContextoProps {
    itens: ItemCarrinho[],
    adicionarItem: (produto: ItemCarrinho) => void
    diminuirItem: (produto: ItemCarrinho) => void
    removerItem: (produto: ItemCarrinho) => void
}

export const CarrinhoContext = createContext<CarrinhoContextoProps>({} as any)

export default function CarrinhoProvider(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    useEffect(() => {
        const dados = localStorage.getItem('carrinho')
        if (!dados) return
        const carrinho: ItemCarrinho[] = JSON.parse(dados)
        setItens(carrinho)
    }, [])

    useEffect(() => {
        const carrinhoSalvo = localStorage.setItem("carrinho", JSON.stringify(itens))
        console.log(carrinhoSalvo)
    }, [itens])

    function adicionarItem(produto: ItemCarrinho) {
        const existe = itens.find(p => p.id == produto.id)
        if (existe) {
            setItens(itens =>
                itens.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                )
            )
        } else {
            setItens(itens => [...itens, { ...produto, quantidade: 1 }])
        }
    }

    function diminuirItem(produto: ItemCarrinho) {
        const existe = itens.find(p => p.id === produto.id)

        if (!existe) return

        if (existe.quantidade > 1) {
            setItens(itens =>
                itens.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
            )
        } else {
            setItens(itens =>
                itens.filter(item => item.id !== produto.id)
            )
        }
    }

    function removerItem(produto: ItemCarrinho) {
        const existe = itens.find(p => p.id === produto.id)

        if (existe) {
            setItens(itens =>
                itens.filter(item => item.id !== produto.id)
            )
        }
    }

    return (
        <CarrinhoContext.Provider value={{ itens, adicionarItem, diminuirItem, removerItem }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}