import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const BoardMain = () => {
  // 게시글 목록을 저장할 상태
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastPostElementRef = useRef(null);

// 	fetchPosts 함수 작성(게시글 정보 불러오기)
	const fetchPosts = async () => {
    if (loading || !hasMore) return;  // 이미 로딩 중이거나 더 불러올 데이터가 없으면 실행하지 않음

    setLoading(true);  // 데이터 로딩 시작
    try {
      const response = await axios.get(`${REDIRECT_URI}/code/list/${posts.length}`);
      setPosts(prevPosts => [...prevPosts, ...response.data]); // 기존 게시글에 새로운 게시글 추가
      setHasMore(response.data.length > 0); // 불러온 데이터가 없다면 더 이상 데이터가 없다고 설정
    } catch (error) {
      console.error('게시글을 불러오는 중 오류가 발생했습니다', error);
    }
    setLoading(false);  // 데이터 로딩 완료
  };
	
  useEffect(() => {
  	fetchPosts();  // 초기 로드를 위해 호출
	}, []);

  useEffect(() => {
		const options = {
			root: null,
			rootMargin: "100px",  // 뷰포트 끝에서 100px 전에 데이터 로드 시작
			threshold: 0
		};

		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore && !loading) {
				fetchPosts(); // 직접 데이터 불러오기 함수 호출
			}
		}, options);

		if (lastPostElementRef.current) {
			observer.observe(lastPostElementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [loading, hasMore, lastPostElementRef]);  // lastPostElementRef를 의존성 배열에 추가
	
// 	게시글 클릭시 이용자가 질문자, 답변자인지 구분 후 그에 맞는 페이지로 이동.

  return (
    <div>
      <h1>게시판</h1>
      <div className="BoardMain-container" style={{width: '100%', borderTop: '1px solid #ffe6e6' }}>
        <div className="questionBtn-container" style={{display: "flex", flexDirection:"row-reverse"}}>
          <Link to="/code/ask" style={{
            backgroundColor:"#ff9e9e",
            margin:"5px",
            padding:"5px 10px", 
            border:"1px solid black",
            color: "black", 
            textDecoration: "none"}}> 질문하기 </Link>
        </div>
        <div className="PostList-container">
          {/* 게시글 목록을 PostLayout 컴포넌트에 전달 */}
          {posts.map((post, index) => (
    				<PostLayout key={post.id} post={post} ref={posts.length === index + 1 ? lastPostElementRef : null} />
					))}
					{loading && <div style={{ textAlign: 'center', margin: '20px' }}>로딩 중...</div>}
        </div>
      </div>
    </div>
  );
};

export default BoardMain;