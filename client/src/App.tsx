import './App.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Home from './pages/home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Home type='movies' />} />
        <Route path='/shows' element={<Home type='shows' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
