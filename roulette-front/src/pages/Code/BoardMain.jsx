import { NavLink } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";

const BoardMain = () => {
  // post 하드코딩을 위해 작성됨(추후 수정할 예정)
  const posts = [
    { 
      id: 1,
      content: "게시글1",
      userProfile: "이미지",
      image: "사진"
    },
    { 
      id: 2,
      content: "게시글2",
      userProfile: "이미지",
      image: "사진"
    },
    { 
      id: 3,
      content: "게시글3",
      userProfile: "이미지",
      image: "사진"
    },
    { 
      id: 4,
      content: "게시글4",
      userProfile: "이미지",
      image: "사진"
    },
    { 
      id: 5,
      content: "게시글5",
      userProfile: "이미지",
      image: "사진"
    },
  ];

  return (
    <div>
      <h1>게시판</h1>
      <div className="BoardMain-container" style={{width: '100%', borderTop: '1px solid #ffe6e6' }}>

        <NavLink to="/code/ask" className="Post_btn" style={{display:'flex', flexDirection: 'row-reverse', paddingRight:'10%', textDecoration: 'none',}}>
          <button style={{
            margin: '10px 10px 0 0',
            backgroundColor: '#ffe6e6',
            border: '1px solid black',
            width: '100px',
            height: '40px',
            fontSize: '20px',
            fontWeight: 'normal',
          }}> 질 문 하 기 
          </button>
        </NavLink>

        <div className="PostList-container">
          <PostLayout posts={posts}/>
        </div>
      </div>

    </div>
  );
};

export default BoardMain