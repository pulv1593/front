import { useNavigate } from "react-router-dom";
import Arrow from '../../assets/right-arrow.png'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const linkLogin = () => {
    navigate('/user');
  };
	
	const linkLoginSuc = () => {
		navigate("/post/list/0");
	};
	
	const token = localStorage.getItem("access_token");
	console.log("home");

  return (
    <div className="Home_Container" style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    }}>
      <h1 style={{
        fontSize: "100px",
      }}>Image TO Code</h1>
		{!token && (
			<button 
				className="Login_Btn" 
				onClick={linkLogin} 
				style={{
				  width: "100%",
				  fontSize: "40px",
				  border: "0",
				  backgroundColor: "transparent",
			  }}>START        
				<img src={Arrow} style={{
				  width: "5%",
				  height: "5%",
				  paddingLeft: "20px"
				}}/>
			  </button>
		  )}
		  {token && (
			  <button 
				className="Login_Btn" 
				onClick={linkLoginSuc} 
				style={{
				  width: "100%",
				  fontSize: "40px",
				  border: "0",
				  backgroundColor: "transparent",
			  }}>START        
				<img src={Arrow} style={{
				  width: "5%",
				  height: "5%",
				  paddingLeft: "20px"
				}}/>
			  </button>
		  )}
    </div>
  )
}

export default Home;