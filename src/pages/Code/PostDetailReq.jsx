import { useNavigate, useParams } from 'react-router-dom';
// import posts from '../../components/postData/postData';

function PostDetailReq() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const post = posts.find(p => p.id === postIdNum);

  // id에 해당하는 post가 존재하지 않을 경우.
  if (!post) {
      return <div>Post not found</div>;
  }

  const handleAnswer = () => {
    navigate(`/css/${postId}`); // 답변 작성 페이지로 이동
  };

  return (
      <div className='postDetail-container'>
        <h1>{post.title}</h1>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
          <div className="post-information" style={{padding:"10px"}}>
            <div style={{backgroundColor:"#FF9E9E", width:"500px", height:"500px"}}>
              <img src={post.image} alt="사진" />
            </div>
            <p>{post.content}</p>
            <button> 삭제 </button>
          </div>
          <div className='answerList-container' style={{border:"1px solid black", margin:"10px", padding:"10px", width:"800px", height:"600px"}}>
            <div className='answerDetail' style={{ backgroundColor:"#d5d5d5"}}>
              <div style={{display:"flex", flexDirection:"row",  justifyContent:"space-between", alignItems:"center"}}>
                <img alt='결과물 사진' style={{margin:"5px"}}/>
                <div>
                  <img src={post.userProfile} alt="사진" />
                  <p>답변자 닉네임</p>
                  <p>작성된 날짜</p>
                </div>
                <button onClick={handleAnswer} style={{width:"60px", height:"40px", marginRight:"10px", fontSize:"20px"}}> 채택 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PostDetailReq;