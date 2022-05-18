import * as S from './styles'
import TableFrame from '../../elements/TableFrame'
import UserOverview from '../../elements/UserOverview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faBan, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '../../elements/forms/Button'

const Friends = () => {
   
    return (
        <S.Friends>
            <S.Content>
                <TableFrame title="Freunde">
                    <p>4 Freunde</p>
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
                                    <UserOverview />
                                </td>
                                <td>
                                    <S.Chat>
                                        <FontAwesomeIcon icon={faComments} size="2x" />
                                    </S.Chat>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faBan} size="2x"/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faCircleXmark}   size="2x" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <UserOverview />
                                </td>
                                <td>
                                    <S.Chat>
                                        <FontAwesomeIcon icon={faComments} size="2x" />
                                    </S.Chat>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faBan} size="2x"/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <UserOverview />
                                </td>
                                <td>
                                    <S.Chat>
                                        <FontAwesomeIcon icon={faComments} size="2x"/>
                                    </S.Chat>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faBan} size="2x"/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <UserOverview />
                                </td>
                                <td>
                                    <S.Chat>
                                        <FontAwesomeIcon icon={faComments} size="2x"/>
                                    </S.Chat>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faBan} size="2x"/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <S.Button>
                        <Button label="Mehr laden" inactive />
                    </S.Button>
                </TableFrame>
            </S.Content>
        </S.Friends>
    )
}

export default Friends

