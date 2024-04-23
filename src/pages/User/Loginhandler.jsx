import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = () => {
	const navigate = useNavigate();
	const back = 'https://k9bceeba41403a.user-app.krampoline.com/reqlogin';
	// const back = import.meta.env.VITE_BACK_REDIRECT_URI;
	// const back2 = 'https://k9bceeba41403a.user-app.krampoline.com/login/oauth2/code/kakao/auth/kakao/token'
	// const redirect_uri = 'https://k56733b335962a.user-app.krampoline.com/login/oauth2/callback/kakao';
	const redirect_uri = import.meta.env.VITE_FRONT_KAKAO_REDIRECT_URI;
	const code = new URL(window.location.href).searchParams.get("code");
	
// 인가코드 백으로 보내는 작업 하는곳
	useEffect(() => {
    const kakaoLogin = async () => {
		try {
			const res = await axios.post(`${back}`, {
				access_code: code
			});
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("member_id", res.data.member_id);
			console.log(res);
			console.log("성공" + code);
			
			setTimeout(() => {
				navigate("/code");
			}, 100);
		} catch (error){
			console.error("Error occured", error);
			console.log(code);
			navigate("/");
			} 
	}; if(code) {
		kakaoLogin();
		}
	}, [code, navigate]);
	
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