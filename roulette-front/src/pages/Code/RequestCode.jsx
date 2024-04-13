
const CodeQuestion = () => {
  return (
    <div className="MainRequest-container">
      질문글 작성하기 페이지
      <div className="Request-container">
        <input type="text" placeholder="제목"/>
        <input type="text" placeholder="사진에 대한 설명을 상세히 적어주세요."/>
        <input type="text" placeholder="사진"/>
      </div>
      <button className="RequestPost-btn"> 작성하기 </button>
    </div>
  )
}

export default CodeQuestion