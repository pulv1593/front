import { useNavigate, useParams, useEffect } from "react-router-dom";
import Editor from "../../components/CodeEditor/Editor";

const MyCodeIDE = () => {

  const openImageInNewTab = () => {
    window.open(post.image, '_blank');
  };
	
  const handleCodeSave = () => {
		console.log('코드 저장 중...')
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
      <Editor onSaveMycode={handleCodeSave} />
    </div>
  );
}

export default MyCodeIDE;