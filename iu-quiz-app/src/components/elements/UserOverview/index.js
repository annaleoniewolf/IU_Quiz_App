import * as S from './styles'

const UserOverview = ({ userName, module, image, info }) => {
    return (
        <S.UserOverview>
            <S.Image>
                 {image && <img src={image} alt="avatar" />}
            </S.Image>
            <S.User>
                <h5>{userName}</h5>
                {module && <p>{module}</p>}
                {info && <p>{info}</p>}
            </S.User>
        </S.UserOverview>
    )
}

export default UserOverview