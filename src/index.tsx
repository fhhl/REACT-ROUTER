import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, 
        createBrowserRouter,
        createRoutesFromElements,
        Route} from "react-router-dom"
import Inicio from './pages/shared/inicio';
import Sobre from './pages/shared/sobre';
import Contato from './pages/shared/contato';
import Layout from './components/template/Layout';
import MenuTiposDeLinks from './components/tiposDeLinks/Menu';
import MenuNavLink from './components/navegacaoComNavLink/Menu';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
      <Route path='tiposDeLinks'>
        <Route index element={<Inicio menu={<MenuTiposDeLinks/>}/>}/>
        <Route path="sobre" element={<Sobre menu={<MenuTiposDeLinks/>}/>}/>
        <Route path="contato" element={<Contato menu={<MenuTiposDeLinks/>}/>}/>
      </Route>
      <Route path='navegacaoComNavLink'>
        <Route index element={<Inicio menu={<MenuNavLink/>}/>}/>
        <Route path="sobre" element={<Sobre menu={<MenuNavLink/>}/>}/>
        <Route path="contato" element={<Contato menu={<MenuNavLink/>}/>}/>
      </Route>
  </Route>  
))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
