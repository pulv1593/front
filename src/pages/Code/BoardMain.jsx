import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const BoardMain = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // 페이지 default가 0
  const [totalPages, setTotalPages] = useState(1);
  
  const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI;
  const access_token = localStorage.getItem('access_token');

// 	메인페이지 default : page = 0
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${redirect_uri}/post/list/${currentPage}`);
        const res = response.data;
        setPosts(res.posts);
        setTotalPages(res.totalPages); // 받아온 totalPages 값을 설정합니다.
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
		<div>
      <h1>게시판</h1>
      <div className="BoardMain-container" style={{width: '100%', borderTop: '1px solid #ffe6e6'}} >
				<div className="questionBtn-container" style={{ display: "flex", flexDirection: "row-reverse" }}>
					<Link to="/post/ask" style={{
        		backgroundColor: "#ff9e9e",
        		margin: "5px",
      			padding: "5px 10px",
        		border: "1px solid black",
        		color: "black",
        		textDecoration: "none"
          }}> 질문하기 </Link>
        </div>
				<div className="post-list-container">
					{posts.map(post => (
          	<PostLayout key={post.postId} post={post} />
        	))}
				</div>
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map(pageNumber => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardMain;