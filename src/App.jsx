import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// component 가져오기
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import LoginHandler from './pages/User/Loginhandler';
import BoardMain from './pages/Code/BoardMain';
import RequestCode from './pages/Code/RequestCode';
import Chat from './pages/Chat/Chat';
import CodeIDE from './pages/Code/CodeIDE';
import RequestList from './pages/MyPage/RequestList';
import AnswerList from './pages/MyPage/AnswerList';
import SaveCodeList from './pages/MyPage/SaveCodeList';
import Myinfo from './pages/MyPage/Myinfo';
import PostCodePreview from './pages/Code/PostCodePreview';
import PostDetailReq from './pages/Code/PostDetailReq';

function App () {
	const defaultCurrentPage = 0;
	
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
					<Route path="/login/oauth2/callback/kakao" element={<LoginHandler />} />
          <Route path={`/post/list/:currentPage`} element={<BoardMain defaultCurrentPage={defaultCurrentPage} />} />
          <Route path="/post/preview/:codeId" element={<PostCodePreview />}/>
          <Route path="/post/:postId" element={<PostDetailReq />}/>
          <Route path="/post/ask" element={<RequestCode />} />
          <Route path="/code" element={<CodeIDE />} />
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
