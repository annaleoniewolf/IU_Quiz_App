import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

import Button from '../forms/Button'


const NavigationCard = ({icon, title, text, label, link, modal}) => {
    const { setOpen, setType} = useContext(ModalContext)

    const handleModal = () => {
        setType(modal)
        setOpen(true)
    }
    return (
        <S.NavigationCard>
            <FontAwesomeIcon icon={icon} size="4x" />
            <S.Title>
                <h4>{title}</h4>
            </S.Title>
            <S.Text>
                <p>{text}</p>
            </S.Text>
            {link &&
                <NavLink to={link ? link : "/"}>
                    <S.Button>
                        <Button label={label} />
                    </S.Button>
                </NavLink>
            } 
            {modal && 
                <S.Button>
                    <Button label={label} onClick={() => handleModal()} />
                </S.Button>
            }
        </S.NavigationCard>
    )
}

export default NavigationCard