import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = (props) => {
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get("code");
// 인가코드 백으로 보내는 작업 하는곳
	useEffect(() => {
    const kakaoLogin = async () => {
		try {
			const res = await axios({
        		method: "GET",
        		url: `${import.meta.env.VITE_REDIRECT_URL}/?code=${code}`,
						console.log(code);
        		headers: {
					 "Content-Type": "application/json;charset=utf-8",
				},
			});
			//백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        	//localStorage에 저장할 정보
				// localStorage.setItem("name", res.data.account.profile_nickname);
				// localStorage.setItem("email", res.data.account.account_email);
				// localStorage.setItem("profile_img", res.data.account.profile_img);
				// localStorage.setItem("uaer_id", res.data.user_id);
				// localStorage.setItem("access_token", res.data.access_token);
			//로그인 성공시 코드게시판으로 link
				navigate("/code");
			} catch (error){
				console.error("Error occured", error);
				// 로그인 실패 시 홈으로
				navigate("/");
			}
		};
		kakaoLogin();
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