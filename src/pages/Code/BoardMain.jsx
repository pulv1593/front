import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const BoardMain = ({ defaultCurrentPage }) => {
	const { currentPage } = useParams(); // 수정: currentPage로 변경
  const currentPageValue = currentPage || defaultCurrentPage || 0;
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(currentPageValue);
  
  const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI;

  const fetchPosts = async () => {
		const access_token = localStorage.getItem('access_token');
    try {
      const response = await axios.get(`${redirect_uri}/post/list/${currentPage}`, {
				headers: {
        	Authorization: `Bearer ${access_token}`
      	}
			});
      const res = response.data;
      setPosts(res.posts);
      setTotalPages(res.totalPages);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // 메인페이지 default : page = 0
  useEffect(() => {
    fetchPosts();
  }, [currentPage]); // currentPage가 변경될 때마다 fetchPosts 함수를 호출합니다.

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
  )
}

export default BoardMain;