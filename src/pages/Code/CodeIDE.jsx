import { useParams } from "react-router-dom";
import Editor from "../../components/CodeEditor/Editor";
import { useEffect, useState } from "react";
import axios from "axios";

// component

const CodeIDE = () => {
  const { postId } = useParams();
  const postIdNum = parseInt(postId, 10);
  const [post, setPost] = useState(null);
	const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI 
	
	useEffect(() => {
    const fetchPosts = async () => {
      try {
        const access_token = localStorage.getItem('access_token');
        const response = await axios.get(`${redirect_uri}/post/${postId}`, {
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
    fetchPosts();
  }, [postIdNum]);

  // post가 존재하지 않는 경우 처리
  if (!post) {
    return <div>Post not found</div>;
  }
	
  const openImageInNewTab = () => {
    window.open(post.image, '_blank');
  };
	
  const handleCodeSave = () => {
		console.log('답변 저장 중...')
	};

  // post가 존재하는 경우, 해당 post의 상세 정보를 표시
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <h1>{post.title}</h1>
        <div style={{alignItems:"center"}}>
          <button onClick={openImageInNewTab} style={{width:"110px", height:"40px", margin:"10px 10px", fontSize:"20px"}}>이미지 확대</button>
          <button onClick={handleCodeSave} style={{width:"100px", height:"40px", margin:"10px 10px", fontSize:"20px"}}> 저장 </button>
        </div>
      </div>
      <Editor onSave={handleCodeSave} postId={postIdNum} />
    </div>
  );
}

export default CodeIDE;