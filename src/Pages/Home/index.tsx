// Faça uma página que

// Tenha um input pra digitar o nome de um jogador
// Tenha um select pra selecionar Time A ou B
// Tenha um button pra inserir o jogador no time selecionado

// Deve verificar se já existe um jogador com mesmo nome no time
// Deve conseguir adidionar apenas 5 jogadores em cada time (A e B) 

import { useState } from 'react'
import './styles.css'
import { Player } from '../../components/player'

const maxPlayersByTeam = 5

interface IPlayer {
  number: string
  name: string
  team: string
}

export default function Home() {
  const [playerName, setPlayerName] = useState<string>('')
  const [playerNumber, setPlayerNumber] = useState<string>('')
  const [playerTeam, setPlayerTeam] = useState<string>('')

  const [playersA, setPlayersA] = useState<IPlayer[]>([])
  const [playersB, setPlayersB] = useState<IPlayer[]>([])

  function handleAddPlayer() {
    if (playerName === '') return alert("Digite o nome do jogador")
    if (playerNumber === '') return alert("Digite um número pro jogador")
    if (playerTeam === '') return alert("Selecione um time")

    const newPlayer = {
      name: playerName,
      number: playerNumber,
      team: playerTeam
    }

    if (playerTeam === 'teamA') {
      const playerExists = playersA.some((player) => player.number === newPlayer.number)

      if (playerExists) return alert(`Já existe um jogador no Time A com o número ${newPlayer.number}`)
      if (playersA.length >= maxPlayersByTeam) return alert("Máximo de jogadores no time")

      setPlayersA((prevState) => [...prevState, newPlayer])
    } else {
      const playerExists = playersB.some((player) => player.number === newPlayer.number)

      if (playerExists) return alert(`Já existe um jogador no Time B com o número ${newPlayer.number}`)
      if (playersB.length >= maxPlayersByTeam) return alert("Máximo de jogadores no time")
      setPlayersB((prevState) => [...prevState, newPlayer])
    }

    handleClear()
  }

  function handleDelete(playerNumber: string, playerTeam: string) {
    if (playerTeam === 'teamA') {
      const newPlayersA = playersA.filter(player => player.number !== playerNumber)

      setPlayersA(newPlayersA)
    } else {
      const newPlayersB = playersB.filter(player => player.number !== playerNumber)

      setPlayersB(newPlayersB)
    }
  }

  function handleClear() {
    setPlayerName('')
    setPlayerNumber('')
    setPlayerTeam('')
  }

  return (
    <div className='container'>
      <aside className="addPlayer">
        <h1>Crie Seu Time</h1>

        <p>Crie seu time de acordo com sua imaginação!</p>

        <label>Crie seu jogador</label>
        <input
          type="text"
          placeholder="Digite o nome do jogador"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <input
          type="number"
          placeholder='Digite o número da camisa'
          value={playerNumber}
          onChange={(e) => setPlayerNumber(e.target.value)}
        />

        <select
          onChange={(e) => setPlayerTeam(e.target.value)}
          value={playerTeam}
          name="selectTeam"
          id="selectTeam"
        >
          <option value="" disabled hidden>Selecione o time</option>
          <option value="teamA">Time A</option>
          <option value="TeamB">Time B</option>
        </select>

        <button onClick={handleAddPlayer}>Adicionar Jogador</button>
      </aside>

      <section>
        <div className='team teamA'>
          <h1>Time A</h1>

          <div className='players'>
            {
              playersA.map((player) => (
                <Player
                  key={player.number}
                  name={player.name}
                  number={player.number}
                  team={player.team}
                  handleDelete={handleDelete}
                />
              ))
            }
          </div>
        </div>

        <div className='team teamB'>
          <h1>Time B</h1>

          {
            playersB.length > 0 ? <button onClick={() => setPlayersB([])}>Remover Todos</button> : null
          }

          <div className="players">
            {
              playersB.map((player) => (
                <Player
                  key={player.number}
                  name={player.name}
                  number={player.number}
                  team={player.team}
                  handleDelete={handleDelete}
                />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}