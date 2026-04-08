import CardBlog from "./components/CardBlog"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function PageBlog(props: any) {
    const params = await props.params
    return (
        <div className="min-h py-10 bg-gray-950 flex justify-center">
            <main className="md:w-4/6 w-full px-5 min-h flex gap-5 justify-center">
                <CardBlog key={params.id} id={Number(params.id)}></CardBlog>
            </main>
        </div>
    )
}