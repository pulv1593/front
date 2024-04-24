import './MyPostLayout.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPostLayout = ({ posts }) => {
  const [dropdownPostId, setDropdownPostId] = useState(null);
		
  if (!posts || posts.length === 0) {
    return <div className="post-container">작성한 게시글이 없습니다.</div>;
  }
		
  const toggleDropdown = (postId) => {
    setDropdownPostId(postId === dropdownPostId ? null : postId);
  };

  return (
    <div className='postlist-container'>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="image-container">
            <img src={post.image} alt="이미지"/> 
          </div>
          <div className="post-info-container">
            <div className="dropdown-container">
              <button onClick={() => toggleDropdown(post.postId)} className="dropdown-toggle">
                작성자: {posts.member_id}
              </button>
              {dropdownPostId === post.postId && (
                <div className="dropdown-menu">
                  <Link to={`/chat/start?member_id=${posts.member_id}`} className="receiver-chat-link">쪽지 보내기</Link>
                </div>
              )}
            </div>
            <div className='post-title'>
              <p>제목: {post.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPostLayout;