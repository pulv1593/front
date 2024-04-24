import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MyPostLayout from "../../components/PostLayout/MyPost/MyPostLayout";
import axios from "axios";

const RequestList = () => {
	const [posts, setPosts] = useState([]);
	const back = 'https://k9bceeba41403a.user-app.krampoline.com/mypage/list';
	
	useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get(`${back}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const myPosts = response.data;
        console.log(myPosts);
        setPosts(myPosts);
      } catch (error) {
        console.error('Error fetching posts: ', error);
      }
    };
    fetchPosts();
  }, []);

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
					textDecoration: "none",
				}}> 질문하기 </Link>
			</div>
			<MyPostLayout posts={posts} />
		</div>
	)
};

export default RequestList;