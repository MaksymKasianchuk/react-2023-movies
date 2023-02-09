import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieListContainer, MovieName, MovieCard, Vote } from "./MovieList.styled";
import placeholder from '../../img/404.jpg';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <MovieListContainer>
            {
                movies.map(({id, title, poster_path, vote_average}) => {
                    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;
                    const normalizedVote = Math.round((vote_average + Number.EPSILON) * 100) / 100
                    return(
                        <MovieCard key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <div>
                                    <img src={imgPath} alt={title} />
                                    <Vote>{normalizedVote}</Vote>
                                </div>
                                <MovieName><span>{title}</span></MovieName>
                            </Link>
                        </MovieCard>
                    )}
                )
            }
        </MovieListContainer>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieList;
