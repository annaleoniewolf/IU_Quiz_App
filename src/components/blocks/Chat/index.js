import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'


const Chat = () => {
    return (
        <S.Chat>
            <S.Container
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, type: 'tween' }}
            >
                <S.Icon>
                 <FontAwesomeIcon icon={faComments} size="4x" />
                </S.Icon>

                <hr/>
                <p>
                    Der derzeitige Prototyp unterstützt die Chat Funktion nicht!
                    <br/> Hier gelangen Sie zum Dashboard zurück.
                </p>
                <NavLink to="/">
                    <Button label="dashboard" />
                </NavLink>
            </S.Container>
        </S.Chat>
    )
}

export default Chat