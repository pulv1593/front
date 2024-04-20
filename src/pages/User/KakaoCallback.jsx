import axios from "axios";

function KakaoCallback = () => {
  
	useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    
    //spring 서버로 인증키를 통해 유저정보를 획득하고 로그인 처리 요청
    axios.post('/api/client/login/oauth/kakao', {
      authorizationCode: code
    }).then((response) => {
      
        //spring에서 발급된 jwt localStorage 저장
        localStorage.setItem("accessToken", response.headers.accesstoken);
      
        //메인 페이지로 이동
        window.location.href = "/code";
      }).catch((err) => {
        //에러발생 시 login 페이지 이동
        alert(err.response.data.detail);
      
        window.location.href = "/user";
      })
  }, []);
  return (
    <div>
      <Loading />
    </div>
  )
}

export default KakaoCallback;
