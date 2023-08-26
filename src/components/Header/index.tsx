import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

import secureLocalStorage from "react-secure-storage";

import "./style.css"
import { useEffect, useState } from "react";


function Header(){

    const [ usuarioLogado, setUsuarioLogado ] = useState<any>()

    useEffect(() => {
        verificarUsuarioLogado()
    }, [])

    function verificarUsuarioLogado() {
        if (secureLocalStorage.getItem("user") ) {
            setUsuarioLogado(secureLocalStorage.getItem("user"))
        }
    }

    function mostrarMenu(){

        let menu:any = document.getElementById("menu_links");
        let sombra: any = document.getElementById("sombra");
        let menu_barras:any = document.getElementById("menu_barras"); 
    
        let body  = document.getElementsByTagName("body")[0];
    
        if (window.getComputedStyle(menu).left != "10px") { 
            menu.style.left = "10px"; 
            sombra.style.right = "-10vw"; 
            menu_barras.setAttribute("aria-expanded", "true"); 
            menu_barras.setAttribute("aria-label", "fechar menu"); 
            body.style.overflow = "hidden"; 
        } else {
            menu.style.left = "-300px"; 
            sombra.style.right = "110vw"; 
            menu_barras.setAttribute("aria-expanded", "false"); 
            menu_barras.setAttribute("aria-label", "abrir menu");
            body.style.overflow = "auto"; 
        }
        menu_barras.classList.toggle("ativo"); 
        }

    return(
        <>
        <div id="sombra"></div>
        <header>
            <div className="container header_conteudo">
                {/* <!-- <a className="menu_barras" href="#"><img onclick="mostrarMenu()" src="../Imagens/Menu de barras.svg" alt=""/></a> --> */}
                {/* <!-- Acessibilidade ARIA
                aria-label = para indicar o que o elemento faz.
                aria-expanded = atributo que salva o status do botão (expandido ou nao - true ou false).
                aria-control = especifica qual elemento esta sendo controlado atraves do Id.
                aria-haspopup = indica que o elemento tem um popup (true ou false).
                --> */}
                <a className="menu_barras" id="menu_barras" aria-label="abrir menu" aria-expanded="false" aria-controls="menu_links" aria-haspopup="true" onClick={mostrarMenu} href="#"><div className="barras"></div></a>
                <img className="header_logo" src={logo} alt=""/>
                <nav>
                    <div id="menu_links" className="menu_links">
                        <Link to ='/'>Home</Link>
                        <Link to ='ListaServicos'>serviços</Link>
                        <Link to ='ListaDevs'>Dev's</Link>
                        
                    </div>
                    <a className="header_icone_login" href="../Login/index.html">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">  
                            <path
                            d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </a>

                    {
                    //Randerização condicional 
                    //condição ? caso true: caso false 
                    usuarioLogado ?
                        <span style={ {color: "white"} }>Olá, { usuarioLogado.user.nome.split(" ") [0] }</span>
                    : 
                        <Link to={"/login"} className="header_botao_login">login</Link>
                    }
                    

                    {/* <a className="header_botao_login" href="../Login/index.html">login</a> */}
                </nav>
            </div>
        </header>
        </>
    )
}
export default Header;