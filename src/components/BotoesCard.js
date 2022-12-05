import styled from "styled-components"
import { useState } from 'react'


export default function BotoesCard({numPerg, question, answer}){
    const [perguntaVirada, setPerguntaVirada] = useState(true)
    const [perguntaResp, setPerguntaResp] = useState(false)
    const [statusResp, setstatusResp] = useState("")
    const [flashCardPerg, setFlashcardPerg] = useState(false)
    const [flashCardResp, setFlashcardResp] = useState(false)

    function perguntaFlashCard(){
        setFlashcardPerg(true);
        setPerguntaVirada(false);
    }

    function respostaFlashCard(){
        setFlashcardPerg(false);
        setFlashcardResp(true);
    }

    function perguntaRespondida(resp){
        setstatusResp(resp)
        setPerguntaResp(true);
        setFlashcardPerg(false);
        setFlashcardResp(false);
    }

    

    return (
    <>
    {perguntaVirada && (
        <PerguntaFechada className="">
            <TextoPergunta className="pergunta">Pergunta {numPerg}</TextoPergunta>
            <img src="assets/seta_play.png" onClick={perguntaFlashCard}/>
        </PerguntaFechada>
        )
    }
    
    {flashCardPerg && (
        <PerguntaAberta>
            {question}
            <img src="assets/seta_virar.png" onClick={respostaFlashCard}/>
        </PerguntaAberta>
        )
    }
    
    {flashCardResp && (
        <PerguntaAberta>
            {answer}
            <ContainerBotoes>
                <Button className="vermelho" onClick={() => perguntaRespondida("erro")} >Não lembrei</Button> 
                <Button className="amarelo" onClick={() => perguntaRespondida("quase")} >Quase não lembrei</Button>
                <Button className="verde" onClick={() => perguntaRespondida("certo")} >Zap!</Button>
        </ContainerBotoes>
        </PerguntaAberta>
        )
    }
    
    {perguntaResp && (
        <PerguntaFechada>
            <TextoPergunta className={statusResp}>Pergunta {numPerg}</TextoPergunta>
            <img src={"assets/icone_" + statusResp + ".png"}/>
        </PerguntaFechada>
        )
    }

    </>   
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
`
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