import { useLoaderData } from "react-router-dom"
import Pagina from "../../components/template/Pagina"

export default function Consulta(){
    const info:any = useLoaderData()
    console.log(info)
    return <Pagina titulo="Resultado da consulta">
       <strong>{info.title}</strong>
    </Pagina>
}

export async function loaderConsulta(){
    // Trazendo fixo o registro nro 1
    const dados = await fetch(`https://fakestoreapi.com/products/1`)
    // const resp = new Response("olá da response", {status: 200}) // Exemplo de response
    // console.log(await dados.json())
    // throw new Response("Houve um problema") // Exemplo de response de erro
    return dados
}