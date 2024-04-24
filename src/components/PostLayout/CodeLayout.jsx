import { Link, useNavigate } from "react-router-dom";
import "./PostLayout.css";

const CodeLayout = ({ postId, code }) => {
    const navigate = useNavigate(); // navigate 함수를 여기서 사용하지 않는다면 제거 가능
	const post_Id = postId;

    return (
        <div className='answerContainer' style={{ backgroundColor: "#d5d5d5" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <p>답변자: {code.memberName}</p>
                    <p>작성시간: {code.createTime}</p>
                </div>
                <Link to={`/post/preview?postId=${post_Id}&replyId=${code.replyId}`} className="preview-Btn">
                    미리보기
                </Link>
            </div>
        </div>
    );
};

export default CodeLayout; 