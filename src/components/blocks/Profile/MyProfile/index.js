import * as S from './styles'
import Button from '../../../elements/forms/Button'

import GET_MY_PROFILE from '../../../../apollo/queries/getMyProfile'
import { useQuery } from "@apollo/client"

const MyProfile = () => {

    //getMyProfile Query
    const { data } = useQuery(GET_MY_PROFILE);   
    
    //converts date
    const converteDate = (oldDate) => {
        if (oldDate) {
            const date = new Date(oldDate)
            const day = date.getDate()
            const month = date.getMonth()+1
            const year = date.getFullYear()
    
            const newDate = `${day}.${month}.${year}`
            return newDate
        }
    }

    return (
        <S.MyProfile>
            {data &&
                <>
                    <S.ProfileImage>
                        <img src={data.getMyProfile.avatar_url} alt="avatar" />
                    </S.ProfileImage>
                    <S.ProfileInformation>
                        <S.Form>
                            <S.Name>
                                <S.Element>
                                    <input type="text" placeholder={data.getMyProfile.first_name} id="vorname" readOnly/>
                                    <label htmlFor="vorname">Vorname</label>
                                </S.Element>
                                <S.Element>
                                    <input type="text" placeholder={data.getMyProfile.last_name} id="nachname" readOnly/>
                                    <label htmlFor="nachname">Nachname</label>
                                </S.Element>
                            </S.Name>
                            <S.Element>
                                <input type="text" placeholder={data.getMyProfile.degree}  id="studiengang" readOnly/>
                                <label htmlFor="studiengang">Studiengang</label>
                            </S.Element>
                            <S.Element>
                                <input type="text" id="studienstart" placeholder={converteDate(data.getMyProfile.study_start)} readOnly/>
                                <label htmlFor="studienstart">Studienstart</label>
                            </S.Element>
                            <S.Button>
                                <Button label="Speichern" inactive />
                            </S.Button>
                        </S.Form>
                    </S.ProfileInformation>
                </>
            }   
        </S.MyProfile>
    )
}

export default MyProfile