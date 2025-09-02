import './AdminPage.css';

const AdminPage = () => {
    return (
        <div id="AdminPage">
            <h2>영화 관리</h2>
            <table className="movie-table">
                <thead>
                    <tr>
                        <th>영화 제목</th>
                        <th>상세 정보</th>
                        <th>수정</th>
                        <th>삭제</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>영화1</td>
                        <td>내용1</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화2</td>
                        <td>내용2</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화3</td>
                        <td>내용3</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화4</td>
                        <td>내용4</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화5</td>
                        <td>내용5</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화6</td>
                        <td>내용6</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화7</td>
                        <td>내용7</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>영화8</td>
                        <td>내용8</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                       <tr>
                        <td>영화9</td>
                        <td>내용9</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                       <tr>
                        <td>영화10</td>
                        <td>내용10</td>
                        <td><button>수정</button></td>
                        <td><button>삭제</button></td>
                        <td><input type="checkbox" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default AdminPage;