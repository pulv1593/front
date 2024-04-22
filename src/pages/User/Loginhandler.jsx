import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = () => {
	const navigate = useNavigate();
	const back = 'https://k9bceeba41403a.user-app.krampoline.com';
	// const back = import.meta.env.VITE_BACK_REDIRECT_URI;
	const back2 = 'https://k9bceeba41403a.user-app.krampoline.com/login/oauth2/code/kakao/auth/kakao/token'
	// const redirect_uri = 'https://k56733b335962a.user-app.krampoline.com/login/oauth2/callback/kakao';
	const redirect_uri = import.meta.env.VITE_FRONT_KAKAO_REDIRECT_URI;
	const code = new URL(window.location.href).searchParams.get("code");
	
// 인가코드 백으로 보내는 작업 하는곳
	const [prevCode, setPrevCode] = useState(null);
	
	useEffect(() => {
    const kakaoLogin = async () => {
		// 이미 로그인 진행 시 중복 요청 방지
		try {
			// 	https://k9bceeba41403a.user-app.krampoline.com/reqlogin/{인가코드}
			const res = await axios.get(`${back}/reqlogin/${encodeURIComponent(code)}`);
			localStorage.setItem("access_token", res.data.access_token);
			console.log(res);
			console.log("성공" + code);
			navigate("/code");
		} catch (error){
			console.error("Error occured", error);
			console.log(code);
			navigate("/");
			} 
		};
		if(code && code!=prevCode) {
			kakaoLogin();
			setPrevCode(code);
		}
	}, [code, navigate, prevCode]);
	
  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;