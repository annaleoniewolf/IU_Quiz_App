import * as S from './styles'
import { useForm }from 'react-hook-form';
import Input from '../../elements/forms/Input';

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()

    //can be use to sent the data to the api
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <S.Login>
            <S.Information>
                <h2>Herzlich Willkommen auf der Startseite der IU Quiz APP</h2>
                <hr />
                <p>
                    Diese Webanwendung wurde im Rahmen des Softwareprojekts an der IU - Internationale Hochschule erstellt.<br/>
                    Bitte loggen Sie sich, mit den von uns zur Verfügung gestellten, Login-Daten ein.<br/><br/>
                    Viel Spaß mit der App wünschen:<br/>
                    Anna, Annika, Thomas, Jamal und David<br/><br/>
                    - Sommer 2022
                </p>
            </S.Information>
            <S.Content>
                <h1>Anmeldung</h1>
                <hr/>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("email", { required: true })} name="email" label="Email" required={true} placeholder="Email" />
                   <S.Element>
                    <input  {...register("password", { required: true })} type="password" placeholder='Passwort' name="password" autoComplete="on" id="password"/>
                    <label htmlFor="password">Passwort</label>
                   </S.Element>
                    {errors.password  && <p>Bitte geben Sie ihre Daten vollständig ein.</p>}
                    <S.SubmitButton type="submit" value="Anmelden"/>
                </S.Form>
            </S.Content>
        </S.Login>
    )
}

export default Login