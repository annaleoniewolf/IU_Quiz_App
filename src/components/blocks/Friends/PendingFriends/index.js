import * as S from './styles'
import { useState } from 'react'


const PendingFriends = () => {

    const [pendingFriendsAmount] = useState(0)

    return (
        <S.PendingFriends>
            <p>{`${pendingFriendsAmount} Ausstehende Anfrage(n)`}</p>
        </S.PendingFriends>
    )
}

export default PendingFriends