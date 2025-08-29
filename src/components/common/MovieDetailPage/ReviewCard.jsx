import axios from 'axios';
import { useState } from 'react';

const ReviewCard = ({review}) => {
    
    return (
        <li className="ReviewCard">
            <div className="card-top">
                <div className="card-profile">
                    <p className="profile-img">
                        {/* <img src="" alt="" /> */}
                    </p>
                    <p className="info-nick">{review.nickName}</p>
                </div>
                <div className="card-stars">{review.star}</div>
            </div>
            <div className="card-mid">
                <p className="info-viewingdate">관람일: {review.viewingate}</p>
                <p className="info-accompany">
                    함께간 사람: {review.accompany}
                </p>
            </div>
            <div className="card-content">{review.content}</div>
            <div className="card-like">
                <button>좋아요</button>
                <p>0</p>
            </div>
        </li>
    );
};
export default ReviewCard;
