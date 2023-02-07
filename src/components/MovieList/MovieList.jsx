import { Link, useLocation } from 'react-router-dom';
import { MovieListContainer, MovieName } from "./MovieList.styled";
import { WhiteCard } from 'components/App/App.syled';
import placeholder from '../../img/404.jpg';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <MovieListContainer>
            {
                movies.map(({id, title, poster_path}) => {
                    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;
                    return(
                        <WhiteCard key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <img src={imgPath} alt={title} />
                                <MovieName>{title}</MovieName>
                            </Link>
                        </WhiteCard>
                    )}
                )
            }
        </MovieListContainer>
    )
}

export default MovieList;
