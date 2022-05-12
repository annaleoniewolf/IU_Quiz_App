import * as S from './styles'
import { faChess, faBookOpenReader, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Button from '../../elements/forms/Button'
import Select from '../../elements/forms/Select'
import SelectGameCard from '../../elements/SelectGameCard'


const NewGameModal = () => {

    const modulOptions = [
        { value: 'Betriebssysteme, Rechennetze und verteilte Systeme', label: 'Betriebssysteme, Rechennetze und verteilte Systeme' },
        { value: 'Statistik', label: 'Statistik' },
        { value: 'Spezifikation', label: 'Spezifikation' }
      ]

    //Konfigurationen werden angepasst an den Modus angezeigt
    const [modus, setModus] = useState('text')
    const [link] = useState(`/${modus}`)
    return (
        <S.NewGameModal>
            <S.GameModeSelection>
                <SelectGameCard 
                    onClick={() => setModus('singlePlayer')}
                    selected={modus === 'singlePlayer' ? true : false}
                    icon={faBookOpenReader} 
                    title="Einzelspieler Modus"
                    text="Du erhälst 10 Fragen im Multiple-Choice Format, um dich auf ein bestimmtes Modul vorzubereiten."
                    link="/einzelspieler"
                />
                <SelectGameCard 
                    onClick={() => setModus('duell')}
                    selected={modus === 'duell' ? true : false}
                    icon={faChess} 
                    title="Duell Modus"
                    text="In vier Runden mit je drei Fragen kannst du gegen einen deiner Lernpartner antreten."
                />
                <SelectGameCard 
                    onClick={() => setModus('collab')}
                    selected={modus === 'collab' ? true : false}
                    icon={faUserGroup} 
                    title="Kollaborativer Modus"
                    text="Spiele mit deinem Lernpartner zusammen und wählt euch gegenseitig Fragen aus."
                />
            </S.GameModeSelection>
            <S.Selection>
                {modus === "singlePlayer" &&
                    <S.SelectionContainer>
                        <label>Modul auswählen</label>
                        <Select placeholder="Modul" options={modulOptions} />
                    </S.SelectionContainer>
                }
                {modus === "duell" &&
                    <S.DuellSelect>
                        <S.SelectionContainer>
                            <label>Modul auswählen</label>
                            <Select placeholder="Modul" options={modulOptions} />
                        </S.SelectionContainer>
                        <S.SelectionContainer>
                            <label>Lernpartner auswählen</label>
                            <Select placeholder="Lernpartner" options={modulOptions}/>
                        </S.SelectionContainer>
                    </S.DuellSelect>
                }
                {modus === "collab" &&
                    <S.CollabSelect>
                        <S.SelectionContainer>
                            <label>Modul auswählen</label>
                            <Select placeholder="Modul" options={modulOptions} />
                        </S.SelectionContainer>
                        <S.SelectionContainer>
                            <label>Lernpartner auswählen</label>
                            <Select placeholder="Lernpartner" options={modulOptions} />
                        </S.SelectionContainer>
                    </S.CollabSelect>
                }
            </S.Selection>
            <Button label="Spiel Starten" link={link} />
        </S.NewGameModal>
    )
}

export default NewGameModal