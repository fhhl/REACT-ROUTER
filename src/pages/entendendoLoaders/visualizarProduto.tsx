import { Link, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function VisualizarProduto() {

    const {title, description, price} : any = useLoaderData()

    return (
        <Pagina titulo={title}>
            <p className="w-full m-2 text-center overflow-w-auto max-h-48">{description}</p>
            <p className="text-bolder text-center m-2">R${price}</p>
            <button className={`
                background-zink-700 text-white p-2 w-full
                rounded-md hover:bg-orange-500
            `}>
                <Link to="..">Voltar</Link>
            </button>
        </Pagina>
    )

}

export async function pegaProduto(props){
    const codigo = props.params.id
//    console.log(codigo.toString)
    return await fetch(`https://fakestoreapi.com/products/${codigo}`)
//    const dados = await fetch(`https://fakestoreapi.com/products/${codigo}`)
//    
// não precisa usar a conversão porque já retorna pronto!!    
//    const dadosJSON = await dados.json()
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//    console.log(dados)
//    return dados

// exemplo do retorno json

    // {
    //     "id": 7,
    //     "title": "White Gold Plated Princess",
    //     "price": 9.99,
    //     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    //     "category": "jewelery",
    //     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    //     "rating": {
    //         "rate": 3,
    //         "count": 400
    //     }
    // }

}