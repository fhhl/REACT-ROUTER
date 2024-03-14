import { useActionData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir() {

    const { ok, nome, idade }:any = useActionData()
    //console.log(action)

    return (
        <Pagina titulo="Dados inseridos no formulário">
            { ok ? 
                (<p className="text-xl my=10">Dados: nome: {nome}, idade: {idade} anos!</p> ):
                (<p>Dados não gravados!</p>)
            }
        </Pagina>
    )
}

export async function actionFormulario({ request }) {
    const dadosFormulario = await request.formData()
    const dadosParaSalvar = {
        nome: dadosFormulario.get("nome"),
        idade: dadosFormulario.get("idade")
    }
    const resposta = salvar(dadosParaSalvar)
    return resposta
}

function salvar(dados) {
    const dadosFinais = {nome: !!dados.nome?dados.nome:"desconhecido", idade:dados.idade}
    // salvamos no banco de dados aqui
    return {ok: true, ...dadosFinais}
}
