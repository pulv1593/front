import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import SignOutButton from '../../components/Button/SignOutButton';
import kakao from '../../assets/KakaoTalk_logo.png';
import axios from 'axios';

const Myinfo = () => {
	const navigate = useNavigate();
// 	이 부분 경로 수정되고 동작 확인해보기
	// const back_user = 'https://k9bceeba41403a.user-app.krampoline.com/mypage/member';
	
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
	});
	const [profile, setProfile] = useState('');
	
	useEffect(() => {
		const token = localStorage.getItem('access_token');
		const profile = localStorage.getItem('profile');
		const userInfo = async () => {
			try {
				const res = await axios.get('https://k9bceeba41403a.user-app.krampoline.com/mypage/member', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				setUserInfo(res.data);
			} catch (error) {
				console.error('사용자 정보를 불러오는 중 오류가 발생했습니다.', error);
				navigate('/');
			}
		};
		if(token){
			userInfo();
		}
		if(profile) {
			setProfile(profile);
		}
	}, []);
	
	return (
	<div style={{
	  width: "auto",
	  height: "100%",
	  padding: "5% 10%",
	  fontWeight: "bold"
	}}>
	  <h2 style={{
		fontSize: "50px",
	  }}>My Page</h2>
	  <div style={{
		padding: "30px",
		marginBottom: "30px",
		display: "flex",
	  }}>
		<div style={{
		  padding: "10px",
		}}>
		  <p style={{
			fontSize: "20px", 
		  }}>프로필</p>
		  <img src={profile} alt="프로필 이미지" />
		</div>
		<div style={{
		  width: "100%",
		  padding: "50px",
		  fontSize: "1.2rem",
		}}>
		  {/* 받아온 이름 뿌려주기 */}
		  <p style={{
			paddingTop: "10px",
		  }}>
			 <span>{userInfo.name}</span>
			  님</p>
		  <p style={{
			paddingTop: "10px",
		  }}>자기 소개</p>
		  <input type="textarea" placeholder="자기소개" style={{
			width: "90%",
			height: "50%",
		  }}/>
			<button className="edit_btn">저장</button>
		</div>
	  </div>
	  <div style={{
		padding: "30px",
		marginBottom: "30px",
	  }}>
		<p style={{
		  fontSize: "25px",
		}}>소셜 로그인 계정</p>
		<div style={{
		  padding: "10%",
		  display: "flex",
		  alignItems: "center",
		}}>
		  <img src={kakao} style={{
			width: "80px",
			height: "auto",
		  }}/>
		  <p style={{
			paddingLeft: "25%",
		  }}>
			  <span>{userInfo.email}</span>
		  </p>
		</div>
	  </div>
	  <div style={{
		padding: "5%",
		marginBottom: "30px",
	  }}>
	  </div>
	</div>
	);
};

export default Myinfo;