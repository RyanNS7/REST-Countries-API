import { HeaderContainer } from "./style"
import { BsMoon } from 'react-icons/bs'

export function Header({darkMode, setDarkMode}){
    return (
        <HeaderContainer darkMode={darkMode}>

            <div>
                <h2> Where in the World? </h2>
            </div>

            <div>
                <button onClick={() => {setDarkMode(!darkMode)}}> <BsMoon className="test"/> Dark Mode  </button>
            </div>

        </HeaderContainer>
    )
}