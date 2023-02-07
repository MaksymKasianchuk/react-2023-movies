import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "api/api";
import { STATUSES } from 'constants/statuses';
import placeholder from 'img/404.jpg';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState('');
    const [appStatus, setAppStatus] = useState(STATUSES.IDLE);

    useEffect(()=>{
        const fetchCast = async () =>{
            setAppStatus(STATUSES.PENDING);
            try {
                const response = await getMovieCast(movieId);
                if(!response.cast){
                    setError('❌ Sorry, something went wrong! Cast information not found :(');
                    setAppStatus(STATUSES.REJECTED);
                }
                else{
                    const newCast = response.cast.slice(0, 10);
                    setCast(newCast);
                    setAppStatus(STATUSES.RESOLVED);
                }
            } catch (error) {
                setError(error?.response.data?.status_message);
                setAppStatus(STATUSES.REJECTED);
            }
        } 
        if(!movieId) return;
        fetchCast();
    }, [movieId]);


    return(
        <ul>
            {
                cast.map(({profile_path, original_name, character, cast_id}) => {
                    const imgPath = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : placeholder;
                    return (
                        <li key={cast_id}>
                            <img src={imgPath} alt={original_name} />
                            <p>{original_name}</p>
                            <p>{character}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Cast;