import { Link, useParams } from "react-router-dom";

export default function Produto() {
    const params = useParams()
    console.log(params)

    const { nome, preco }  = params

    return (
        <div className="rouded-md p-7">
            <Link to=".."
                className={`bg-zinc-700 text-white text-center
                        p-2 m-2 block roud w-full
                        hover:bg-orange-500`}>Voltar</Link>
            <span className="text-2xl">{nome} custa {preco}</span>
        </div>
    )
}