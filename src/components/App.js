
import { useState } from 'react'
import styled from "styled-components"
import Logo from './Logo';
import Contador from './Contador';
import ListaCards from './ListaCards';

const cards = [
  { numero: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { numero: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" }   
  ]


export default function App() {
  const [deck, setDeck] = useState(cards)  
  const [contCards, setCont] = useState(cards.length)


  return (
    <ScreenContainer>
      <Logo />
      <ListaCards deck={deck}/>
      <Contador contCards={contCards}/>
    </ScreenContainer>

  );
}


const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`