import styled from '@emotion/styled';


export const MovieListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 16px;
`;

export const MovieCard = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    overflow: hidden;
    &>a {
        text-decoration: none;
    }
    & img{
        width: 100%;
    }
`;

export const MovieName = styled.h3`
    padding: 4px;
    margin-top: 8px;
    margin-bottom: 0;
    color: black;
`;
