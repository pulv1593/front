import { Link } from "react-router-dom";
import "./PostLayout.css";
import posts from "../postData/postData";

function PostLayout() {
  
  if (!posts || posts.length === 0) {
    return <div className="post-container">게시글이 없습니다.</div>;
  }

  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <div className="post" key={post.id}>
          <Link to={`/code/${post.id}`} style={{textDecoration: "none", color: "black"}}>
            <div className="postImage">
              <img id="postImage" src={post.image} alt="사진" />
            </div>
            <div className="post-info">
              <div className="profileImage">  
                <img id="user-profile" src={post.userProfile} alt="프로필"/>
              </div>
              <div className="postTitle">
                {post.title}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostLayout