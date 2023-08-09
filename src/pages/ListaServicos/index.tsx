import "./style.css"
import Logo from "../../assets/img/logo.svg"
import logoFace from "../../assets/img/facebook.svg"
import logoIG from "../../assets/img/instagram.svg"
import logoLinkedin from "../../assets/img/linkedin.svg"

function ListaServicos() {


    function mostrarMenu() {
    
        let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
        let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
        let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID
    
        let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    
        if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
            sombra.style.right = "-10vw"; // Move a sombra para a direita
            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    
    }


    return (
    <>
        <div id="sombra" />
        <header>
            <div className="container header_conteudo">
            {/* <a class="menu_barras" href="#"><img onclick="mostrarMenu()" src="../Imagens/Menu de barras.svg" alt=""></a> */}
            {/* Acessibilidade ARIA
            aria-label = para indicar o que o elemento faz.
            aria-expanded = atributo que salva o status do botão (expandido ou nao - true ou false).
            aria-control = especifica qual elemento esta sendo controlado atraves do Id.
            aria-haspopup = indica que o elemento tem um popup (true ou false).
            */}
            <a
                className="menu_barras"
                id="menu_barras"
                aria-label="abrir menu"
                aria-expanded="false"
                aria-controls="menu_links"
                aria-haspopup="true"
                onClick={mostrarMenu}
                href="#"
            >
                <div className="barras" />
            </a>
            <img className="header_logo" src={Logo} alt="" />
            <nav>
                <div id="menu_links" className="menu_links">
                <a href="../Home/index.html">home</a>
                <a href="#">serviços</a>
                <a href="#">cadastro</a>
                </div>
                <a className="header_icone_login" href="../Login/index.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                </a>
                <a className="header_botao_login" href="../Login/index.html">
                login
                </a>
            </nav>
            </div>
        </header>
        <main>
            <div className="container container_lista_servicos">
            <div className="lista_servicos_conteudo">
                <h1>Lista de Serviços</h1>
                <hr />
                <form method="post">
                <div className="wrapper_form">
                    <label htmlFor="busca">Procurar serviços</label>
                    <div className="campo-label">
                    <input
                        type="search"
                        name="campo-busca"
                        id="busca"
                        placeholder="Buscar serviços por tecnologias..."
                    />
                    <button type="submit">Buscar</button>
                    </div>
                </div>
                </form>
                <div className="wrapper_lista">
                <ul>
                    <li>
                    <div className="servico">
                        <div className="topo_servico">
                        <h3>
                            Desenvolvimento de site institucional - Gateway de Pagamento
                            / Fintech
                        </h3>
                        <span>R$ 1300,00</span>
                        </div>
                        <p>
                        Desenvolver um site responsivo que seja utilizado como uma
                        plataforma de apresentação do nosso gateway de pagamento. O
                        objetivo principal deste projeto é criar um site atraente e
                        informativo, que demonstre as funcionalidades e benefícios do
                        nosso gateway de pagamento para potenciais clientes.
                        </p>
                        <div className="techs">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="servico">
                        <div className="topo_servico">
                        <h3>Bot telegram Pagamento</h3>
                        <span>R$ 2400,00</span>
                        </div>
                        <p>
                        Preciso fazer um código em python para um bot do telegram. O
                        bot será para solicitação de pagamento.
                        </p>
                        <div className="techs">
                        <span>Python</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="servico">
                        <div className="topo_servico">
                        <h3>Caixa Rápido</h3>
                        <span>R$ 1200,00</span>
                        </div>
                        <p>
                        Preciso fazer um software que permita ao usuário fazer o
                        upload de seu extrato bancário em formato( ofx). Dentro do
                        software o mesmo poderá categorizar todas as suas receitas e
                        despesas, tendo categorias sugeridas pelo software e
                        permitindo também personalizações. Após o lançamento de vários
                        extratos o software irá entender que são lançamentos parecidos
                        e fará a categorização de maneira automática, cabendo ao
                        usuário somente categorizar as receitas e despesas que não se
                        repetem. Após a categorização o software irá emitir gráficos e
                        relatórios baseados na categorização das contas.
                        </p>
                        <div className="techs">
                        <span>Python</span>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </main>
        <footer>
            <div className="container rodape">
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
                <img src={Logo} alt="" />
                <div className="rodape_conteudo_contatos">
                <h2>Contatos</h2>
                <div>
                    <a href="#">
                    <img src={logoFace} alt="" />
                    </a>
                    <a href="#">
                    <img src={logoIG} alt="" />
                    </a>
                    <a href="#">
                    <img src={logoLinkedin} alt="" />
                    </a>
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
    export default ListaServicos;
