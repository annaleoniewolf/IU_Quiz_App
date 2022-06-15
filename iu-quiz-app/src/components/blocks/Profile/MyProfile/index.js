import * as S from './styles'
import { useState } from 'react'
import Button from '../../../elements/forms/Button'

const MyProfile = () => {

    //const [userImage] = useState(null)
    const [vorname] = useState("Anna")
    const [nachname] = useState("Wolf")
    const [studienstart] = useState(new Date())
    const [studiengang] = useState("Bachelor Informatik")

    const converteDate = (date) => {

        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        const newDate = `${day}.${month}.${year}`
        return newDate
    }

    return (
        <S.MyProfile>
            <S.ProfileImage></S.ProfileImage>
            <S.ProfileInformation>
                <S.Form>
                    <S.Name>
                        <S.Element>
                            <input type="text" placeholder={vorname} id="vorname" readOnly/>
                            <label htmlFor="vorname">Vorname</label>
                        </S.Element>
                        <S.Element>
                            <input type="text" placeholder={nachname} id="nachname" readOnly/>
                            <label htmlFor="nachname">Nachname</label>
                        </S.Element>
                    </S.Name>
                    <S.Element>
                        <input type="text" placeholder={studiengang}  id="studiengang" readOnly/>
                        <label htmlFor="studiengang">Studiengang</label>
                    </S.Element>
                    <S.Element>
                        <input type="text" id="studienstart" placeholder={converteDate(studienstart)} readOnly/>
                        <label htmlFor="studienstart">Studienstart</label>
                    </S.Element>
                    <S.Button>
                        <Button label="Speichern" inactive />
                    </S.Button>
                </S.Form>
            </S.ProfileInformation>
        </S.MyProfile>
    )
}

export default MyProfile