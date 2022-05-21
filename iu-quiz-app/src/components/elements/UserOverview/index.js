import * as S from './styles'

const UserOverview = ({ userName, module, image, info }) => {
    return (
        <S.UserOverview>
            <S.Image>
                <img src="https://picsum.photos/200/300?random=1" alt="avatar" />
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