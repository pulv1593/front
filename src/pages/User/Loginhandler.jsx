import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = () => {
	const navigate = useNavigate();
	// const back = 'https//k9bceeba41403a.user-app.krampoline.com/login/oauth2/code/kakao/auth/kakao/token';
	const back = import.meta.env.VITE_BACK_KAKAO_REDIRECT_URI;
	const redirect_uri = import.meta.env.VITE_FRONT_KAKAO_REDIRECT_URI;
	// const redirect_uri = 'https://k56733b335962a.user-app.krampoline.com/login/oauth2/callback/kakao';
	const code = new URL(window.location.href).searchParams.get("code");
// 인가코드 백으로 보내는 작업 하는곳
	useEffect(() => {
    const kakaoLogin = async () => {
			try {
				const res = await axios.post(`${back}`,{
					code,
					redirect_uri,
				});
				localStorage.setItem("access_token", res.data.access_token);
				console.log(res);
				navigate("/code");
			} catch (error){
				console.error("Error occured", error);
				console.log(code);
				console.log(redirect_uri);
				navigate("/");
				}
			};
		if(code) {
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