import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import axios from "axios";
import './ReviewList.css';

const ReviewList = () => {
    const [isReady, setIsReady] = useState(false);
    const [review, setReview] = useState([]);
    useEffect(() => {
    fetchReview();
  }, [])
    const fetchReview = async () => {
        try {
            const res = await axios.get('/data/reviewData.json');
            setReview(res.data);
        } catch (e) {
            console.e('데이터 로딩 실패 :', e);
        } finally {
            setIsReady(true);
        }
    };
    if(!isReady){
    return <div>데이터 로딩 중 ...</div>
  }
    return(
        <div id="ReviewList">
            <ul>
                {review.map(rev=> <ReviewCard key={rev.id} review={rev}/>)}
            </ul>
            <button>더보기</button>
        </div>
    )
}
export default ReviewList;