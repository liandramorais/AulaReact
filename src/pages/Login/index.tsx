//estilização
import api from "../../utils/api";
import secureLocalStorage from "react-secure-storage";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";





function Login() {
    const navigate = useNavigate()

    const [ email, setEmail ] = useState<string>("")
    const [ senha, setSenha ] = useState<string>("")

    function fazerLogin(event: any) {
        event.preventDefault()

        //console.log( email, senha )

        const usuario: object = {
            email: email,
            password: senha
        }

        api.post("login", usuario).then( (response) => {
            console.log(response)

            secureLocalStorage.setItem("user", response.data)
            navigate("/perfil/" + response.data.user.id)

            navigate(0)



        } )

    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form  onSubmit={ fazerLogin } className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={ (event) => setEmail(event.target.value)}
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={ (event) => setSenha(event.target.value)}
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;