import { useRouteError } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function ErroDeRota(props) {
    const erro:any = useRouteError()
    // erro.data acessa a mensagem se for lançado um response
    // se for para pegar o retorno de um throu error usar, erro.message
    const mensagem = erro.message ? erro.message : erro.data
    return <Pagina titulo="Houve um problema" descricao={mensagem} links={props.links}></Pagina>
}