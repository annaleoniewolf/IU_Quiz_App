import * as S from './styles'

import TableFrame from '../../elements/TableFrame'
import LandingTable from './LandingTable'


const SinglePlayer = () => {

    return (
        <S.SinglePlayer>
            <S.Content>
                <TableFrame 
                    activeId={0}
                    labels={["Fragenübersicht"]} 
                >
                    <LandingTable />
                </TableFrame>

            </S.Content>
        </S.SinglePlayer>
    )
}

export default SinglePlayer