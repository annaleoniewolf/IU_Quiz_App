import * as S from './styles'
import Button from '../../elements/forms/Button'



const StopModal = () => {

    return (
        <S.StopModal>
            <h2>Wirklich beenden?</h2>
            <p>
                Sind Sie sicher, dass sie die Lernrunde beenden wollen?
                <br />
                Sie können ihr aktuelles Spiel zu einem späteren Zeitpunkt fortsetzen.
            </p>
            <Button label="Beenden" red />
        </S.StopModal>
    )
}

export default StopModal