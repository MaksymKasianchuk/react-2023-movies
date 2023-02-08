import { useParams, useLocation, Link, Outlet, NavLink} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieById } from "api/api";
import { STATUSES } from 'constants/statuses';
import MovieDetails from "components/MovieDetails";
import Loader from 'components/Loader';
import { ErrorMessage } from 'components/App/App.syled';

const MovieDeatailsView = () => {
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

   
    if(appStatus === STATUSES.IDLE || appStatus === STATUSES.PENDING){
        return(
            <main>
                <Link to={backLinkHref}>👈🏻 Go Back</Link>
                <Loader />
            </main>
        );
    };
    if( appStatus === STATUSES.RESOLVED ){
        return(
            <main>
                <Link to={backLinkHref}>👈🏻 Go Back</Link>
                <MovieDetails movie={movie} />
                <div>
                    <div>
                        <NavLink to="cast">Cast</NavLink>
                        <NavLink to="reviews">Rewiews</NavLink>
                    </div>
                    <Suspense fallback={<p>Loading page...</p>}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        );
    };
    if(appStatus === STATUSES.REJECTED){
        return(
            <main>
                <Link to={backLinkHref}>👈🏻 Go Back</Link>
                <ErrorMessage>{error}</ErrorMessage>
            </main>
        );
    };
};

export default MovieDeatailsView;