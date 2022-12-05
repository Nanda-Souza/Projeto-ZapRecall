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
            answer={c.answer}
            
            />
            
            ))}
      </ul>
    )
}

