import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const linkLogin = () => {
    navigate('/user');
  };
	
	const linkLoginSuc = () => {
		navigate("/post/list/0");
	};
	
	const linkIDE = () => {
		navigate("/code");
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
			  </button>
		  )}
		  {token && (
			  <div>
				  <button 
					className="Start_Btn" 
					onClick={linkLoginSuc}
					style={{
					  width: "100%",
					  fontSize: "40px",
					  border: "0",
					  backgroundColor: "transparent",
				  }}>START
				  </button>
				  <button 
					className="Go_IDE" 
					onClick={linkIDE}
					style={{
					  width: "100%",
					  fontSize: "40px",
					  border: "0",
					  backgroundColor: "transparent",
				  }}>Go to IDE
				  </button>
				</div>
		  )}
    </div>
  )
}

export default Home;