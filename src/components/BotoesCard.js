import styled from "styled-components"

export default function BotoesCard(){
    return (
        <div className="container-botoes">
            <button className="vermelho">Não lembrei</button> 
            <button className="amarelo">Quase não lembrei</button>
            <button className="verde">Zap!</button>
        </div>
    )
}