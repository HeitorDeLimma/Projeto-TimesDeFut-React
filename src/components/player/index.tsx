import './styles.css'
import removeIcon from '../../assets/remove.svg'

interface PlayersProps {
  number: string
  name: string
  team: string
  handleDelete(number: string, team: string): void
}

export function Player({ name, number, team, handleDelete }: PlayersProps) {
  return (
    <div className='players'>
      <div className='player'>
        <span>{number.toString().padStart(2, '0')}</span>
        <p>{name}</p>

        <button onClick={() => handleDelete(number, team)}><img src={removeIcon} alt="Remove" /></button>
      </div>
    </div>
  )
}
