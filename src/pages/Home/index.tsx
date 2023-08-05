import "./style.css"

import Logo from "../../assets/img/logo.svg"
import imgClientes from "../../assets/img/clientes.png"
import imgMaos from "../../assets/img/maos_dev.png"
import imgAlfinete from "../../assets/img/alfinete.png"
import imgDev from "../../assets/img/dev.png"
import logoFace from "../../assets/img/facebook.svg"
import logoIG from "../../assets/img/instagram.svg"
import logoLinkedin from "../assets/img/linkedin.svg"

function Home(){
// Paranaue de typescript

    return (
        // Paranaue de HTML
        <>
        <div id="sombra"></div>
    <header>
        <div className="container header_conteudo">
            {/* <!-- <a className="menu_barras" href="#"><img onclick="mostrarMenu()" src="../Imagens/Menu de barras.svg" alt=""></a> -->
            <!-- Acessibilidade ARIA
            aria-label = para indicar o que o elemento faz.
            aria-expanded = atributo que salva o status do botão (expandido ou nao - true ou false).
            aria-control = especifica qual elemento esta sendo controlado atraves do Id.
            aria-haspopup = indica que o elemento tem um popup (true ou false).
            --> */}
            <a className="menu_barras" id="menu_barras" aria-label="abrir menu" aria-expanded="false" aria-controls="menu_links" aria-haspopup="true" /* onclick="mostrarMenu() " */  href="#"><div className="barras"></div></a>
            <img className="header_logo" src={Logo} alt=""/>
            <nav>
                <div id="menu_links" className="menu_links">
                    <a href="../Home/index.html">home</a>
                    <a href="#">serviços</a>
                    <a href="../CadastroDev/index.html">cadastro</a>
                </div>
                <a className="header_icone_login" href="../Login/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </a>
                <a className="header_botao_login" href="../Login/index.html">login</a>
            </nav>
        </div>
    </header>
    <main id="main">
        <h1>página inicial VSconnect</h1>
        <section className="banner">
            <div className="banner_conteudo">
                <span className="banner_slogan_l1">VSConnect</span>
                <p className="banner_slogan_l2">Conectando os melhores desenvolvedores independentes às mais diversas
                    oportunidades.</p>
                <p className="banner_slogan_l3">Conecte-se e comece a desvendar esse mundo!</p>
                <div className="banner_botoes">
                    <a className="botao banner_botao_dev" href="#">desenvolvedor</a>
                    <a className="botao banner_botao_cli" href="#">cliente</a>
                </div>
            </div>
        </section>
        <section className="container para_clientes">
            <div className="span_cliente">
                <p>Desde 2015 unindo propósitos.<br/>Uma nova forma de conectar pessoas.</p>
            </div>
            <div className="clientes_conteudo">
                <img src={imgClientes} alt=""/>
                <div className="clientes_texto">
                    <h2>para clientes</h2>
                    <ul>
                        <li>cadastrar serviços</li>
                        <li>procurar por desenvolvedores</li>
                    </ul>
                    <div>
                        <a className="botao clientes_botao_cli" href="#">criar conta</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="conexao"></div>
        <section className="container para_devs">
            <div className="devs_texto">
                <h2>para desenvolvedores</h2>
                <ul>
                    <li>encontrar serviços</li>
                    <li>divulgar suas hardskills</li>
                </ul>
                <div>
                    <a className="botao clientes_botao_devs" href="#">criar conta</a>
                </div>
            </div>
            <img src={imgMaos} alt=""/>
        </section>
        <section className="container servicos">
            <h2>serviços</h2>
            <div className="servicos_cards">
                <div className="card card1">
                    <img src="../img/alfinete.png" alt=""/>
                    <h3>Aplicativo para PetShop</h3>
                    <p>Possuo um Petshop e gostaria de um aplicativo para que meus clientes pudessem agendar serviços
                        como: banho e tosa, taxi dog, hotelzinho e etc.</p>
                    <p>Proposta: A Combinar</p>
                </div>
                <div className="card card2">
                    <img src={imgAlfinete} alt=""/>
                    <h3>Site para Pizzaria</h3>
                    <p>Preciso de um site para divulgar o sabores das pizzas, o endereço, os telefones de contato,
                        nossas redes sociais.</p>
                    <p>Proposta: R$750,00</p>
                </div>
            </div>
            <a href="#">Ver mais serviços</a>
        </section>
    </main>
    <footer>
        <div className="container rodape">
            <div className="span_dicas">
                <img src={imgDev} alt=""/>
                <div className="span_dicas_texto">
                    <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                        recomendações para saber mais.</p>
                    <a className="botao botao_dicas" href="#">mais dicas</a>
                </div>
            </div>
            <div className="rodape_conteudo">
                <div className="rodape_conteudo_paginas">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Listar Serviços</li>
                        <li>Cadastrar Cliente</li>
                        <li>Cadastrar Desenvolvedor</li>
                    </ul>
                </div>
                <img src={Logo} alt=""/>
                <div className="rodape_conteudo_contatos">
                    <h2>Contatos</h2>
                    <div>
                        <a href="#"><img src={logoFace} alt=""/></a>
                        <a href="#"><img src={logoIG} alt=""/></a>
                        <a href="#"><img src={logoLinkedin} alt=""/></a>
                    </div>
                    <a href="mailto:">contato@vsconnect.com</a>
                </div>
            </div>
            <p>todos os direitos reservados ©.</p>
        </div>
    </footer>
        </>
    )
}

export default Home