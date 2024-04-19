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
    <div className="flex flex-col p-2 border border-black rounded">
      <input 
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="제목"
        className="my-1 w-1/2"
      />
      <textarea
        value={content}
        onChange={handleInputChange}
        placeholder="내용"
        className="mx-auto my-1 h-50 w-full resize-none overflow-y-auto"
      />
      <input 
        type="file"
        onChange={handleImageChange}
        className="my-1"
      />
      <button onClick={handlePostSubmit} className="mt-2">작성하기</button>
    </div>
  );
}

export default CodeQuestion
