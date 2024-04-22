import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";

const accessToken = localStorage.getItem('access_token');
const backend_uri = 'backend.com';

const RequestList = async () => {
  try {
    const response = await axios.get(`${backend_uri}/mypage/list`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const posts = response.data.filter(post => post.member_id === member_id);
    console.log(posts);
    return (
      <div>
        <h1>내 질문 목록</h1>
        <div className="questionBtn-container" style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Link to="/code/ask" style={{
            backgroundColor: "#ff9e9e",
            margin: "5px",
            padding: "5px 10px",
            border: "1px solid black",
            color: "black",
            textDecoration: "none"
          }}> 질문하기 </Link>
        </div>
        <PostLayout posts={posts} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts: ', error);
    return (
			<div>Error fetching posts</div>
		);
  }
};

export default RequestList;