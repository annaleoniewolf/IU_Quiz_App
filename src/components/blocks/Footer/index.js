import { NavLink } from 'react-router-dom'

import * as S from './styles'

const Footer = () => {
    return (
        <S.Footer>
            <NavLink to={"/datenschutz"}>Datenschutz</NavLink>
            <NavLink to={"/impressum"}>Impressum</NavLink>
        </S.Footer>
    )
}

export default Footer