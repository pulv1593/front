import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import "./PostLayout.css";

  const PostLayout = ({post}) => {
		const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	  	const back = 'https://k9bceeba41403a.user-app.krampoline.com';
	  
	  	const startChating = async () => {
			const my_member_id = localStorage.getItem('member_id');
			const chat_member_id = post.memberId;
			const chat_message = '대화을 시작합니다.';
			
			try {
				const res = await axios.post(`${back}/chat/start`, {
					sender: my_member_id,
					reciver: chat_member_id,
					message: chat_message,
				});
				console.log('대화 시작');
				
			} catch (error) {
				alert('대화 요청을 실패하였습니다.');
			}
		};
		
    if (!post || post.length === 0) {
      return <div className="post-container">게시글이 없습니다.</div>;
    }
		
		const toggleDropdown = () => {
			setIsDropdownOpen(!isDropdownOpen);
		};
		
    return (
      <div className="post-container">
        <Link to={`/post/${post.postId}`}>
          <div className="image-container">
          <img src={`data:image/png;base64,${post.imgBase64}`} alt="사진" />
          </div>
          <div className="post-info-container">
						<div className="dropdown-container">
							<button onClick={toggleDropdown} className="dropdown-toggle">
								작성자: {post.name}
							</button>
							{isDropdownOpen && (
								<div className="dropdown-menu">
									<Link to={`${back}/chat/start?memberId=${post.memberId}`} className="reciver-chat-link">쪽지 보내기</Link>
								</div>
							)}
						</div>
            <p>{post.title}</p>
          </div>
        </Link>
        <Link to={`/reply?postId=${post.postId}`} className="ans-Btn">
          답변
        </Link>
      </div>
    );
  };
  
export default PostLayout;