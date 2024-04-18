import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import Logo from '../../assets/roulette.png'
import User from '../../assets/user.png'
import Mail from '../../assets/mail.png'
import Edit from '../../assets/editing.png'
import Answer from '../../assets/a.png'
import Question from '../../assets/q.png'
import Save from '../../assets/save.png'
import Logout from '../../assets/power-off.png'
import useDetectClose from '../../hooks/useOutsideClick'
import './Header.css'

const Header = () => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const navigate = useNavigate();

  const dropdownClicked = () => {
    setIsOpen(!isOpen);
  };

  const linkHome = () => {
    navigate('/');
  };

  const linkMail = () => {
    navigate('/chat');
  };

  return (
    <div className="Header" style={{
      width: "100%",
      height: "70px",
      backgroundColor: "#FFE6E6",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <button onClick={linkHome} 
        style={{
          height: "80%",
          width: "70px",
          margin: "10px",
          border: "0",
          backgroundColor: "transparent",
        }}>
        <img src={Logo} style={{
          height: "100%",
          width: "100%",
        }}/>
      </button>
      <div className="button" 
        style={{
          height: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <button onClick={linkMail} 
          style={{
            width: "50px",
            height: "50px",
            margin: "5px",
            border: "0",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
          }}>
          <img src={Mail} style={{
            width: "30px",
          }}/>
        </button>
        <div className="dropdown" 
          ref={dropDownRef}
          style={{
            position: "relative",
            display: "inline-block",
          }}>
          <button 
            className="Profile" 
            onClick={dropdownClicked}
            style={{
              width: "50px",
              height: "50px",
              margin: "5px",
              border: "0",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
            }} >
            <img src={User} style={{
              width: "30px",
            }}/>
          </button>
          {isOpen && (
            <div className="dropdownList active" 
              style={{
                width: "150px",
                height: "238px",
                position: "absolute",
                right: "-20px",
                top: "65px",
                backgroundColor: "lightpink",
                boxShadow: "0px 8px 16px 0px rgba(0,,0,0,0.2)",
                
              }}>
              <Link to="/mypage/info" className="link borderBottom" onClick={dropdownClicked}>
                <img src={Edit} />마이페이지
              </Link>
              <Link to="/mypage/list" className="link borderBottom" onClick={dropdownClicked}>
                <img src={Question}/>내 질문 보기
              </Link>
              <Link to="/mypage/post" className="link borderBottom" onClick={dropdownClicked}>
                <img src={Save}/>저장한 코드
              </Link>
              <Link to="/mypage/code" className="link borderBottom" onClick={dropdownClicked}>
                <img src={Answer}/>답변한 코드
              </Link>
              <Link to="/" className="link" onClick={dropdownClicked}>
                <img src={Logout}/>로그아웃
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header