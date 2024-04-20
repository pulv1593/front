
const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?scope=account_email&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;

  const loginHandler = () => {
    window.location.href = link;
  };
	
  return (
		<div style={{
			border: "1px solid #000000",
			width: "40%",
			height: "70%",
			position: "absolute",
			left: "50%",
			top: "55%",
			transform: "translate(-50%, -50%)"
		}}>
			<button type='button' onClick={loginHandler} style={{
				width: "50%",
				height: "60px",
				fontSize: "20px",
				borderRadius: "40px",
				border: "0px",
				backgroundColor: "yellow",
				padding: "10px",
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)"
			}}>
				카카오로 로그인 하기
			</button>
		</div>
  );
};

export default Login;