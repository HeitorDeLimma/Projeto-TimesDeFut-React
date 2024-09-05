// Faça uma página que

// Tenha um input pra digitar o nome de um jogador
// Tenha um select pra selecionar Time A ou B
// Tenha um button pra inserir o jogador no time selecionado

// Deve verificar se já existe um jogador com mesmo nome no time
// Deve conseguir adidionar apenas 5 jogadores em cada time (A e B) 

import './styles.css'

export default function Home() {
  return (
    <div className='container'>
      <aside className="addPlayer">
        <h1>Crie Seu Time</h1>

        <p>Crie seu time de acordo com sua imaginação!</p>

        <label>Crie seu jogador</label>
        <input type="text" placeholder="Digite o nome do jogador" />

        <select name="selectTeam" id="selectTeam">
          <option value="" disabled selected hidden>Selecione o time</option>
          <option value="teamA">Time A</option>
          <option value="TeamB">Time B</option>
        </select>

        <button>Adicionar Jogador</button>
      </aside>

      <section>
        <div className='teamA'>

        </div>

        <div className='teamB'>

        </div>
      </section>
    </div>
  )
}