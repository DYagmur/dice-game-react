import '../styles/Header.css'
import { Link } from "react-router-dom"
export default function Header() {

    return(
        <header>
            <nav>
                <ul>
                    <li className='list'>
                    <Link to="login" className='p-3'>Login</Link>
                    </li>
                    <li className='list'>
                    <Link to="dice" className='p-3'>DICE</Link>
                    </li>
                    <li className='list'>
                    <Link to="roulette" className='p-3'>ROULETTE</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}