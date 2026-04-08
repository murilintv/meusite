export default interface ProdutosProps {
    id: number
    nome: string
    preco: string
    img: string
    categoria: string
}

export interface ItemCarrinho extends ProdutosProps {
    quantidade: number
}