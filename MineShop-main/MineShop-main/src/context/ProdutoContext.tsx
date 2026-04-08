/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createContext} from "react";
import produtos from "@/data/constants/produtos";
import ProdutosProps from "@/data/model/Produtos";

export const ProdutoContext = createContext<ProdutosProps[]>([])

export default function ProdutoProvider(props: any) {
    return (
        <ProdutoContext.Provider value={produtos}>
            {props.children}
        </ProdutoContext.Provider>
    )
}