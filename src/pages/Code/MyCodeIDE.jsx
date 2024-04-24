import MyEditor from "../../components/CodeEditor/MyEditor/MyEditor";

const MyCodeIDE = () => {
	
  const handleCodeSave = () => {
		console.log('코드 저장 중...')
	};
	
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <h1>Roulette IDE</h1>
        <div style={{alignItems:"center"}}>
          <button onClick={handleCodeSave} style={{width:"100px", height:"40px", margin:"10px 10px", fontSize:"20px"}}> 저장 </button>
        </div>
      </div>
      <MyEditor onSaveMycode={handleCodeSave} />
    </div>
  );
}

export default MyCodeIDE;