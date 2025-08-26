const review = {
    id: 7,
    nickName: '캬라멜',
    star: 1,
    createdDate: '2025-08-21',
    accompany: '연인',
    viewingate: '2025-08-20',
    content:
        '기대했는데 너무 실망했어요. 개연성이 부족하고 전개가 엉성해서 이해하기 어려웠습니다. 돈이 좀 아까웠네요.',
};
const ReviewCard = () => {
    return (
        <li className="ReviewCard">
            <div className="card-top">
                <div className="card-profile">
                    <p className="profile-img"><img src="" alt=""/></p>
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
            <div className="card-content">
                {review.content}
            </div>
            <div className="card-like">
                <button>좋아요</button>
                <p>0</p>
            </div>
        </li>
    );
};
export default ReviewCard;
