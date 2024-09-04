// Faça uma página que

// Tenha um input pra digitar o nome de um jogador
// Tenha um select pra selecionar Time A ou B
// Tenha um button pra inserir o jogador no time selecionado

// Deve verificar se já existe um jogador com mesmo nome no time
// Deve conseguir adidionar apenas 5 jogadores em cada time (A e B) 

import './styles.css'

export default function Home() {
  return (
    <main>
      <section className="addPlayer">
        <h1>Crie Seu Time</h1>
        <label>Adicionar Jogador</label>
        <input type="text" placeholder="Digite o nome do jogador" />

        <button>Adicionar Jogador</button>
      </section>
    </main>
  )
}