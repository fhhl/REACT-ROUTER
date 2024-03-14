import { Route } from "react-router"
import Produtos from "../pages/parametrosDeBusca/Produtos"
import Produto from "../components/parametrosDeBusca/Produto"

const rotas = <Route path="parametrosDeBusca" element={<Produtos/>}>
    <Route path="produto" element={<Produto/>}></Route>
</Route>

export default rotas

// /usuarios/:id usar parámetros de rota porque estamos acessando um recurso
// /usuarios?ordenadosPor=nome usar parámetros de busca

// /compras/:id?entregues=true&compradoApos=2020