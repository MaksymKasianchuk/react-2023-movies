import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "api/api";
import { STATUSES } from 'constants/statuses';
import placeholder from 'img/404.jpg';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const [appStatus, setAppStatus] = useState(STATUSES.IDLE);

    useEffect(()=>{
        const fetchReviews = async () =>{
            setAppStatus(STATUSES.PENDING);
            try {
                const response = await getMovieReviews(movieId);
                console.log(response);
                if(!response || response.length === 0){
                    setError('❌ Sorry, something went wrong! Reviews not found :(');
                    setAppStatus(STATUSES.REJECTED);
                }
                else{
                    setReviews(response);
                    setAppStatus(STATUSES.RESOLVED);
                }
            } catch (error) {
                setError(error?.response.data?.status_message);
                setAppStatus(STATUSES.REJECTED);
            }
        } 
        if(!movieId) return;
        fetchReviews();
    }, [movieId]);

    return(
        <ul>
            {
                reviews.map(({author, content, created_at, id}) => {
                    const postDate = new Date(created_at);
                    const postDateDay = ("0" + postDate.getDate()).slice(-2);
                    const postDateMonth = ("0" + (postDate.getMonth() + 1)).slice(-2);
                    const postDateStr = `${postDateDay}.${postDateMonth}.${postDate.getFullYear()}`;
                    return (
                        <li key={id}>
                            <p>Author name: {author}</p>
                            <p>Posted at: {postDateStr}</p>
                            <p>{content}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Reviews;