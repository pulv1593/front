import { Link, useState } from "react-router-dom";
import "./PostLayout.css";

  const PostLayout = ({post}) => {
		const [isDropdownOpen, setIsDropdownOpen] = useState(false);
		
    if (!post || post.length === 0) {
      return <div className="post-container">작성한 게시글이 없습니다.</div>;
    }
		
		const toggleDropdown = () => {
			setIsDropdownOpen(!isDropdownOpen);
		};
		
    return (
      <div className="post-container">
        <Link to={`/post/${post.postId}`}>
          <div className="image-container">
            <img src={post.image} alt="이미지"/> 
          </div>
          <div className="post-info-container">
						<div className="dropdown-container">
							<button onClick={toggleDropdown} className="dropdown-toggle">
								작성자: {post.member_id}
							</button>
							{isDropdownOpen && (
								<div className="dropdown-menu">
									<Link to={`/chat/start?member_id=${post.member_id}`} className="reciver-chat-link">쪽지 보내기</Link>
								</div>
							)}
						</div>
            <p>{post.title}</p>
          </div>
        </Link>
      </div>
    );
  };
  
export default PostLayout;