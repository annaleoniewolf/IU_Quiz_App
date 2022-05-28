import * as S from './styles'
import { useState } from 'react'
import { useForm }from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const MyProfile = () => {

    //const [userImage] = useState(null)
    const { register, handleSubmit} = useForm()
    const [vorname] = useState("Anna")
    const [nachname] = useState("Wolf")
    const [studienstart, setStudienstart] = useState("Wolf")
    const [studiengang] = useState("Informatik")

    //can be use to sent the data to the api
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <S.MyProfile>
            <S.ImageEditor>
                <S.Circle>
                    <S.Icon><FontAwesomeIcon icon={faPen} /></S.Icon>
                </S.Circle>
            </S.ImageEditor>
            <S.ProfileInformation>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Name>
                        <S.Element>
                            <input  {...register("vorname", { required: true })} type="vorname" placeholder={vorname} name="vorname" autoComplete="on" id="vorname"/>
                            <label htmlFor="vorname">Vorname</label>
                        </S.Element>
                        <S.Element>
                            <input  {...register("nachname", { required: true })} type="nachname" placeholder={nachname} name="nachname" autoComplete="on" id="nachname"/>
                            <label htmlFor="nachname">Nachname</label>
                        </S.Element>
                    </S.Name>
                        <S.Element>
                            <input  {...register("studiengang", { required: true })} type="studiengang" placeholder={studiengang} name="studiengang" autoComplete="on" id="studiengang"/>
                            <label htmlFor="studiengang">Studiengang</label>
                        </S.Element>
                        <S.Element>
                            <input  {...register("studienstart", { required: true })} type="studienstart" placeholder={studienstart} name="studienstart" autoComplete="on" id="studienstart"/>
                            <label htmlFor="studienstart">Studienstart</label>
                        </S.Element>
                    <S.SubmitButton type="submit" value="Speichern"/>
                </S.Form>
            </S.ProfileInformation>
        </S.MyProfile>
    )
}

export default MyProfile