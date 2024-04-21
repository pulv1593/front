import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = () => {
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get("code");
// 인가코드 백으로 보내는 작업 하는곳
	useEffect(() => {
    const kakaoLogin = async () => {
			try {
				const res = await axios.post(`${import.meta.env.VITE_REDIRECT_URI}/auth/kakao/token`,{
					code	
				});
				localStorage.setItem("access_token", res.data.access_token);
				console.log(res);
				navigate("/code");
			} catch (error){
				console.error("Error occured", error);
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