import { Route } from "react-router-dom"
import Inicio from "../pages/shared/inicio"
import Sobre from "../pages/shared/sobre"
import Erro from "../pages/entendendoUseRouteError/erroDeRota"

const links = [
    { url: "/EntendendoUseRouteError", text: "Início" },
    { url: "/EntendendoUseRouteError/sobre", text: "Sobre" },
]

const rotas = (
    <Route path="EntendendoUseRouteError"
        errorElement={<Erro texto="Algo de errado, não está certo" links={links} />}>
            <Route
                index
                element={<Inicio links={links} />}
                loader={() => { throw new Error("Houve um erro em início") }}
            />
            <Route
                path="sobre"
                element={<Sobre links={links} />}
                loader={() => { throw new Response("houv um erro em sobre") }}
            />
        </Route>
)

export default rotas
