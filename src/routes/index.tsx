import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import Layout from '../components/template/Layout';
import rotasTiposDeLinks from "./tiposDeLinks"
import rotasNavegacaoComNavLink from "./navegacaoComNavLink"
import rotasPagina404 from "./pagina404"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        {rotasTiposDeLinks}
        {rotasNavegacaoComNavLink}
        {rotasPagina404}
    </Route>
))

export default router