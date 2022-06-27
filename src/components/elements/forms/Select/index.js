import * as S from './styles'
import SelectModul from 'react-select'



const Select = ({ placeholder, options, defaultValue, onChange }) => {


    return (
        <S.Select>
             <SelectModul 
                options={options} 
                placeholder={placeholder} 
                defaultInputValue={defaultValue}
                onChange={onChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: '#bcd0e8',
                        primary: '#03244a',
                    },
                    })}
            />
        </S.Select>
    )
}

export default Select