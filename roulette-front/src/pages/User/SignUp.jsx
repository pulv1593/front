import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const linkHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Sign UP !</h2>
      <div>
        <p>사용할 이름을 입력해주세요.</p>
        <input type="text"></input>
      </div>
      <button onClick={linkHome}>start</button>
    </div>
  )
}

export default SignUp;
