import { Link, useLocation } from 'react-router-dom';
import { MovieListContainer, MovieCard, MovieName } from "./MovieList.styled";
import placeholder from '../../img/404.jpg';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <MovieListContainer>
            {
                movies.map(({id, title, poster_path}) => {
                    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;
                    return(
                        <MovieCard key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <img src={imgPath} alt={title} />
                                <MovieName>{title}</MovieName>
                            </Link>
                        </MovieCard>
                    )}
                )
            }
        </MovieListContainer>
    )
}

export default MovieList;
