import * as S from './styles'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faXmarkCircle, faBan } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../elements/forms/Button'
import UserOverview from '../../../elements/UserOverview'

const MyFriends = () => {
    const [myFriendsAmount] = useState(1)
    return (

        <S.MyFriends>
            <p>{`${myFriendsAmount} Freund(e)`}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Profil</th>
                        <th>Nachricht</th>
                        <th>Blockieren</th>
                        <th>Freund entfernen</th>
                    </tr>
                    <tr>
                        <td>
                            <UserOverview 
                                userName="Annika Mustermann"
                                info="4. Semester, Bachelor Informatik"
                            />
                        </td>
                        <td>
                            <S.MessageButton>
                                <FontAwesomeIcon icon={faComments} />
                            </S.MessageButton>
                        </td>
                        <td>
                            <S.BanButton>
                                <FontAwesomeIcon icon={faBan} />
                            </S.BanButton>
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
        </S.MyFriends>
    )
}

export default MyFriends