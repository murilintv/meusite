import { IconStarFilled } from "@tabler/icons-react"

interface FilterSideBarProps {
    nome: string
    alterarFiltro: (categoria: string) => void
    filtro: string
}

export default function FilterSideBar(props: FilterSideBarProps) {
    return (
        <button className={`${props.nome == props.filtro ? `bg-orange-400 cursor-pointer rounded-md px-3 w-6/7 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl` : `bg-gray-900 cursor-pointer rounded-md px-3 w-6/7 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}`}>
            <div className="flex gap-2 py-3" onClick={() => props.alterarFiltro(props.nome)}>
                <IconStarFilled />
                {props.nome}
            </div>
        </button>
    )
}