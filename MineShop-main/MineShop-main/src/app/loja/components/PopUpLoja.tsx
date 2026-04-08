import { IconCircleCheck } from "@tabler/icons-react";


export default function PopUpLoja() {
    return (
        <div className="fixed top-3 right-3 z-50 bg-gray-900 font-bold py-2 px-3 border rounded-md border-gray-600 flex items-center gap-5">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-white"><IconCircleCheck className="text-green-400" size={30}/> Pronto!</div>
                <div className="text-gray-300">Produto adicionado ao carrinho.</div>
            </div>
            <div>
                <button className="px-2 cursor-pointer">X</button>
            </div>
        </div>
    )
}