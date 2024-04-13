import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// component 가져오기
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import SignUp from './pages/User/SignUp';
import BoardMain from './pages/Code/BoardMain';
import RequestCode from './pages/Code/RequestCode';
import Chat from './pages/Chat/Chat';
import CodeIDE from './pages/Code/CodeIDE';
import RequestList from './pages/MyPage/RequestList';
import AnswerList from './pages/MyPage/AnswerList';
import SaveCodeList from './pages/MyPage/SaveCodeList';
import Myinfo from './pages/MyPage/Myinfo';

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<Login />} />
          <Route path="/user/join" element={<SignUp />} />
          <Route path="/code" element={<BoardMain />} />
          <Route path="/code/ask" element={<RequestCode />} />
          <Route path="/css" element={<CodeIDE />} />
          <Route path="/chat" element={<Chat /> } />
          <Route path="/mypage/info" element={<Myinfo />} />
          <Route path="/mypage/list" element={<RequestList />} />
          <Route path="/mypage/post" element={<SaveCodeList />} />
          <Route path="/mypage/code" element={<AnswerList />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App
