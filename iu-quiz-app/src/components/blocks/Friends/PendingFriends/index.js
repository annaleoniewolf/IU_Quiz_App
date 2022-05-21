import * as S from './styles'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faXmarkCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../elements/forms/Button'
import UserOverview from '../../../elements/UserOverview'

const PendingFriends = () => {

    const [pendingFriendsAmount] = useState(1)

    return (
        <S.PendingFriends>
            <p>{`${pendingFriendsAmount} Ausstehende Anfrage(n)`}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Profil</th>
                        <th>Nachricht</th>
                        <th>Annehmen</th>
                        <th>Ablehnen</th>
                    </tr>
                    <tr>
                        <td>
                            <UserOverview 
                                userName="Jamal Mustermann"
                                info="4. Semester, Bachelor Informatik"
                            />
                        </td>
                        <td>
                            <S.MessageButton>
                                <FontAwesomeIcon icon={faComments} />
                            </S.MessageButton>
                        </td>
                        <td>
                            <S.AcceptButton>
                                <FontAwesomeIcon icon={faCheck} />
                            </S.AcceptButton>
                        </td>
                        <td>
                            <S.DeleteButton>
                                <FontAwesomeIcon icon={faXmarkCircle} />
                            </S.DeleteButton>
                        </td>
                    </tr>
                </tbody>
            </table>
            <S.Buttons>
                <Button label="Mehr laden" inactive/>
            </S.Buttons>
        </S.PendingFriends>
    )
}

export default PendingFriends