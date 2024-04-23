import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import './Header.css'
import Dropdown from './Dropdown'
import Logo from '../../assets/roulette.png'
import User from '../../assets/user.png'
import Mail from '../../assets/mail.png'
import useDetectClose from '../../hooks/useOutsideClick'

const Header = () => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const navigate = useNavigate();
	
// 	로컬에서 token 가져옴
	const token = localStorage.getItem('access_token');
	console.log("토큰:  " +token);

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
		  {token && (
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
				  {/* 알람 개수 받아오기 */}
				  <span className="noticeCount" style={{
					position: "absolute",
					top: "5px",
					right: "75px",
					padding: "5px 10px",
					borderRadius: "50%",
					background: "red",
					color: "white",
				  }}>2</span>
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
					<Dropdown closeDrop={[isOpen, setIsOpen]}/>
				  )}
				</div>
			</div>
		  )}
		 
    </div>
  )
}

export default Header