import * as S from './styles'
import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const PageNotFound = () => {
    return (
        <S.PageNotFound>
            <S.Content>
                <FontAwesomeIcon icon={faExclamation} />
                <h5>
                    Diese Seite wurde nicht gefunden!<br/>
                    Hier gelangen Sie zur Startseite, um sich anzumelden.
                </h5>
                <NavLink to="/login">
                    <Button label="Login" />
                </NavLink>
            </S.Content>
        </S.PageNotFound>
    )
}

export default PageNotFound