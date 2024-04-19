import { useState } from "react"
import posts from "../../components/postData/postData";
import { useNavigate } from "react-router-dom";

function CodeQuestion () {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지는 base64 형식으로 받아야 함.
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      // Create a URL for the file
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePostSubmit = () => {
    // 새로운 게시글 객체 생성
    const newPost = {
      id: posts.length + 1, // 새로운 게시글의 id 설정
      title: title,
      content: content,
      image: image,
      // 추가 필요한 다른 속성들도 여기에 포함시킬 수 있습니다.
    };

    // 새로운 게시글을 기존의 게시글 목록에 추가
    posts.push(newPost);
    console.log('새로운 게시글이 추가되었습니다:', newPost);

    navigate("/code")
  };

  return (
    <div className="Request-container" style={{display:"flex", flexDirection:"column", padding:"10px" ,border: "1px solid black", borderRadius:"3px"}}>
      <input 
        type="text" 
        value={title} 
        onChange={handleTitleChange} 
        placeholder="제목"
        style={{margin:"5px 0px", width:"50%"}}
      />
      <textarea
        value={content} 
        onChange={handleInputChange} 
        placeholder="내용"
        style={{
          margin:"auto",
          height:"200px", // 고정 높이
          width: "100%", // 너비를 부모 컨테이너의 100%로 설정
          resize: "none", // 크기 조절 비활성화
          overflowY: "auto"}} // 내용이 높이를 초과하면 스크롤바 표시
      />
      <input 
        type="file" 
        onChange={handleImageChange} 
        style={{margin:"5px 0px"}}
      />
      <button onClick={handlePostSubmit}>작성하기</button>
    </div>
  );
}

export default CodeQuestion
