import { useState } from 'react'
import BotoesCard from "./BotoesCard"

export default function ListaCards({deck}){
    
    
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

