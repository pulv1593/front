import { useNavigate, useParams } from "react-router-dom";
import posts from "../../components/postData/postData";
import Editor from "../../components/CodeEditor/Editor";

// component

const CodeIDE = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const post = posts.find(p => p.id === postIdNum);

  // post가 존재하지 않는 경우 처리
  if (!post) {
    return <div>Post not found</div>;
  }

  const openImageInNewTab = () => {
    window.open(post.image, '_blank');
  };

  const handleAnswer = () => {
    navigate(`/code/${postId}`); // 질문 상세 페이지로 이동
  };

  // post가 존재하는 경우, 해당 post의 상세 정보를 표시
  return (
    <div>
      <div className="flex flex-row justify-between items-center ml-3 mt-3">
        <h1 className="text-3xl font-bold ">{post.title}</h1>
        <div className="flex items-center">
          <button onClick={openImageInNewTab} className="w-28 h-10 mx-2 text-xl border boeder-black">이미지 확대</button>
          <button onClick={handleAnswer} className="w-25 h-10 mx-2 text-xl border boeder-black">저장</button>
        </div>
      </div>
      <Editor />
    </div>
  );
}

export default CodeIDE