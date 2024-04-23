import { Link } from "react-router-dom";
import "./PostLayout.css";

  const PostLayout = ({post}) => {
    if (!post || post.length === 0) {
      return <div className="post-container">게시글이 없습니다.</div>;
    }
		
    return (
      <div className="post-container">
        <Link to={`/post/${post.postId}`}>
          <div className="image-container">
            <img src={post.imgBase64} alt="사진"/> 
          </div>
          <div className="post-info-container">
            <p>작성자: {post.member_id}</p>
            <p>{post.title}</p>
          </div>
        </Link>
        <Link to="/code" className="ans-Btn">
          답변
        </Link>
      </div>
    );
  };
  
export default PostLayout;