import * as S from './styles'
import { useState } from 'react'
import { useForm }from 'react-hook-form';
import ImageUploader from '../../../elements/forms/ImageUploader';

const MyProfile = () => {

    //const [userImage] = useState(null)
    const { register, handleSubmit} = useForm()
    const [vorname] = useState("Anna")
    const [nachname] = useState("Wolf")
    //const [studienstart] = useState(new Date())
    const [studiengang] = useState("Bachelor Informatik")

    //can be use to sent the data to the api
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <S.MyProfile>
            <ImageUploader />
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
                            <input  {...register("studienstart", { required: true })} type="date" name="studienstart" autoComplete="on" id="studienstart"/>
                            <label htmlFor="studienstart">Studienstart</label>
                        </S.Element>
                    <S.SubmitButton type="submit" value="Speichern"/>
                </S.Form>
            </S.ProfileInformation>
        </S.MyProfile>
    )
}

export default MyProfile