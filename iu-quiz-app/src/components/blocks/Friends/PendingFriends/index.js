import * as S from './styles'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faXmarkCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import UserOverview from '../../../elements/UserOverview'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

const PendingFriends = () => {

    //Dimension für Responsive
    const { width } = useWindowDimensions();

    const [pendingFriends] = useState([
        {"vorname": "Jane", "nachname": "Doe", "info": "3.Semester, Bachelor Informatik"}
    ])
    const [pendingFriendsAmount] = useState(pendingFriends.length)

    return (
        <S.PendingFriends>
            <p>{`${pendingFriendsAmount} Ausstehende Anfrage(n)`}</p>
            {width > 800 ?
                <table>
                    <tbody>
                        <tr>
                            <th>Profil</th>
                            <th>Nachricht</th>
                            <th>Annehmen</th>
                            <th>Ablehnen</th>
                        </tr>
                        {pendingFriends &&
                            pendingFriends.map(({vorname, nachname, info}, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <UserOverview 
                                                userName={`${vorname} ${nachname}`}
                                                info={info}
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
                                )
                            })
                        }
                    </tbody>
                </table>
            : 
                <S.Responsive>
                    {pendingFriends &&
                        pendingFriends.map(({vorname, nachname, info}, index) => {
                            return(
                                <S.ResponsiveItem key={index}>
                                    <S.Profile>
                                        <h5>Profil</h5>
                                        <UserOverview 
                                            userName={`${vorname} ${nachname}`}
                                            info={info}
                                        />
                                    </S.Profile>
                                    <hr className="itemLine" />
                                    <S.Options>
                                        <S.Option>
                                            <h6>Nachricht</h6>
                                            <S.MessageButton>
                                                <FontAwesomeIcon icon={faComments} />
                                            </S.MessageButton>
                                        </S.Option>
                                        <S.Option>
                                            <h6>Annehmen</h6>
                                            <S.AcceptButton>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </S.AcceptButton>
                                        </S.Option>
                                        <S.Option>
                                            <h6>Ablehnen</h6>
                                            <S.DeleteButton>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </S.DeleteButton>
                                        </S.Option>
                                    </S.Options>
                                    <hr/>
                                </S.ResponsiveItem >
                            )
                        })
                    }
                </S.Responsive>
            }

        </S.PendingFriends>
    )
}

export default PendingFriends