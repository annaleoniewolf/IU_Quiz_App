import * as S from './styles'
import { useTimer } from 'react-timer-hook'
import CakeChart from '../CakeChart'

const Timer = () => {

    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 45);

    const {
        seconds
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called')})

    return (
        <S.Timer>
            <CakeChart percentage={seconds} type="timer" />
        </S.Timer>
    )
}

export default Timer