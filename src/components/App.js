
import styled from "styled-components"
import Logo from './Logo';
import Contador from './Contador';
import ListaCards from './ListaCards';


export default function App() {

  return (
    <ScreenContainer>

      <Logo />
      <ListaCards />
      <Contador />
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