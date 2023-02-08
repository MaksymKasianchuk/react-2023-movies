import  *  as api from 'api/api';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from "react-router-dom";
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import LoadMoreButton from 'components/LoadMoreButton';
import { STATUSES } from 'constants/statuses';
import { ErrorMessage } from 'components/App/App.syled';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );
    const { query, page, adult, year } = params;
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState('');
    const [status, setStatus] = useState(STATUSES.IDLE);
    const firstRender = useRef(true);

    const handleSubmit = (values) => {
        const { query, adult, year } = values;
        setError('');
        const optionalYear = year ? {year} : {};
        setMovies([]);
        setSearchParams({ query, page: '1', adult, ...optionalYear })
    };

    const loadMore = () => {
        const newPage = Number(page) + 1;
        const optionalYear = year ? {year} : {};
        setSearchParams({ query, page: newPage, adult, ...optionalYear })
    };

    useEffect(() => {
        const searchMovies = async () => {
            setStatus(STATUSES.PENDING);
            try {
                const newMovies = await api.searchMovies(query, page, adult, year);
                if(newMovies.length === 0){
                    setError(`❌ Nothing found for your request: ${query}, on page ${page}. Please, go back or change your search parameters.`);
                    setStatus(STATUSES.REJECTED);
                    setMovies([]);
                }
                else{
                    setMovies(prevMovies => [...prevMovies, ...newMovies]);
                    setStatus(STATUSES.RESOLVED);
                }
            } 
            catch (error) {
                setError(error);
                setStatus(STATUSES.REJECTED);
                setMovies([]);
            }
        }

        if(firstRender.current){
            firstRender.current = false;
            return;
        }
        if(!query) { return; }
        searchMovies();
    }, [query, page, adult, year]);

    const getValues = () => {
        let adultVal = '';
        if (adult === "true") adultVal = true;
        else adultVal = false;
        return {
            query: query ? query : '', 
            adult: adultVal, 
            year: year ? Number(year) : ''
        }
    }


    if(status === STATUSES.IDLE){
        return(
            <Searchbar values={getValues()} submitHandler={handleSubmit} />
        );
    };
    
    if(status === STATUSES.PENDING || status === STATUSES.RESOLVED ){
        return(
        <>
            <Searchbar values={getValues()} submitHandler={handleSubmit} />
            <MovieList movies={movies}/>
            {status === STATUSES.PENDING ? (<Loader/>) : (
                <LoadMoreButton clickHandler={loadMore}/>
            )}
        </>
        );
    };

    if(status === STATUSES.REJECTED){
        return(
            <>
                <Searchbar values={getValues()} submitHandler={handleSubmit} />
                <ErrorMessage>{error}</ErrorMessage>
            </>
        );
    };
}

export default Movies;