import "./InquiryWritePage.css";
import React, { useState } from "react";

const InquiryWritePage = () => {
  const [completion, setCompletion] = useState(""); // 문의하기
  const [title, setTitle] = useState(""); // 제목 글자수 카운팅
  const [content, setContent] = useState(""); // 내용 글자수 카운팅
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [error, setError] = useState("");

  const handleClickk = (categorys) => {
    setCompletion(categorys);
    alert(categorys + "");
  };

  const buttons = document.querySelectorAll(".categoryGroup");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 모든 버튼에서 active 제거
      buttons.forEach((b) => b.classList.remove("active"));
      // 클릭한 버튼만 active 추가
      btn.classList.add("active");
    });
  });

  //글자 수
  const MAX_LENGTH = 30;
  const MAX_CONTENT = 300;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setTitle(e.target.value);
    }
  };

  const handleContenChange = (e) => {
    if (e.target.value.length <= MAX_CONTENT) {
      setContent(e.target.value);
    }
  };

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
            value={title}
            onChange={handleTitleChange}
            maxLength={MAX_LENGTH}
          />
          <div className="count">
            {title.length}/{MAX_LENGTH} byte
          </div>
        </div>
      </div>
      <div className="content-inquirywr01">
        <h2>내용</h2>
        <div className="content">
          <input
            type="text"
            placeholder="문의 하실 내용을 입력해주세요."
            value={content}
            onChange={handleContenChange}
            maxLength={MAX_CONTENT}
          />
          <div className="counter">
            {content.length}/{MAX_CONTENT} byte!
          </div>
        </div>
      </div>
      <div className="picture-inquirywr01">
        <h2>사진 추가하기</h2>
        <div className="photo-upload">
          <input type="file" placeholder="클릭하여 사진 추가하기" />
        </div>
      </div>
      <div className="click-inquirywr01">
        <button
          className="click-button"
          onClick={() => handleClickk("문의 작성 완료하시겠습니까?")}
        >
          문의하기
        </button>
      </div>
    </div>
  );
};

export default InquiryWritePage;
