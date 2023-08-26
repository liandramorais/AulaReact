//rotas
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//hooks
import { useState } from "react";

//estilização
import "./style.css";
import api from "../../utils/api";



function VisualizarServico() {

    const { idServico } = useParams();

    const [ nome , setNome ] = useState<string>("")
    const [ valor , setvalor ] = useState<number>("")
    const [ descricao , setdescricao ] = useState<string>("")
    const [ techs , settechs ] = useState<string[]>([])
    
    useEffect(() =>{
        document.title =  "Perfil de Devs - VSConnect"

        buscarServicoPorid();
    },[])

    function buscarServicoPorid() {
        api.get("users/"+idServico).then((resposta: any) => {
            setNome(resposta.data.nome)
            setvalor("http://localhost:3000/static/" + resposta.data.user_img)
            setdescricao(resposta.data.descricao)
            settechs(resposta.data.techs) 
        }).catch((erro) => {console.log(erro)})
        
    }

    return (
        <main id="main_visualizarservico">
            <div className="container container lista servico">
                <h1>Serviço - {nome} </h1>

                <div className="servico">
                    <div className="topo_servico">
                        <h2> {nome} </h2>
                        <span> {valor} </span>
                    </div>

                    <p> {descricao} </p>

                    <div className="techs">
                        {/* {
                            techs.map((skill:any, index: number) => {
                                return <span key={index}>{skill}</span>
                            })
                        }
                         */}
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;