import * as S from './styles'
import { faChess, faBookOpenReader, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Button from '../../elements/forms/Button'
import Select from '../../elements/forms/Select'
import SelectGameCard from '../../elements/SelectGameCard'


const NewGameModal = () => {

    //Konfigurationen werden angepasst an den Modus angezeigt
    const [modus, setModus] = useState('text')
    return (
        <S.NewGameModal>
            <S.GameModeSelection>
                <SelectGameCard 
                    onClick={() => setModus('singlePlayer')}
                    selected={modus === 'singlePlayer' ? true : false}
                    icon={faBookOpenReader} 
                    title="Einzelspieler Modus"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                    link="/einzelspieler"
                />
                <SelectGameCard 
                    onClick={() => setModus('duell')}
                    selected={modus === 'duell' ? true : false}
                    icon={faChess} 
                    title="Duell Modus"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                />
                <SelectGameCard 
                    onClick={() => setModus('collab')}
                    selected={modus === 'collab' ? true : false}
                    icon={faUserGroup} 
                    title="Kollaborativer Modus"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                />
            </S.GameModeSelection>
            <S.Selection>
                {modus === "singlePlayer" &&
                    <Select placeholder="Modul" />
                }
                {modus === "duell" &&
                    <S.DuellSelect>
                        <Select placeholder="Modul" />
                        <Select placeholder="Lernparter" />
                    </S.DuellSelect>
                }
                {modus === "collab" &&
                    <S.CollabSelect>
                        <Select placeholder="Modul" />
                        <Select placeholder="Lernparter" />
                    </S.CollabSelect>
                }
            </S.Selection>
            <Button label="Spiel Starten" />
        </S.NewGameModal>
    )
}

export default NewGameModal