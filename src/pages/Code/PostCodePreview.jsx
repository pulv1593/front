import { useNavigate, useParams } from 'react-router-dom';
// import posts from '../../components/postData/postData';

const PostCodePreview = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const post = posts.find(p => p.id === postIdNum);
	const back_uri = import.meta.env.VITE_BACK_REDIRECT_URI;

  // post가 존재하지 않는 경우 처리
//   if (!post) {
//     return <div>Post not found</div>;
//   }
// 	useEffect (() => {
// 		const codePreview = async() => {
// 			try {
// 				const res = await axios.get(`${back_uri}/code/${code_id}`);
// 				console.log('response:', response.data);
// 			}
// 		}
// 	})
	
	const handleAnswer = () => {
// 	채택 axios 통신을 위한 페이지 이동.
		navigate(`/code/choice`);
	}

  // 
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <h1>{post.title}</h1>
        <div style={{alignItems:"center"}}>
          <button onClick={handleAnswer} style={{width:"100px", height:"40px", margin:"10px 10px", fontSize:"20px"}}> 채택 </button>
        </div>
      </div>
      <Editor />
    </div>
  );
}

export default PostCodePreview;