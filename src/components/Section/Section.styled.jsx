import styled from '@emotion/styled';

export const SectionStyled = styled.section`
    background:  ${props => props.theme.colors.cardBgColor};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    overflow: hidden;
    padding: 40px 0;
    margin 0;
   
`;
export const SectionTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`;