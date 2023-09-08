import './header.css'
import InputSearch from '../input/InputSearch'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="cont-header">

      <Link to={'/filmes'} className='cont-title'>
      <div className='ion'>
      <ion-icon name="videocam-outline"></ion-icon>
      </div>
      <h1>
      LibFilmes
      </h1>
      </Link>
      <div>
       <InputSearch/>
      </div>
    </div>
  )
}
