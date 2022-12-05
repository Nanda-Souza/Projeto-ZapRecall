
export default function App() {
  return (
    <div className="screen-container">

      <div className="logo-container">
      <img src="assets/logo.png" />

      <h1>ZapRecall</h1>
      </div>

      <ul class="lista-perguntas">
	      <li class="pergunta-aberta">O que é JSX? <img src="assets/seta_virar.png"/></li>
	      <li class="pergunta-aberta">JSX é uma sintaxe para escrever HTML dentro do JS  
        <div className="container-botoes">
        <button className="vermelho">Não lembrei</button> 
        <button className="amarelo">Quase não lembrei</button>
        <button className="verde">Zap!</button>
        </div>
        </li>
	      <li class="pergunta-fechada">
          <p class="pergunta">Pergunta 3</p>
        <img src="assets/seta_play.png"/>
        </li>
        <li class="pergunta-fechada">
          <p class="certo">Pergunta 4</p>
          <img src="assets/icone_certo.png"/>
          </li>
      </ul>
 

      <div className="footer-concluidos">
      0/4 CONCLUÍDOS
      </div>
    </div>

  );
}


