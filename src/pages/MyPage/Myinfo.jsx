import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kakao from '../../assets/KakaoTalk_logo.png';
import axios from 'axios';

const Myinfo = () => {
    const navigate = useNavigate();
    const back_user = 'https://k9bceeba41403a.user-app.krampoline.com/mypage/member';
    
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
    });
    const [profile, setProfile] = useState('');
    
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const profile = localStorage.getItem('profile');
        const fetchUserInfo = async () => {
            try {
                const res = await axios.get(`${back_user}`, {
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
            fetchUserInfo();
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
                    <div style={{
                        padding: "10%",
                        display: "flex", 
                        alignItems: "center",
                    }}>
                        <img src={profile} alt="프로필 이미지" style={{
                            width: "70px",
                            height: "auto",
                        }}/>
                        <p style={{
                            paddingTop: "10px",
                            fontSize: "16px",
                        }}>
                            <span>{userInfo.name}</span>님
                        </p>
                    </div>
                </div>
                <div style={{
                    padding: "30px",
                    marginBottom: "30px",
                }}>
                    <p style={{
                        fontSize: "20px",
                    }}>소셜 로그인 계정</p>
                    <div style={{
                        padding: "10%",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <img src={kakao} style={{
                            width: "50px",
                            height: "auto",
                        }}/>
                        <p style={{
                            paddingLeft: "25%",
                            fontSize: "16px",
                        }}>
                            <span>{userInfo.email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myinfo;