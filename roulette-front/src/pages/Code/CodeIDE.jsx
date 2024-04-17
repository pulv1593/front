import { useNavigate, useParams } from "react-router-dom";
import posts from "../../components/postData/postData";

const CodeIDE = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const post = posts.find(p => p.id === postIdNum);

  // post가 존재하지 않는 경우 처리
  if (!post) {
    return <div>Post not found</div>;
  }

  const handleAnswer = () => {
    navigate(`/code/${postId}`); // 질문 상세 페이지로 이동
  };

  // post가 존재하는 경우, 해당 post의 상세 정보를 표시
  return (
    <div>
      <h1>{post.title}</h1>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
          <div className="post-information" style={{padding:"10px"}}>
            <div style={{backgroundColor:"#FF9E9E", width:"500px", height:"500px"}}>
              <img src={post.image} alt="사진" />
            </div>
            <p>{post.content}</p>
          </div>
          {/* web ide 기능 구현 */}
          <div className='IDE-container' style={{border:"1px solid black", margin:"10px", padding:"10px", width:"800px", height:"600px"}}>
            <div className='webIDE' style={{ backgroundColor:"#d5d5d5"}}>
              web IDE
            </div>
          </div>
          <button onClick={handleAnswer} style={{width:"60px", height:"40px", margin:"10px 10px", fontSize:"20px"}}> 저장 </button>
        </div>
    </div>
  );
}

export default CodeIDE