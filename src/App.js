import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./components/Login";
import Volunteer from './routes/Volunteer';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import Notice from './routes/Notice';
import Mypage from "./routes/Mypage";


const GlobalStyle = createGlobalStyle
  `body{
        background: #e9ecef;
      }`;


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}>
        </Route>
        <Route path="/Volunteer" element={<Volunteer/>}>
        </Route>
        <Route path="/Notice" element={<Notice/>}></Route>
        <Route path="/Mypage" element={<Mypage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
{/* <Main>
      <div onClick={onLoginToggle}>로그인</div>
      {loginToggle && <Login onLoginToggle={onLoginToggle} />}
    </Main> */}