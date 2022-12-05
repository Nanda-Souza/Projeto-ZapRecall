import { useState } from 'react'
import BotoesCard from "./BotoesCard"
import styled from "styled-components"

export default function ListaCards({}){
const [deck, setDeck] = useState([
        { numero: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { numero: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" }   
    ])      
    
    return (
        <ul className="lista-perguntas">
	        {deck.map((c, index) => (
            <BotoesCard 
            key={index}
            numPerg={c.numero}
            question={c.question}
            
            />
            
            ))}
      </ul>
    )
}

//className={`palavra-chave ${(palavraChave.length === 0) ? "esconder" : ""} ${ganhou ? "ganhou" : ""} ${perdeu ? "perdeu" : ""}`}>


const TextoPergunta = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    &.pergunta {
        color: #333333;
    }        
    &.certo {
        color: #2FBE34;
        text-decoration: line-through;
    }
    &.erro {
        color: #FF3030;
        text-decoration: line-through;
    }
    &.quase {
        color: #FF922E;
        text-decoration: line-through;
    }
`

const PerguntaFechada = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.esconder {
        display:none
    }    
`

const PerguntaAberta = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;        
    }
  
`

  