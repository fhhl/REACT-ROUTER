import { useEffect, useState } from "react";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { useFetcher } from "react-router-dom";

export default function Formulario() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const fetcher = useFetcher()
    const { data, state } = fetcher
    // console.log(fetcher)

    useEffect(() => {
        // console.log(data)
        if(state==="loading" && data) {
            window.alert(`${data.nome} tem ${data.idade} anos`)
        }
    }, [data, state])

    return (
        <Pagina titulo="Formulario - Entendendo useFecher">
            <fetcher.Form method="post" action="/entendendoUseFetcher/Exibir"
                className="flex flex-col justify-center text-xl text-center">
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade} />
            </fetcher.Form>
        </Pagina>
    )
}