import { ButtonStyled,  LoadMoreBtnWrap } from './LoadMoreButton.styled'

const LoadMoreButton = ({clickHandler}) => {
    return(
        <LoadMoreBtnWrap>
            <ButtonStyled type="button" onClick={() =>clickHandler()}>Load More</ButtonStyled>
        </LoadMoreBtnWrap>
    )
};

export default LoadMoreButton;