import * as S from './styles'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CakeChart = ({percentage, type = "normal"}) => {

    //calculates color for the progress path
    const calculatePathColor = () => {
        if (percentage <= 35) {
            return "#E55444"
        } 
        else if (percentage >= 35 && percentage <= 75) {
            return "#ffd262"
        }
        else {
            return "#89e579"
        }
    }

    //calculates color for the progress trail
    const calculateTrailColor = () => {
        if (percentage <= 35) {
            return "#f8d1b1"
        } 
        else if (percentage >= 35 && percentage <= 75) {
            return "#fff4da"
        }
        else {
            return "#e3f9df"
        }
    }

    return (
        <S.CakeChart>
            {type === "normal" ?
                <S.CircleChart>
                    <CircularProgressbar 
                        value={percentage} 
                        text={`${percentage}%`} 
                        styles={buildStyles({
                            // Text size
                            textSize: '24px',
                            pathColor: calculatePathColor(),
                            textColor: '#000',
                            trailColor: calculateTrailColor(),
                            backgroundColor: '#3e98c7',
                            pathTransitionDuration: 0.001,
                            strokeLinecap: 'butt',
                        })}
                    />
                </S.CircleChart>
            :
                <S.TimerChart>
                    <CircularProgressbar 
                        value={percentage} 
                        maxValue={45}
                        text={`${percentage}`} 
                        strokeWidth={13}
                        styles={buildStyles({
                            // Text size
                            textSize: '32px',
                            pathColor: '#03244a',
                            textColor: '#000',
                            trailColor: '#cdd3db',
                            backgroundColor: '#3e98c7',
                            pathTransitionDuration: 0.001,
                            strokeLinecap: 'butt',
                        })}
                    />
                </S.TimerChart>
        }
            
        </S.CakeChart>
    )
}

export default CakeChart