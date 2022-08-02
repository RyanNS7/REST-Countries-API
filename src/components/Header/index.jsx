import { HeaderContainer } from "./style"
import { BsMoon } from 'react-icons/bs'

export function Header(){
    return (
        <HeaderContainer>

            <div>
                <h2> Where in the World? </h2>
            </div>

            <div>
                <button> <BsMoon className="test"/> Dark Mode  </button>
            </div>

        </HeaderContainer>
    )
}