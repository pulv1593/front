import { NavLink } from "react-router-dom"
import PostLayout from "../../components/PostLayout/PostLayout"

const RequestList = () => {
  // posts는 레이아웃 구성을 위해 임의로 작성하였음.
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
  ]

  return (
    <div>
      <h1>내 질문 목록</h1>
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
  )
}

export default RequestList