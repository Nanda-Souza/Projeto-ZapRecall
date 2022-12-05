import styled from "styled-components"

export default function BotoesCard(){
    return (
        <ContainerBotoes>
            <Button className="vermelho">Não lembrei</Button> 
            <Button className="amarelo">Quase não lembrei</Button>
            <Button className="verde">Zap!</Button>
        </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;    
`  

const Button = styled.button`
    width: 85px;
    height: 40px;
    margin-left: 7px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &.vermelho {
        color: #FFFFFF;
        background: #FF3030;
        border-radius: 5px;
        border: 1px solid #FF3030;
      }
    &.amarelo {
        color: #FFFFFF;
        background: #FF922E;
        border-radius: 5px;
        border: 1px solid #FF922E;
      }
    &.verde {
        color: #FFFFFF;
        background: #2FBE34;
        border-radius: 5px;
        border: 1px solid #2FBE34;
      }
`
  
  
  