import * as S from './styles'
import { useState, useEffect } from 'react'

const TableFrame = ({children, activeId, labels, onChange, button}) => {

    const [isActive, setIsActive] = useState(null)

    useEffect(() => {
		setIsActive(activeId)
	}, [activeId])

    const handleClick = (index) => {
		setIsActive(index)
		onChange(index)
	}

    return (
        <S.TableFrame>
            <S.Labels>
                {labels &&
                    labels.length > 0 &&
                    labels.map((label, index) => {
                        const props = {
                            key: index,
                            onClick: () => {
                                handleClick(index)
                            },
                            active: index === isActive,
                            
                        }
                        return <S.Tab {...props}><h2>{label}</h2></S.Tab>
                    })}
                {button && 
                    <S.Button active={labels.length === isActive ? true : false}>
                        <button  onClick= {() => {handleClick(labels.length)}}> 
                            {button}
                        </button>
                    </S.Button>
                }
            </S.Labels>
            <S.Content>
                {children}
            </S.Content>
        </S.TableFrame>
    )
}

export default TableFrame