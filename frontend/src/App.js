import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'


// Auth Layout :
import AuthLayout from './Layouts/AuthLayout'
// Pages for Auth : 
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
