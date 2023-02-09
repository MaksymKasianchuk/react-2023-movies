import PropTypes from 'prop-types';
import { ButtonStyled,  LoadMoreBtnWrap } from './LoadMoreButton.styled'

const LoadMoreButton = ({clickHandler}) => {
    return(
        <LoadMoreBtnWrap>
            <ButtonStyled type="button" onClick={() =>clickHandler()}>Load More</ButtonStyled>
        </LoadMoreBtnWrap>
    )
};

LoadMoreButton.propTypes = {
    clickHandler: PropTypes.func.isRequired,
};

export default LoadMoreButton;