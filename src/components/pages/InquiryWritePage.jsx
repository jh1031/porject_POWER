import './InquiryWritePage.css';

const InquiryWritePage = () => {
    return (
        <div id="InquiryWritePage">
            <div className="Help-inquirywr01">
                <h2>문의 유형 선택</h2>
                <div className="Help">
                    <button className="categoryGroup">회원정보</button>
                    <button className="categoryGroup">영화 추천</button>
                    <button className="categoryGroup">수정 요청</button>
                    <button className="categoryGroup">서비스</button>
                </div>
            </div>
            <div className="title-inquirywr01">
                <h2>제목</h2>
                <div className="title">
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                    />
                </div>
            </div>
            <div className="content-inquirywr01">
                <h2>내용</h2>
                <div className="content">
                    <input
                        type="text"
                        placeholder="문의 하실 내용을 입력해주세요."
                    />
                </div>
            </div>
            <div className="picture-inquirywr01">
                <h2>사진 추가하기</h2>
                <div className='photo-upload'>
                    <input
                        type="file"
                        placeholder='클릭하여 사진 추가하기'
                    />
                </div>
            </div>
            <div className="click-inquirywr01">
                <button className='click-button'>문의하기</button>
            </div>
        </div>
    )
}

export default InquiryWritePage;