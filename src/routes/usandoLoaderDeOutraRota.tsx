import { Route, json } from "react-router-dom";
import Exibir from "../pages/usandoLoaderDeOutraRota/exibir";
import Editar from "../pages/usandoLoaderDeOutraRota/editar";

function dadosLoader() {
    return json({nome: "Marcos", idade: 12} as any, {status:200})
}

const rotas = <Route path="usandoLoaderDeOutraRota" id="loladerRotaPai" loader={dadosLoader}>
    <Route index element={<Exibir />} />
    <Route path="editar" element={<Editar />} />
</Route>

export default rotas