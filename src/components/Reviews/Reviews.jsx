import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "api/api";
import { STATUSES } from 'constants/statuses';
import { ReviewsSection, ReviewsList } from './Reviews.styled';
import Loader from "components/Loader";
import { ErrorMessage } from "components/App/App.syled";

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

    if(appStatus === STATUSES.IDLE){
        return(<></>);
    }
    if(appStatus === STATUSES.PENDING){
        return(
            <ReviewsSection>
                <Loader/>
            </ReviewsSection>
        )
    }
    if(appStatus === STATUSES.RESOLVED){
        return(
            <ReviewsSection>
                <ReviewsList>
                    {
                        reviews.map(({author, content, created_at, id}) => {
                            const postDate = new Date(created_at);
                            const postDateDay = ("0" + postDate.getDate()).slice(-2);
                            const postDateMonth = ("0" + (postDate.getMonth() + 1)).slice(-2);
                            const postDateStr = `${postDateDay}.${postDateMonth}.${postDate.getFullYear()}`;
                            return (
                                <li key={id}>
                                    <p className="author">Author name: <span>{author}</span></p>
                                    <p className="date">Posted at: <span>{postDateStr}</span></p>
                                    <p className="content">{content}</p>
                                </li>
                            );
                        })
                    }
                </ReviewsList>
            </ReviewsSection>
        )
    }
    if(appStatus === STATUSES.REJECTED){
        return(
            <ReviewsSection>
                <ErrorMessage>{error}</ErrorMessage>
            </ReviewsSection>
        );
    };
};

export default Reviews;