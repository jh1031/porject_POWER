/* AdminPage.jsx */

import './AdminPage.css';
import React, { useState } from "react";

const AdminPage = () => {
    const [selectedMenu, setSelectedMenu] = useState("movie");

    // 버튼 핸들러들
    const handleEdit = (type, id) => {
        alert(`${type} ID:${id} 수정 버튼 클릭됨`);
    };

    const handleDelete = (type, id) => {
        if (window.confirm(`${type} ID:${id} 삭제하시겠습니까?`)) {
            alert(`${type} ID:${id} 삭제됨`);
        }
    };

    const handleSelect = (type, id) => {
        alert(`${type} ID:${id} 선택됨`);
    };

    return (
        <div id="AdminPage">
            <h2>관리자</h2>

            {/* 메뉴 버튼 */}
            <div className="container">
                <div onClick={() => setSelectedMenu("movie")}>영화 관리</div>
                <div onClick={() => setSelectedMenu("actor")}>배우 관리</div>
                <div onClick={() => setSelectedMenu("member")}>회원 관리</div>
                <div onClick={() => setSelectedMenu("inquiry")}>문의 관리</div>
            </div>

            {selectedMenu === "movie" && (
                <div>
                    <h2>영화 관리</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>영화 포스터</th>
                                <th>영화 제목</th>
                                <th>등록일</th>
                                <th>상세 정보</th>
                                <th>수정</th>
                                <th>삭제</th>
                                <th>선택</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>사진</td>
                                <td>극장판 귀멸의 칼날: 무한성편</td>
                                <td>2025-09-02</td>
                                <td>예시</td>
                                <td>
                                    <button onClick={() => handleEdit("영화", 1)}>수정</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete("영화", 1)}>삭제</button>
                                </td>
                                <td>
                                    <button onClick={() => handleSelect("영화", 1)}>선택</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {selectedMenu === "actor" && (
                <div>
                    <h2>배우 관리</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>생년월일</th>
                                <th>삭제</th>
                                <th>선택</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>배우 이름 예시</td>
                                <td>1990-01-01</td>
                                <td>
                                    <button onClick={() => handleDelete("배우", 1)}>삭제</button>
                                </td>
                                <td>
                                    <button onClick={() => handleSelect("배우", 1)}>선택</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {selectedMenu === "member" && (
                <div>
                    <h2>회원 관리</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>아이디</th>
                                <th>이메일</th>
                                <th>삭제</th>
                                <th>선택</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>testUser</td>
                                <td>test@example.com</td>
                                <td>
                                    <button onClick={() => handleDelete("회원", 1)}>삭제</button>
                                </td>
                                <td>
                                    <button onClick={() => handleSelect("회원", 1)}>선택</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {selectedMenu === "inquiry" && (
                <div>
                    <h2>문의 관리</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>삭제</th>
                                <th>선택</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>문의 제목 예시</td>
                                <td>도라에몽</td>
                                <td>
                                    <button onClick={() => handleDelete("문의", 1)}>삭제</button>
                                </td>
                                <td>
                                    <button onClick={() => handleSelect("문의", 1)}>선택</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default AdminPage;