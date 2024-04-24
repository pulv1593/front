import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PostDetailReq() {
  const { postId } = useParams();
  // const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const [post, setPost] = useState(null);
	const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI;
	
  // const handleAnswer = () => {
  //   navigate(`/post/preview?codeId=${codeId}`);
  // };
	
	useEffect(() => {
		const fetchposts = async () => {
			try {
				const access_token = localStorage.getItem('access_token');
				const response = await axios.get(`${redirect_uri}/post/${postIdNum}`, {
						headers: {
							Authorization: `Bearer ${access_token}`,
						}
					});
					const res = response.data;
					setPost(res);

				} catch (error) {
					console.error('Error fetching posts:', error);
				}
			};
    fetchposts();
  }, [postId]);

  return (
  <div className='postDetail-container'>
    {post ? (
      <div>
        <h1>{post.title}</h1>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
          <div className="post-information" style={{padding:"10px"}}>
            <div style={{backgroundColor:"#FF9E9E", width:"500px", height:"500px"}}>
              <img src={`data:image/png;base64,${post.imgBase64}`} alt="사진" />
            </div>
            <p>{post.name}</p>
            <p>{post.content}</p>
          </div>
          <div className='answerList-container' style={{border:"1px solid black", margin:"10px", padding:"10px", width:"800px", height:"600px"}}>
            <div className='answerDetail' style={{ backgroundColor:"#d5d5d5"}}>
              <div style={{display:"flex", flexDirection:"row",  justifyContent:"space-between", alignItems:"center"}}>
                <img alt='결과물 사진' style={{margin:"5px"}}/>
                <div>
                  <p>답변자 닉네임</p>
                  <p>작성된 날짜</p>
                </div>
                <button style={{width:"60px", height:"40px", marginRight:"10px", fontSize:"20px"}}> 코드 미리보기 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </div>
);
}

export default PostDetailReq;