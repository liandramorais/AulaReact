import { useEffect, useState } from "react";
import CardServico from "../../components/CardServicos";
import "./style.css";

import api from "../../utils/api";

export default function ListaServicos() {

const [servs, setServs] = useState<any[]>([]);

const [skillDigitada, setSkillDigitada] = useState<string>("");

const [listaServsFiltrados, setListaServsFiltrados] = useState<any[]>(servs);

useEffect(() => {
document.title = "Lista de Serviços - VSConnect";

listarServicos();
}, []);

function buscarPorSkill(event: any) {
event.preventDefault();

const servsFiltrados = servs.filter((serv: any) =>
  serv.techs.includes(skillDigitada.toLocaleUpperCase())
);

if (servsFiltrados.length === 0) {
  alert("Nenhum serviço com essa skill!");
} else {
  setListaServsFiltrados(servsFiltrados);
}
}

function retornoServsGeral(event: any) {
if (event.target.value === "") {
  setListaServsFiltrados(servs);
}
setSkillDigitada(event.target.value);
}

function listarServicos() {
api.get("servicos").then((response: any) => {
  console.log(response.data);
  setServs(response.data);
});
}

return (
<main id="lista-servicos">
  <div className="container container_lista_servicos">
    <div className="lista_servicos_conteudo">
      <h1>Lista de Serviços</h1>
      <hr />
      <form method="post" onSubmit={buscarPorSkill}>
        <div className="wrapper_form">
          <label htmlFor="busca">Procurar serviços</label>
          <div className="campo-label">
            <input
              type="search"
              name="campo-busca"
              id="busca"
              placeholder="Buscar serviços por tecnologias..."
              onChange={retornoServsGeral}
            />
            <button type="submit">Buscar</button>
          </div>
        </div>
      </form>
      <div className="wrapper_lista">
        <ul>
            {
            listaServsFiltrados.length===0 ? 
                servs.map((servs:any, index:number) => {
                    return <li key={index}>
                        <CardServico
                        id={servs.id}
                        titulo={servs.nome}
                        valor={servs.valor}
                        descricao={servs.descricao}
                        techs={servs.techs}
                        />
                </li>  
            }) :  listaServsFiltrados.map((servs:any, index:number) => {
            return <li key={index}>
                <CardServico
                  id={servs.id}
                  titulo={servs.nome}
                  valor={servs.valor}
                  descricao={servs.descricao}
                  techs={servs.techs}
                />
            </li>
            })
        }
        </ul>
      </div>
    </div>
  </div>
</main>
);
}
