import { useParams, useLocation, Outlet, NavLink} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieById } from "api/api";
import { STATUSES } from 'constants/statuses';
import { ErrorMessage, MovieBottom, MovieControls, MovieDetailsMain } from 'components/App/App.syled';
import MovieDetails from "components/MovieDetails";
import Loader from 'components/Loader';
import GoToLink from "components/GoToLink";

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
            <MovieDetailsMain>
                <GoToLink goToPath={backLinkHref}>👈🏻 Go Back</GoToLink>
                <Loader />
            </MovieDetailsMain>
        );
    };
    if( appStatus === STATUSES.RESOLVED ){
        return(
            <MovieDetailsMain>
                <MovieDetails movie={movie} />
                <MovieBottom>
                    <MovieControls>
                        <GoToLink goToPath={backLinkHref}>👈🏻 Go Back</GoToLink>
                        <div>
                            <NavLink to="cast">Cast</NavLink>
                            <NavLink to="reviews">Rewiews</NavLink>
                        </div>
                    </MovieControls>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </MovieBottom>
            </MovieDetailsMain>
        );
    };
    if(appStatus === STATUSES.REJECTED){
        return(
            <MovieDetailsMain>
                <GoToLink goToPath={backLinkHref}>👈🏻 Go Back</GoToLink>
                <ErrorMessage>{error}</ErrorMessage>
            </MovieDetailsMain>
        );
    };
};

export default MovieDeatailsView;