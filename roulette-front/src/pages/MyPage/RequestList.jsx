import { Link } from "react-router-dom"
import PostLayout from "../../components/PostLayout/PostLayout"
import posts from "../../components/postData/postData"

const RequestList = () => {
  
  return (
    <div>
      <h1>내 질문 목록</h1>
      <div className="questionBtn-container" style={{display: "flex", flexDirection:"row-reverse"}}>
          <Link to="/code/ask" style={{
            backgroundColor:"#ff9e9e",
            margin:"5px",
            padding:"5px 10px", 
            border:"1px solid black",
            color: "black", 
            textDecoration: "none"}}> 질문하기 </Link>
        </div>
        <PostLayout />
    </div>
  )
}

export default RequestList