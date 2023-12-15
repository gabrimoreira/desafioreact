import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Pages/Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Contato from './Pages/Contato';
import Sobre from './Pages/Sobre';
import Quiz from './Pages/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/' element={<Main/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
