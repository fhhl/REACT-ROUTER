import { Route } from "react-router-dom"
import Inicio from "../pages/shared/inicio"
import Sobre from "../pages/shared/sobre"
import ErroDoLoader from "../pages/lidandoComErrosDoLoader/erroDoLoader"

const links = [
    { url: "lidandoComErrosDoLoader", text: "Início" },
    { url: "lidandoComErrosDoLoader/sobre", text: "Sobre" },
]

const rotas = (
    <Route path="lidandoComErrosDoLoader">
        <Route
            index
            element={<Inicio links={links} />}
            errorElement={<ErroDoLoader texto="Não foi possível acessar início" 
            links={links} />}
            loader={() => { throw new Error() }}
        />
        <Route
            path="sobre"
            element={<Sobre links={links} />}
            errorElement={<ErroDoLoader texto="Não foi possível acessar sobre" 
            links={links} />}
            loader={() => { throw new Error() }}
        />
    </Route>
)

export default rotas
