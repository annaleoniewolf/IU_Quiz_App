import * as S from './styles'

import MyQuestions from './MyQuestions'
import AddQuestion from './AddQuestion'
import Guidlines from './Guidlines'
import PublicQuestions from './PublicQuestions'

import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPanelIndex } from'../../../redux/settingsSlice'
import TableFrame from '../../elements/TableFrame'


const Questionnaire = () => {

    const dispatch = useDispatch()
	const { selectedPanelIndex } = useSelector((state) => state.settings)

    return (
        <S.Questionnaire>
            <S.Content>
            <TableFrame 
                activeId={selectedPanelIndex}
                labels={["Meine Fragen", "Öffentliche Fragen", "Richtlinien"]} 
                button="Frage hinzufügen"
                onChange={(index) => {
					dispatch(setSelectedPanelIndex(index))
				}}
            >
                {selectedPanelIndex === 0 && <MyQuestions />}
                {selectedPanelIndex === 1 && <PublicQuestions />}
                {selectedPanelIndex === 2 && <Guidlines />}
                {selectedPanelIndex === 3 && <AddQuestion />}
            </TableFrame>
            </S.Content>
        </S.Questionnaire>
    )
}

export default Questionnaire