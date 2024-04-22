import { useState } from "react";
import axios from "axios";
import posts from "../../components/postData/postData";
import { useNavigate } from "react-router-dom";

function CodeQuestion () {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [image, setImage] = useState('');
	// const [member_id, setMember_id];
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setContents(e.target.value);
  };

// 이미지 파일형식으로 image 변수에 저장.
// 	e를 image에 할당해서 보내주기.(jpeg 파일)
	const handleImageChange = (e) => {
		if(e.target.files[0]) {
			const file = e.target.files[0];
			setImage(file);
		}
		console.log(image);
	};

	
//작성하기 버튼 클릭시 post 정보를 db에 전달.(member_id 처리는 어떻게 할건지?)
  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('contents', contents);
		// formData.append('member_id', member_id)
    try {
      const response = await axios.post('http://your-backend-url/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${yourAccessToken}`,  // 토큰 사용 예시
        },
      });

      console.log('Server response:', response);
      navigate("/code");
    } catch (error) {
      console.error('Error posting the data', error);
    }
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
        value={contents} 
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
