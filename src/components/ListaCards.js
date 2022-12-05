import BotoesCard from "./BotoesCard"
import styled from "styled-components"

export default function ListaCards(){
    return (
        <ul class="lista-perguntas">
	      <li class="pergunta-aberta">O que é JSX? <img src="assets/seta_virar.png"/></li>
	      <li class="pergunta-aberta">JSX é uma sintaxe para escrever HTML dentro do JS  
            <BotoesCard />
            </li>
	      <li class="pergunta-fechada">
          <p class="pergunta">Pergunta 3</p>
        <img src="assets/seta_play.png"/>
        </li>
        <li class="pergunta-fechada">
          <p class="certo">Pergunta 4</p>
          <img src="assets/icone_certo.png"/>
          </li>
      </ul>
    )
}