import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css';
import ListaServicos from './pages/ListaServicos';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ListaDevs from './pages/ListaDevs';
import PerfilUsuario from './pages/PerfilUsuario';
import VisualizarServico from './pages/VisualizarServico';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='ListaServicos' element={<ListaServicos/>} />
        <Route path='ListaDevs' element={<ListaDevs/>} />
        <Route path='Perfil/:idUsuario' element= {<PerfilUsuario/>} />
        <Route path='Visualizar/:idServico' element={<VisualizarServico/>} />
        <Route path='cadastrousuario' element={ <CadastroUsuario />} />
        <Route path='login' element={ <Login />} />

      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
)
