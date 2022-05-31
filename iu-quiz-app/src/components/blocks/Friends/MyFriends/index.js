import * as S from './styles'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faXmarkCircle, faBan } from '@fortawesome/free-solid-svg-icons'
import UserOverview from '../../../elements/UserOverview'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

const MyFriends = () => {

    //Dimension für Responsive
    const { width } = useWindowDimensions();

    const [myFriends] = useState([
        {"vorname": "Annika", "nachname": "Backes", "info": "4.Semester, Bachelor Informatik"},
        {"vorname": "Jamal", "nachname": "Baydaoui", "info": "4.Semester, Bachelor Informatik"},
        {"vorname": "Thomas", "nachname": "Pörsch", "info": "4.Semester, Bachelor Informatik"},
        {"vorname": "David", "nachname": "Pierzyna", "info": "4.Semester, Bachelor Informatik"}
    ])

    const [myFriendsAmount] = useState(myFriends.length)
    return (
        <S.MyFriends>
            <p>{`${myFriendsAmount} Freund(e)`}</p>
            {width > 800 ?
                <table>
                    <tbody>
                        <tr>
                            <th>Profil</th>
                            <th>Nachricht</th>
                            <th>Blockieren</th>
                            <th>Freund entfernen</th>
                        </tr>
                        {myFriends &&
                            myFriends.map(({vorname, nachname, info}, index) => {
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
                                )
                            })
                        }
                    </tbody>
                </table>
            :
            <S.Responsive>
                {myFriends &&
                            myFriends.map(({vorname, nachname, info}, index) => {
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
                                                <h6>Blockieren</h6>
                                                <S.BanButton>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </S.BanButton>
                                            </S.Option>
                                            <S.Option>
                                                <h6>Freund entfernen</h6>
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
        </S.MyFriends>
    )
}

export default MyFriends