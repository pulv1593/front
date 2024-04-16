import { useState } from "react"
import posts from "../../components/postData/postData";
import { useNavigate} from "react-router-dom";

function CodeQuestion () {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handlePostSubmit = () => {
    // 새로운 게시글 객체 생성
    const newPost = {
      id: posts.length + 1, // 새로운 게시글의 id 설정
      title: title,
      content: content,
      // 추가 필요한 다른 속성들도 여기에 포함시킬 수 있습니다.
    };

    // 새로운 게시글을 기존의 게시글 목록에 추가
    posts.push(newPost);
    console.log('새로운 게시글이 추가되었습니다:', newPost);

    navigate("/code")
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="제목"/>
      <input value={content} onChange={handleInputChange} placeholder="내용"/>
      <button onClick={handlePostSubmit}>작성하기</button>
    </div>
  );
}

export default CodeQuestion