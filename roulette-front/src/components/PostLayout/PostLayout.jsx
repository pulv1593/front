import "./PostLayout.css";

function PostLayout({ posts }) {

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < posts.length; i += 4) {
      const row = posts.slice(i, i + 4);
      rows.push(row);
    }
    return rows;
  };

  return (
    <div className="post-container">
      {createRows().map((row, index) => (
        <div className="post-row" key={index}>
          {row.map(post => (
            <div className="post" key={post.id}>
              <div className="postImage">
                <img id="postImage" src={post.image} alt="사진" />
              </div>
              <div className="post-info">
                <div className="profileImage">  
                  <img id="user-profile" src={post.userProfile} alt="프로필"/>
                </div>
                <div className="postTitle">
                  {post.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PostLayout