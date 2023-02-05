import  *  as api from 'api/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const trendingMovies = await api.getTrending();
                setMovies(trendingMovies);
            } catch (error) {
                throw new Error(`can't fetch trending: ${error}`);
            }
        };
        fetchTrending();
    }, []);
    console.log(movies);
    return (
        <ul>
            {
                movies.map(({id, title, poster_path}) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                                <p>{title}</p>
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    )
}
export default Home;
