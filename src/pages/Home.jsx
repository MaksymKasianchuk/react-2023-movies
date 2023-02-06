import  *  as api from 'api/api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';

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
    // console.log(movies);
    return (
        <MovieList movies={movies}/>
    )
}
export default Home;
