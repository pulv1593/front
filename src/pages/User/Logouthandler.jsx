import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutHandler = () => {
// redirect-uri: backend-uri/logouts
	const navigate = useNavigate();
	const back_logout = 'https://k9bceeba41403a.user-app.krampoline.com/logouts';
	
// 	access_token 세션, 쿠키 지우기
// 	내일 동근님이랑 얘기해봐야겠다.
	useEffect(() => {
		const kakaoLogout = async (token) => {
			try {
				const access_token = localStorage.getItem('access_token');
				
				if (token) {
					const res = await axios.get(`${back_logout}`, null, {
						headers: {
							Authorization: `Bearer ${access_token}`
						}
					});
					console.log('로그아웃 성공: ', res);
					navigate('/');
				}
			} catch (error){
				console.error('로그아웃 중 오류 발생', error);
			}
		};
		kakaoLogout();
	}, [navigate]);
}

export default LogoutHandler;