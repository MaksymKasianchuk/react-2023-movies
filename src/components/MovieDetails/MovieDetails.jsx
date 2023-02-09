import PropTypes from 'prop-types';
import placeholder from 'img/404.jpg';
import { 
    MovieDetailsWrap, 
    Poster, 
    MovieTitle, 
    InfoBlock, 
    ShortInfo, 
    InfoBlockItem,
    OverviewBlock
} from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
    const {poster_path, adult, genres, overview, vote_average, vote_count, production_companies, production_countries, release_date, status, title} = movie;
    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;
    const releaseDate = release_date.split('-').reverse().join('.');
    const normalizedVote = Math.round((vote_average + Number.EPSILON) * 100) / 100
    return (
        <MovieDetailsWrap>
            <Poster>
                <div>
                    <img src={imgPath} alt={title} />
                    <div>{normalizedVote}</div>
                </div>
                <ShortInfo>People votes: <span>{vote_count}</span></ShortInfo>
                <ShortInfo>18+ rating: <span>{adult ? 'yes' : 'no'}</span></ShortInfo>
                <ShortInfo>Status: <span>{status}</span></ShortInfo>
                <ShortInfo>Release date: <span>{releaseDate}</span></ShortInfo>
            </Poster>

            <InfoBlock>
                <MovieTitle>{title}</MovieTitle>
                
                <InfoBlockItem>
                    <p>Genres: </p>
                    <ul>
                        {
                        genres.map(({name, id}) => (<li key={id}>{name} </li>))
                        }
                    </ul>
                </InfoBlockItem>
                <InfoBlockItem>
                    <p>Companies: </p>
                    <ul>
                        {
                        production_companies.map(({name, id}) => (<li key={id}>{name} </li>))
                        }
                    </ul>
                </InfoBlockItem>
                <InfoBlockItem>
                    <p>Countries: </p>
                    <ul>
                        {
                        production_countries.map(({name, iso_3166_1}) => (<li key={iso_3166_1}>{name} </li>))
                        }
                    </ul>
                </InfoBlockItem>
                <OverviewBlock>
                    <p className='overview-title'>Overview</p>
                    <p className='overview-txt'>{overview}</p>
                </OverviewBlock>
            </InfoBlock>
        </MovieDetailsWrap>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape().isRequired,
};

export default MovieDetails
