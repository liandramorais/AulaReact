//estilização
import "./style.css";

//Hook
import { useState } from "react";

import api from "../../utils/api";


function CadastroUsuario() {

    //state techs com as tecnologias definidas
    const [techs, setTechs] = useState<string[]>(
        [
            "HTML",
            "CSS",
            "JAVASCRIPT"
        ]
    );

    // para pegar valores

const [nome, setNome ] = useState<string>('')
const [email, setEmail ] = useState<string>('')
const [senha, setSenha ] = useState<string>('')
const [foto, setFoto ] = useState<any>('')
const [cep, setCep ] = useState<string>('')
const [logradouro, setLogradouro ] = useState<string>('')
const [numero, setNumero ] = useState<string>('')
const [bairro, setBairro ] = useState<string>('')
const [cidade, setCidade ] = useState<string>('')
const [uf, setUf ] = useState<string>('')

    const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([]); // Array (lista) para armazenar as skills selecionadas

    const [select, setSelect] = useState<string>(""); // state que contém a opção de skill selecionada pelo usuário

    // pega tudo que acontece dentro de algo ex: input

    function verificarCampoUpload( event: any) {
        setFoto(event.target.files[0])
    }

    function cadastrarUsuario(event: any) {
        event.preventDefault();

        const formdata = new FormData()

        formdata.append("nome" , nome);
        formdata.append("email" , email);
        formdata.append("password" , senha);
        formdata.append("user_img" , foto);
        formdata.append("cep" , cep);
        formdata.append("logradouro" , logradouro);
        formdata.append("numero" , numero);
        formdata.append("bairro" , bairro);
        formdata.append("cidade" , cidade);
        formdata.append("uf" , uf);

        formdata.append("hardSkills" , JSON.stringify(skillsSelecionadas))

        api.post("users" , formdata).then( (response) => {
            console.log(response)
            alert("Usuário criado com sucesso!")
            //Navegação para login
        } ).catch ((error) => {
            console.log(error)
        })

    }

    //Funçao para colocar mascara no input de CEP
    function mascaraCep(event: any) {
        let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input

        if (!valorDigitado) return ""; // Se o valor for vazio, retorna uma string vazia

        valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
        valorDigitado = valorDigitado.replace(/(\d{5})(\d)/, '$1-$2'); // Aplica a máscara de CEP (formato XXXXX-XXX) ao valor

        event.target.value = valorDigitado; // Atualiza o valor do input com o valor mascarado
    }

    function adicionarSkill() {
        //verifica o valor do state select
        if (select === "") {
            //se for igual a string vazia, exibe uma mensagem
            alert("Selecione uma skill para adicionar");
        } else {
            //se não, verifica se no state skillsSelecionadas existe a skill que o usuario selecionou
            if (skillsSelecionadas.includes(select)) {
                //se existir, exibe uma mensagem
                alert("Essa skill já foi selecionada");
            }
            else {
                //se não existir, a variavel novaListaSkillsSelecionadas cria uma cópia do valor do state skillsSelecionadas
                let novaListaSkillsSelecionadas = [...skillsSelecionadas];

                //E adiciona a skill, que foi selecionada pelo usuário
                novaListaSkillsSelecionadas.push(select);

                //Atualiza o valor do state skillsSelecionadas
                setSkillsSelecionadas(novaListaSkillsSelecionadas);
            }
        }
    }

    function excluirSkill(skill: string) {

        //A variavel novaListaSkillsSelecionadas armazena skills diferente da skill que o usuário clicou para ser excluida.
        const novaListaSkillsSelecionadas = skillsSelecionadas.filter(item => item !== skill);

        //Atualiza o valor do state skillsSelecionadas, com o valor da variavel novaListaSkillsSelecionadas 
        setSkillsSelecionadas(novaListaSkillsSelecionadas);
    };

    return (
        <main className="main_cadastro">
            <div className="container container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro</h1>
                    <hr />
                    <form onSubmit={ cadastrarUsuario } className="cad_formulario" method="POST">
                        <div className="cad_box_input">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                onChange={ (event) => { setNome(event.target.value) } } // pega o valor digitado e coloca como um valor
                                placeholder="Digite aqui seu nome:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={ (event) => { setEmail(event.target.value) } }
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={ (event) => { setSenha(event.target.value) } }
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="foto">Foto:</label>
                            {/* Passar primeiro como exemplo */}
                            <input
                                type="file"
                                id="foto"
                                onChange={ verificarCampoUpload } // vai atualizar quando alterar valor do input
                                required
                            />
                        </div>

                        <span>Endereço:</span>
                        <hr />

                        <div className="cad_box_input">
                            <label htmlFor="cep">Cep:</label>
                            <input
                                type="text"
                                id="cep"
                                maxLength={9}
                                onKeyUp={mascaraCep}
                                onChange={ (event) => { setCep(event.target.value) } }
                                placeholder="Digite aqui seu Cep:"
                                required
                            />
                        </div>

                        <div className="cad_box_input">
                            <label htmlFor="logradouro">Logradouro:</label>
                            <input
                                type="text"
                                id="logradouro"
                                onChange={ (event) => { setLogradouro(event.target.value) } }
                                placeholder="Digite aqui seu Logradouro:"
                                required
                            />
                        </div>

                        <div className="cad_linha1_input">
                            <div className="cad_box_input2">
                                <label htmlFor="numero">Numero:</label>
                                <input
                                    type="text"
                                    id="numero"
                                    onChange={ (event) => { setNumero(event.target.value) } }
                                    placeholder="Digite o Nº:"
                                    required
                                />
                            </div>

                            <div className="cad_box_input2">
                                <label htmlFor="bairro">Bairro:</label>
                                <input
                                    type="text"
                                    id="bairro"
                                    onChange={ (event) => { setBairro(event.target.value) } }
                                    placeholder="Digite aqui seu Bairro:"
                                    required
                                />
                            </div>
                        </div>

                        <div className="cad_linha2_input">
                            <div className="cad_box_input2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    onChange={ (event) => { setCidade(event.target.value) } }
                                    placeholder="Digite aqui sua Cidade:"
                                    required
                                />
                            </div>

                            <div className="cad_box_input2">
                                <label className="cad_uf" htmlFor="uf">UF:</label>
                                <input
                                    type="text"
                                    id="uf"
                                    maxLength={2}
                                    onChange={ (event) => { setUf(event.target.value) } }
                                    placeholder="Digite a UF:"
                                    required
                                />
                            </div>
                        </div>

                        <div className="cad_linha_checkbox">
                            <span>Cliente</span>
                            <div className="cad_container_checkbox">
                                <input
                                    className="cad_checkbox"
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                />
                                <label className="cad_label" htmlFor="checkbox"></label>
                                <div className="cad_box_checkbox"></div>
                                <div className="cad_hard_skill">
                                    <span>Hard Skills</span>
                                    <hr />
                                    <div className="cad_box_skills">
                                        <span>Selecione uma Skill para adicionar</span>
                                        <div className="cad_linha_select">
                                            <select
                                                name=""
                                                id="cad_select_skill"
                                                onChange={(e) => setSelect(e.target.value)}
                                            >
                                                <option selected disabled value="">Selecione</option>
                                                {
                                                    techs.map((tech: any, index: number) => {
                                                        return <option key={index} value={tech}>{tech}</option>
                                                    })
                                                }
                                            </select>
                                            <button
                                                type="button"
                                                id="cad_btn_inserir"
                                                onClick={adicionarSkill}>
                                                Inserir
                                            </button>
                                        </div>
                                        <div id="cad_lista_skills">
                                            {
                                                skillsSelecionadas.length > 0 ? skillsSelecionadas.map((el: any, index: number) => {
                                                    return <div key={index} className="cad_item_skill">
                                                        <span className="cad_span_skill">{el}</span>
                                                        <button
                                                            type="button"
                                                            id="cad_item_excluir"
                                                            onClick={() => excluirSkill(el)}
                                                            className="cad_item_excluir">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                height="1em"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                }) : <span className="cad_span_skill">Nenhuma skill cadastrada</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span>Desenvolvedor</span>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroUsuario;


    


