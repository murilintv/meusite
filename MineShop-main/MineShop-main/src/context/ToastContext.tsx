/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { IconRosetteDiscountCheckFilled, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { createContext, useRef, useState } from "react";

interface ToastProps {
    children: any
}

interface ToastContextType {
    ativarToast: (texto: string) => void
}

export const ToastContext = createContext({} as ToastContextType)

export default function ToastProvider(props: ToastProps) {
    const [toast, setToast] = useState(false)
    const tempo = useRef<NodeJS.Timeout | null>(null)
    const [texto, setTexto] = useState("")

    function ativarToast(texto: string) {
        setTexto(texto)
        if (tempo.current) {
            clearTimeout(tempo.current)
        }
        setToast(true)

        tempo.current = setTimeout(() => {
            setToast(false)
        }, 3000);
        return texto
    }

    function limparToast() {
        if (tempo.current) {
            clearTimeout(tempo.current)
            tempo.current = null
        }
        setToast(false)
    }
    return (
        <ToastContext.Provider value={{ativarToast}}>
            {props.children}
            {toast &&
                <div className="z-50 fixed top-5 md:right-3 right-0.5 bg-gray-900 flex items-center gap-5 rounded-md py-2 px-3">
                    <Link href={'/carrinho'} className="flex flex-col">
                        <div className="flex gap-1 font-bold items-center">
                            <IconRosetteDiscountCheckFilled className="text-green-500" />
                            <span>Pronto!</span>
                        </div>
                        <div className="font-bold">
                            <span>{texto}</span>
                        </div>
                    </Link>
                    <div>
                        <button className="hover:text-red-500 flex items-center cursor-pointer transition-all duration-300" onClick={() => limparToast()}><IconX/></button>
                    </div>
                </div>
            }
        </ToastContext.Provider>
    )
}