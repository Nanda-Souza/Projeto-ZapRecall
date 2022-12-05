import { useState } from 'react'
import BotoesCard from "./BotoesCard"

export default function ListaCards({deck, contResp, setContResp}){
    
    
    return (
        <ul className="lista-perguntas">
	        {deck.map((c, index) => (
            <BotoesCard 
            key={index}
            numPerg={c.numero}
            question={c.question}
            answer={c.answer}
            contResp={contResp}
            setContResp={setContResp} 
            
            />
            
            ))}
      </ul>
    )
}

