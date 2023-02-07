import axios from "axios";

const API_KEY = '59a503cfafa46b9718571bf9985df846';

axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const getTrending = async () => { 
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data?.results;
};


export const searchMovies = async (query, page, adult = false, year) => {
    const getYearStr = year ? `&year=${year}` : '';
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=${adult}${getYearStr}`);
    return response.data.results;
};

export const getMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=uk-UA`);
    return response.data;
};

export const getMovieCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
};

export const getMovieReviews = async (id, page = 1) => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&page=${page}`);
    return response.data?.results;
};