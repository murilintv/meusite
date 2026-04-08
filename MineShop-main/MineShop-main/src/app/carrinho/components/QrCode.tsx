import { IconCopy, IconX } from '@tabler/icons-react'
import { QRCodeSVG } from 'qrcode.react'
import { payload } from "pix-payload"
import { useContext } from 'react'
import { ToastContext } from '@/context/ToastContext'

interface QrCodeProps {
    finalizarCompra: () => void
    calcularValorPix: () => number
    calcularValor: () => string
}

export default function QrCode(props: QrCodeProps) {
    const valor = props.calcularValorPix().toString()
    const data = {
        key: process.env.NEXT_PUBLIC_PIX_KEY,
        name: process.env.NEXT_PUBLIC_PIX_NAME,
        city: process.env.NEXT_PUBLIC_PIX_CITY,
        amount: valor,
        transactionId: "MINESHOP"
    }
    const myPayload = payload(data)
    const {ativarToast} = useContext(ToastContext)
    return (
        <div className="fixed inset-0 bg-black/60 flex min-h-screen justify-center z-50 overflow-y-auto">
            <div className="bg-gray-900 md:py-4 w-full h-dvh md:h-min md:w-3/6 md:rounded-2xl md:overflow-y-auto overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex py-3 justify-end px-5">
                        <button className="text-lg md:px-3 hover:text-red-500 transition-all duration-300 cursor-pointer" onClick={() => props.finalizarCompra()}><IconX size={30}/></button>
                    </div>
                    <div className="flex items-center md:text-3xl text-2xl font-black flex-col gap-3">
                        <span className='text-center'>VALOR DA DOAÇÃO:</span>
                        <span className='text-green-500'>{props.calcularValor()}</span>
                    </div>
                    <div className="flex flex-col items-center gap-5 mt-5">
                        <QRCodeSVG value={myPayload} size={320} includeMargin bgColor="#ffffff" fgColor="#000000"/>
                        <span className='text-sm'>Escaneie com o app do seu banco</span>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => {
                            ativarToast("Copiado para área de transferência")
                            navigator.clipboard.writeText(myPayload) 
                        }}
                            className='flex bg-green-700 px-2 justify-center gap-3 items-center rounded-4xl py-2 mt-5 cursor-pointer transition-all duration-900 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl'>
                            <IconCopy size={30} stroke={3} />
                            <span className='md:text-2xl text-base font-bold'>Copiar código PIX</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 py-8">
                        <span className='font-black text-red-600 text-2xl'>ATENÇÃO!</span>
                        <span className='font-bold md:text-base text-sm px-5 text-center'>Este é um projeto pessoal e demonstrativo.
                            Não se trata de uma loja real e não há entrega de itens ou benefícios. Não há comprovante de confirmação ou animação de doação concluída.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}