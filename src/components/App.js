
import { useState } from 'react'
import styled from "styled-components"
import Logo from './Logo';
import Contador from './Contador';
import ListaCards from './ListaCards';

const cards = [
  { numero: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { numero: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { numero: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { numero: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { numero: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { numero: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { numero: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { numero: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }   
  ]


export default function App() {
  const [deck] = useState(cards)  
  const [contCards] = useState(cards.length)
  const [contResp, setContResp] = useState(0)


  return (
    <ScreenContainer>
      <Logo />
      <ListaCards contResp={contResp} setContResp={setContResp} deck={deck}/>
      <Contador contResp={contResp} contCards={contCards}/>
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