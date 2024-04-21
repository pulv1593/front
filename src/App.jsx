import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// component 가져오기
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import Loginhandler from './pages/User/Loginhandler';
import BoardMain from './pages/Code/BoardMain';
import RequestCode from './pages/Code/RequestCode';
import Chat from './pages/Chat/Chat';
import CodeIDE from './pages/Code/CodeIDE';
import RequestList from './pages/MyPage/RequestList';
import AnswerList from './pages/MyPage/AnswerList';
import SaveCodeList from './pages/MyPage/SaveCodeList';
import Myinfo from './pages/MyPage/Myinfo';
import PostDetailAns from './pages/Code/PostDetailAns';
import PostDetailReq from './pages/Code/PostDetailReq';

function App () {
  return (
    <div className='App' style={{
      height: "auto",
      minHeight: "100%",
    }}>
      <Router>
        <Header />

        <div className='Main' style={{
          minHeight: "calc(100vh - 50px)",
          width: "100%",
        }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<Login />} />
					<Route path="/login/oauth2/callback/kakao" element={<Loginhandler />} />
          <Route path="/code" element={<BoardMain />} />
          <Route path="/code/answer/:postId" element={<PostDetailAns />}/>
          <Route path="/code/:postId" element={<PostDetailReq />}/>
          <Route path="/code/ask" element={<RequestCode />} />
          <Route path="/css/:postId" element={<CodeIDE />} />
          <Route path="/chat" element={<Chat /> } />
          <Route path="/mypage/info" element={<Myinfo />} />
          <Route path="/mypage/list" element={<RequestList />} />
          <Route path="/mypage/post" element={<SaveCodeList />} />
          <Route path="/mypage/code" element={<AnswerList />} />
        </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App
