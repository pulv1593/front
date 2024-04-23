import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const BoardMain = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
	
	const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${redirect_uri}/post/list`, {
					headers: {
						Authorization : `Bearer: ${access_token}`
					}
				});
        setPosts(response.data);
        setLoading(false);

        // 총 페이지 수 계산
        const totalPosts = response.data.length;
        const totalPages = Math.ceil(totalPosts / 8);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("게시글을 불러오는 중 에러 발생:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 페이지를 변경할 때 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>게시판</h1>
      <div className="BoardMain-container" style={{ width: '100%', borderTop: '1px solid #ffe6e6' }}>
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
        <div className="PostList-container">
          {posts
            .slice((currentPage - 1) * 8, currentPage * 8)
            .map((post, index) => (
              <PostLayout key={index} post={post} />
            ))}
          {loading && <div style={{ textAlign: 'center', margin: '20px' }}>로딩 중...</div>}
        </div>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMain;