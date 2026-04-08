'use client'
import ProdutoCard from "./components/ProdutoCard";
import { useContext, useState } from "react";
import { ProdutoContext } from "@/context/ProdutoContext";
import FilterSideBar from "./components/FilterSideBar";

export default function Loja() {
    const [filtro, setFiltro] = useState('TODOS')
    const produtos = useContext(ProdutoContext)
    function renderizarProdutoCard() {
        const filtrarProduto =
            filtro === 'TODOS' ? produtos : produtos.filter(produto => produto.categoria === filtro)

        return filtrarProduto.map(produto => {
            return <ProdutoCard key={produto.id} id={produto.id} nome={produto.nome} preco={produto.preco} img={produto.img} categoria={produto.categoria} quantidade={0}></ProdutoCard>
        })
    }

    function alterarFiltro(categoria: string) {
        setFiltro(categoria)
    }

    return (
        <>
            <div className="py-10 bg-gray-950 flex justify-center">
                <main className="md:w-4/6 w-full px-5 flex md:flex-row flex-col gap-5">
                    <aside className="bg-gray-900/60 h-min rounded-2xl flex flex-col">
                        <div className="bg-gray-900 px-12 py-6 rounded-t-2xl font-bold">
                            CATEGORIAS
                        </div>
                        <div className="flex flex-col items-center gap-5 py-3 h-min">
                            <FilterSideBar nome={'TODOS'} alterarFiltro={alterarFiltro} filtro={filtro} />
                            <FilterSideBar nome={`VIP's`} alterarFiltro={alterarFiltro} filtro={filtro} />
                            <FilterSideBar nome={'MEDALHAS'} alterarFiltro={alterarFiltro} filtro={filtro} />
                            <FilterSideBar nome={'CASH'} alterarFiltro={alterarFiltro} filtro={filtro} />
                            <FilterSideBar nome={'UNBAN/MUTE'} alterarFiltro={alterarFiltro} filtro={filtro} />
                        </div>
                    </aside>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 flex-1">
                        {renderizarProdutoCard()}
                    </div>
                </main>
            </div>
        </>
    )
}