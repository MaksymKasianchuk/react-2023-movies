import  *  as api from 'api/api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import Section from 'components/Section';

const HomeView = () => {
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
        <Section title='Weekly trending movies'>
            <MovieList movies={movies}/>
        </Section>
    )
}
export default HomeView;
