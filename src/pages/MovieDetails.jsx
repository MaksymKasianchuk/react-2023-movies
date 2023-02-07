import { useParams, useLocation, Link, Outlet, NavLink} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieById } from "api/api";
import { STATUSES } from 'constants/statuses';
import placeholder from 'img/404.jpg';

const MovieDeatails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');
    const [appStatus, setAppStatus] = useState(STATUSES.IDLE);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(()=>{
        const fetchMovie = async () =>{
            setAppStatus(STATUSES.PENDING);
            try {
                const newMovie = await getMovieById(movieId);
                if(!newMovie){
                    setError('❌ Sorry, something went wrong! Movie not found :(');
                    setAppStatus(STATUSES.REJECTED);
                }
                else{
                    setMovie(newMovie);
                    setAppStatus(STATUSES.RESOLVED);
                }
            } catch (error) {
                setError(error?.response.data?.status_message);
                setAppStatus(STATUSES.REJECTED);
            }
        } 
        if(!movieId) return;
        fetchMovie();
    }, [movieId]);

    const {poster_path, adult, backdrop_path, genres, overview, vote_average, vote_count, production_companies, production_countries, release_date, status, title} = movie;
    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder;
    return(
        <article>
            <Link to={backLinkHref}>👈🏻 Go Back</Link>
            <div>
                <img src={imgPath} alt="" />
            </div>
            <div>
                <div>
                    <NavLink to="cast">Cast</NavLink>
                    <NavLink to="reviews">Rewiews</NavLink>
                </div>
                <Suspense fallback={<p>Loading page...</p>}>
                    <Outlet />
                </Suspense>
            </div>
        </article>
    );
};

export default MovieDeatails;