import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './SignOutButton.css';

const SignOutButton = () => {
// 	경로 확인해보기
	const back_user = 'https://k9bceeba41403a.user-app.krampoline.com/user';
	const navigate = useNavigate();
	
	const handleWithdrawal = async () => {
		try {
			// 백엔드 API로 DELETE 요청 전송
		  const response = await axios.delete(`${back_user}`); 
		  console.log(response.data);
		  navigate('/');
		} catch (error) {
			console.error('회원 탈퇴 중 오류 발생:', error.response.data); // 에러 메시지 출력
		}
 	};
	
	return (
		<button onClick={handleWithdrawal} className="Cancel">
		  회원 탈퇴
		</button>
	);
};

export default SignOutButton;