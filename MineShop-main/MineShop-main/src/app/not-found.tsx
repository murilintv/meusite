import Image from "next/image";

export default function notFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h py-10 bg-gray-950">
            <div className="flex flex-col items-center">
                <span className="font-bold text-4xl">404</span>
                <span className="font-bold text-2xl">Página não econtrada.</span>
            </div>
            <div>
                <Image src={'/404.png'} height={10} width={300} alt="error404"></Image>
            </div>
        </div>
    )
}