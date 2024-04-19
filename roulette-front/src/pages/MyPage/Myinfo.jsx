import { useNavigate } from "react-router-dom";
import kakao from '../../assets/KakaoTalk_logo.png'
import './Myinfo.css'

const Myinfo = () => {
  const navigate = useNavigate();

  const linkHome = () => {
    navigate('/');
  };

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
          <img src="https://dummyimage.com/250x250/000/e0e0e0.png&text=profile+img"/>
        </div>
        <div style={{
          width: "100%",
          padding: "50px",
          fontSize: "1.2rem",
        }}>
          {/* 받아온 이름 뿌려주기 */}
          <p style={{
            paddingTop: "10px",
          }}>님</p>
          <p style={{
            paddingTop: "10px",
          }}>자기 소개</p>
          <input type="textarea" placeholder="자기소개" style={{
            width: "90%",
            height: "50%",
          }}/>
          {/* 본인이면 수정/탈퇴 버튼 보여주고, 본인이 아니면 안보여줌 */}
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
          {/* 소셜 이메일 */}
          0000000@kakao.com
          </p>
        </div>
      </div>
      <div style={{
        padding: "5%",
        marginBottom: "30px",
      }}>
        <button onClick={linkHome} className="Cancel">
          회원 탈퇴
        </button>
      </div>
    </div>
  );
};

export default Myinfo;